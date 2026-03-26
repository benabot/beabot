<template>
  <dialog
    ref="dialogEl"
    class="lightbox"
    aria-modal="true"
    :aria-label="current?.alt || 'Image agrandie'"
    @cancel.prevent="close"
    @click.self="close"
    @keydown.esc.prevent="close"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
  >
    <div class="lightbox__inner" @click.stop>
      <button
        type="button"
        class="lightbox__close"
        aria-label="Fermer"
        @click="close"
      >
        <span aria-hidden="true">×</span>
      </button>

      <button
        v-if="images.length > 1"
        type="button"
        class="lightbox__nav lightbox__nav--prev"
        aria-label="Image précédente"
        :disabled="currentIndex === 0"
        @click="prev"
      >
        ‹
      </button>

      <figure class="lightbox__figure">
        <img
          v-if="current"
          :src="current.src"
          :alt="current.alt"
          class="lightbox__img"
        />
        <figcaption v-if="current?.title" class="lightbox__caption">
          <span class="lightbox__caption-title">{{ current.title }}</span>
          <span v-if="current.subtitle" class="lightbox__caption-sub">
            {{ current.subtitle }}
          </span>
        </figcaption>
      </figure>

      <button
        v-if="images.length > 1"
        type="button"
        class="lightbox__nav lightbox__nav--next"
        aria-label="Image suivante"
        :disabled="currentIndex === images.length - 1"
        @click="next"
      >
        ›
      </button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface LightboxImage {
  src: string
  alt: string
  title?: string
  subtitle?: string
}

const props = defineProps<{
  images: LightboxImage[]
}>()

const dialogEl = ref<HTMLDialogElement | null>(null)
const currentIndex = ref(0)

const current = computed(() => props.images[currentIndex.value] ?? null)

function open(index: number) {
  if (!props.images.length) {
    return
  }

  currentIndex.value = Math.min(Math.max(index, 0), props.images.length - 1)

  if (!dialogEl.value?.open) {
    dialogEl.value?.showModal()
  }
}

function close() {
  if (dialogEl.value?.open) {
    dialogEl.value.close()
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function next() {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss" scoped>
.lightbox {
  position: fixed;
  inset: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;

  &::backdrop {
    background: rgba(10, 14, 20, 0.88);
    backdrop-filter: blur(4px);
  }
}

.lightbox[open] {
  display: grid;
}

.lightbox__inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: min(92vw, 1200px);
  max-height: 90vh;
}

.lightbox__figure {
  margin: 0;
  flex: 1;
  display: grid;
  gap: 0.75rem;
  min-height: 0;
}

.lightbox__img {
  display: block;
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 0.75rem;
}

.lightbox__caption {
  display: grid;
  gap: 0.15rem;
  text-align: center;
}

.lightbox__caption-title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 700;
}

.lightbox__caption-sub {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.78rem;
}

.lightbox__close {
  position: absolute;
  top: -2.5rem;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.14s;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }
}

.lightbox__nav {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.14s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.18);
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
}

@media (max-width: 720px) {
  .lightbox__inner {
    width: min(94vw, 1200px);
    gap: 0.65rem;
  }

  .lightbox__close {
    top: -2.3rem;
  }

  .lightbox__nav {
    width: 2.15rem;
    height: 2.15rem;
    font-size: 1.35rem;
  }
}
</style>
