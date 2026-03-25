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
      <label
        >Ne pas remplir : <input v-model="botField" name="bot-field"
      /></label>
    </p>

    <label class="release-form__field">
      Être informé de la sortie de l'app
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
      {{ loading ? 'Envoi…' : "M'informer de la sortie" }}
    </button>

    <p class="release-form__note">
      Le formulaire transmet votre demande à hello@beabot.fr.
    </p>
    <p v-if="sent" class="release-form__success" aria-live="polite">
      Demande envoyée pour {{ appName }}.
    </p>
    <p v-else-if="error" class="release-form__error" aria-live="assertive">
      {{ error }}
    </p>

    <p class="release-form__fallback">
      Ou écrivez directement à
      <a :href="mailtoHref">hello@beabot.fr</a>.
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

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(
    `Être informé de la sortie de ${props.appName}`,
  )
  const body = encodeURIComponent(
    `Bonjour,\n\nJe souhaite être informé de la sortie de ${props.appName}.\n\nMon email : ${email.value || '[à compléter]'}\n`,
  )
  return `mailto:hello@beabot.fr?subject=${subject}&body=${body}`
})

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
    error.value =
      'Impossible d’envoyer la demande pour le moment. Utilisez le lien email juste en dessous.'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.release-form {
  display: grid;
  gap: 0.9rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
}

.release-form__field {
  display: grid;
  gap: 0.55rem;
  font-weight: 600;
  color: $gris2;
}

.release-form__field input {
  width: 100%;
  min-height: 3rem;
  padding: 0.8rem 0.95rem;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.9);
  color: $gris1;
}

.release-form__field input:focus-visible {
  outline: none;
  border-color: $vert;
  box-shadow: 0 0 0 4px rgba(13, 199, 99, 0.14);
}

.release-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  padding: 0.8rem 1.2rem;
  border: 0;
  border-radius: 999px;
  background: $vert;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease,
    opacity 0.14s ease;

  @media (min-width: $breakpoint-tablet) {
    width: auto;
  }
}

.release-form button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(13, 199, 99, 0.18);
}

.release-form button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(13, 199, 99, 0.18);
}

.release-form button:disabled {
  opacity: 0.7;
  cursor: progress;
}

.release-form__note,
.release-form__fallback {
  margin: 0;
  color: $gris3;
  line-height: 1.6;

  @media (min-width: $breakpoint-tablet) {
    grid-column: 1 / -1;
  }
}

.release-form__fallback a {
  color: $vert;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.release-form__fallback a:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
  border-radius: 0.3rem;
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
  color: darken($vert, 10%);
}

.release-form__error {
  color: #b91c1c;
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
