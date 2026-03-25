<template>
  <form
    class="release-form"
    name="app-release-interest"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    :action="actionPath"
    @submit.prevent="onSubmit"
  >
    <input type="hidden" name="form-name" value="app-release-interest" />
    <input type="hidden" name="app" :value="appName" />

    <p class="release-form__honeypot">
      <label>
        Ne pas remplir
        <input v-model="botField" name="bot-field" />
      </label>
    </p>

    <div class="release-form__intro">
      <p class="release-form__eyebrow">Prépublication</p>
      <h3>Être informé de la sortie de l'app</h3>
      <p>Le formulaire enregistre la demande quand la page est prête.</p>
    </div>

    <div class="release-form__controls">
      <label class="release-form__field">
        <span>Adresse e-mail</span>
        <input
          v-model="email"
          type="email"
          name="email"
          required
          autocomplete="email"
          inputmode="email"
          placeholder="vous@exemple.fr"
        />
      </label>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Envoi…' : 'Envoyer' }}
      </button>
    </div>

    <p v-if="sent" class="release-form__success" aria-live="polite">
      Demande enregistrée pour {{ appName }}.
    </p>
    <p v-else-if="error" class="release-form__error" aria-live="assertive">
      {{ error }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  appName: string
}>()

const route = useRoute()
const actionPath = computed(() => route.path || '/')

const email = ref('')
const botField = ref('')
const loading = ref(false)
const sent = ref(false)
const error = ref('')

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

async function onSubmit() {
  if (loading.value) return

  loading.value = true
  error.value = ''

  try {
    const body = encode({
      'form-name': 'app-release-interest',
      app: props.appName,
      email: email.value,
      'bot-field': botField.value,
    })

    const response = await fetch(actionPath.value, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })

    if (!response.ok) {
      throw new Error('submit')
    }

    sent.value = true
    email.value = ''
    botField.value = ''
  } catch {
    error.value = 'Impossible d’envoyer la demande pour le moment.'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.release-form {
  display: grid;
  gap: 1rem;
  padding: clamp(1.25rem, 3vw, 1.85rem);
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #04d94f 0%, #03c944 100%);
  color: white;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
    align-items: end;
    gap: 1.25rem 1.5rem;
  }
}

.release-form__intro {
  display: grid;
  gap: 0.55rem;

  @media (min-width: $breakpoint-tablet) {
    grid-column: 1 / 2;
    max-width: 34rem;
  }
}

.release-form__eyebrow {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.release-form__intro h3 {
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 2rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.release-form__intro p {
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.65;
}

.release-form__controls {
  display: grid;
  gap: 0.85rem;

  @media (min-width: $breakpoint-tablet) {
    grid-column: 2 / 3;
  }
}

.release-form__field {
  display: grid;
  gap: 0.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.94);
}

.release-form__field input {
  width: 100%;
  min-height: 3rem;
  padding: 0.85rem 0.95rem;
  border: 0;
  border-radius: 0.95rem;
  background: rgba(255, 255, 255, 0.18);
  color: white;
}

.release-form__field input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.release-form__field input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.28);
}

.release-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  padding: 0.85rem 1.2rem;
  border: 0;
  border-radius: 999px;
  background: white;
  color: $vert;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease,
    opacity 0.14s ease;
}

.release-form button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(255, 255, 255, 0.14);
}

.release-form button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.38);
}

.release-form button:disabled {
  opacity: 0.72;
  cursor: progress;
}

.release-form__success,
.release-form__error {
  margin: 0;
  line-height: 1.6;

  @media (min-width: $breakpoint-tablet) {
    grid-column: 1 / -1;
  }
}

.release-form__success {
  color: rgba(255, 255, 255, 0.96);
}

.release-form__error {
  color: rgba(255, 255, 255, 0.92);
}

.release-form__honeypot {
  position: absolute;
  left: -9999px;
}

@media (prefers-reduced-motion: reduce) {
  .release-form button {
    transition: none;
  }
}
</style>
