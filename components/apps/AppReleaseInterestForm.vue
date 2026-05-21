<template>
  <form
    class="release-form"
    name="app-release-interest"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    :action="actionPath"
    :aria-describedby="statusMessageId"
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
      <p class="release-form__eyebrow">
        {{ locale === 'fr' ? 'Prépublication' : 'Pre-release' }}
      </p>
      <h3>
        {{
          locale === 'fr'
            ? "Être informé de la sortie de l'app"
            : 'Get notified at launch'
        }}
      </h3>
      <p>
        {{
          locale === 'fr'
            ? `Recevez un message quand ${appName} sera disponible.`
            : `Receive an email when ${appName} becomes available.`
        }}
      </p>
    </div>

    <div class="release-form__controls">
      <label class="release-form__field">
        <span>{{ locale === 'fr' ? 'Nom' : 'Name' }} <small>{{ locale === 'fr' ? 'optionnel' : 'optional' }}</small></span>
        <input
          v-model="name"
          type="text"
          name="name"
          autocomplete="name"
          :placeholder="locale === 'fr' ? 'Votre nom' : 'Your name'"
        />
      </label>

      <label class="release-form__field">
        <span>{{ locale === 'fr' ? 'Adresse e-mail' : 'Email address' }} <small>{{ locale === 'fr' ? 'obligatoire' : 'required' }}</small></span>
        <input
          v-model="email"
          type="email"
          name="email"
          required
          autocomplete="email"
          inputmode="email"
          :placeholder="locale === 'fr' ? 'vous@exemple.fr' : 'you@example.com'"
        />
      </label>

      <label class="release-form__consent">
        <input v-model="consent" type="checkbox" name="consent" required />
        <span>
          {{
            locale === 'fr'
              ? `J'accepte d'être recontacté uniquement pour la sortie de ${appName}.`
              : `I agree to be contacted only for the release of ${appName}.`
          }}
          <AppLink
            to="/mentions-legales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ locale === 'fr' ? 'Mentions légales' : 'Legal notice' }}
          </AppLink>
        </span>
      </label>

      <button type="submit" :disabled="loading">
        {{ loading ? (locale === 'fr' ? 'Envoi…' : 'Sending…') : (locale === 'fr' ? 'Envoyer' : 'Send') }}
      </button>
    </div>

    <p
      v-if="sent"
      :id="successMessageId"
      class="release-form__success"
      aria-live="polite"
    >
      {{
        locale === 'fr'
          ? `Demande enregistrée pour ${appName}.`
          : `Request saved for ${appName}.`
      }}
    </p>
    <p
      v-else-if="error"
      :id="errorMessageId"
      class="release-form__error"
      aria-live="assertive"
    >
      {{ error }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  appName: string
  locale?: 'fr' | 'en'
}>()
const locale = computed(() => props.locale ?? 'fr')

const route = useRoute()
const actionPath = computed(() => route.path || '/')
const formId = computed(
  () =>
    `release-interest-${props.appName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
)
const successMessageId = computed(() => `${formId.value}-success`)
const errorMessageId = computed(() => `${formId.value}-error`)
const statusMessageId = computed(() =>
  error.value
    ? errorMessageId.value
    : sent.value
      ? successMessageId.value
      : undefined,
)

const name = ref('')
const email = ref('')
const botField = ref('')
const consent = ref(false)
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

  error.value = ''
  sent.value = false

  if (!email.value.trim()) {
    error.value =
      locale.value === 'fr'
        ? 'Indiquez votre adresse e-mail pour être prévenu.'
        : 'Please provide your email address.'
    return
  }

  if (!consent.value) {
    error.value =
      locale.value === 'fr'
        ? "Confirmez l'accord de contact avant l'envoi."
        : 'Please confirm contact consent before sending.'
    return
  }

  loading.value = true

  try {
    const body = encode({
      'form-name': 'app-release-interest',
      app: props.appName,
      name: name.value.trim(),
      email: email.value.trim(),
      'bot-field': botField.value,
      consent: consent.value ? 'yes' : 'no',
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
    name.value = ''
    email.value = ''
    botField.value = ''
    consent.value = false
  } catch {
    error.value =
      locale.value === 'fr'
        ? 'Impossible d’envoyer la demande pour le moment.'
        : 'Unable to send request right now.'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;
.release-form {
  display: grid;
  gap: 1rem;
  padding: clamp(1.25rem, 3vw, 1.85rem);
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #05d94f 0%, #04c947 100%);
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

.release-form__field small {
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
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

.release-form__consent {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.65rem;
  align-items: start;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.86);
}

.release-form__consent input {
  width: 1.05rem;
  height: 1.05rem;
  margin-top: 0.18rem;
  accent-color: white;
}

.release-form__consent input:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.38);
  outline-offset: 3px;
}

.release-form__consent a {
  color: white;
  font-weight: 700;
  text-decoration-thickness: 0.08em;
  text-underline-offset: 0.18em;
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
