<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <h1>Parlons de votre projet</h1>
    <p>
      Une question sur l'éco-conception ? <br/>Un site à créer ou optimiser ?  <br/>Écrivez-moi, <strong>je réponds personnellement sous 48h</strong>.
    </p>
    <p v-if="sent" class="notice" aria-live="polite">✓ Message envoyé ! Je vous recontacte très vite.</p>
    <p v-if="error" class="error" aria-live="assertive">{{ error }}</p>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>Ne pas remplir : <input name="bot-field" v-model="form.botField" /></label>
      </p>

      <label>Votre nom
        <input name="name" v-model="form.name" required />
      </label>

      <label>Votre Email
        <input type="email" name="email" v-model="form.email" required />
      </label>

      <label>Votre message (décrivez votre projet ou posez votre question)
        <textarea name="message" v-model="form.message" required rows="6"></textarea>
      </label>

      <label class="optin">
        <input type="checkbox" name="optin" v-model="form.optin" required />
        <span>
          J'accepte les
          <NuxtLink to="/mentions-legales" target="_blank" rel="noopener noreferrer">mentions légales</NuxtLink>.
        </span>
      </label>

      <button type="submit" :disabled="loading">{{ loading ? 'Envoi…' : 'Envoyer mon message →' }}</button>
    </form>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Helper function to encode form data
function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

// Head metadata
const config = useRuntimeConfig()

useHead({
  title: 'Contact',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `${config.public.siteUrl}/contact`,
    },
  ],
})

// Reactive state
const loading = ref(false)
const sent = ref(false)
const error = ref(null)
const form = reactive({
  name: '',
  email: '',
  message: '',
  botField: '',
  optin: false
})

// Submit handler
async function onSubmit() {
  error.value = null
  if (loading.value) return
  loading.value = true

  try {
    const body = encode({
      'form-name': 'contact',
      name: form.name,
      email: form.email,
      message: form.message,
      'bot-field': form.botField,
      optin: form.optin ? 'yes' : 'no'
    })

    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })

    if (res.ok) {
      sent.value = true
      // Reset form
      form.name = ''
      form.email = ''
      form.message = ''
      form.botField = ''
      form.optin = false
    } else {
      error.value = 'Erreur lors de l\'envoi. Réessayez plus tard.'
    }
  } catch (e) {
    error.value = 'Réseau indisponible. Vérifiez votre connexion.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.container {
  width: clamp(90vw, 80vw, 720px);
  margin: 2rem auto;
}

.hidden { display: none; }
label { display:block; margin: .75rem 0; }
input, textarea { width:100%; }
input[type='checkbox'] { width: auto; margin-top: 0.2rem; }
.optin { display: flex; align-items: flex-start; gap: 0.5rem; }
.optin a {
  background: linear-gradient(currentColor, currentColor) right bottom / 100% 0.12em no-repeat;
  transition: background-size 0.4s;
}
.optin a:hover {
  background-size: 100% 0.22em;
}
.notice { background: #f0fff4; border: 1px solid #b7f5c6; padding: .75rem; margin-bottom: 1rem; }

button {
  background-color: #0DC763;
  color: white;
  border: 1px solid transparent;
  border-radius: 25px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: white;
  color: #0DC763;
  border: 1px solid #0DC763;
}
/* input:focus,
textarea:focus {
  outline: 2px solid #0dc763;
  outline-offset: 2px;
} */
 input,
textarea {
  outline: none;
}

input:focus,
textarea:focus,
input:focus-visible,
textarea:focus-visible {
  outline: none;
  box-shadow: none;
  border: 2px solid #04d94f;
  box-shadow: 0 0 0 2px rgba(4, 217, 79, 0.25);
}

input:-webkit-autofill,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  box-shadow: 0 0 0px 1000px #fff inset;
  -webkit-text-fill-color: #000;
}

</style>
