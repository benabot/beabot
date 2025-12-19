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
  botField: ''
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
      'bot-field': form.botField
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
</style>
