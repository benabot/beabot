<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <h1>Contact</h1>
    <p v-if="sent" class="notice" aria-live="polite">Message envoyé. Merci.</p>
    <p v-if="error" class="error" aria-live="assertive">{{ error }}</p>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>Ne pas remplir : <input name="bot-field" v-model="form.botField" /></label>
      </p>

      <label>Nom
        <input name="name" v-model="form.name" required />
      </label>

      <label>Email
        <input type="email" name="email" v-model="form.email" required />
      </label>

      <label>Message
        <textarea name="message" v-model="form.message" required rows="6"></textarea>
      </label>

      <button type="submit" :disabled="loading">{{ loading ? 'Envoi…' : 'Envoyer' }}</button>
    </form>
  </section>
</template>

<script>
function encode(data) {
  return Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export default {
  head: { title: 'Contact' },
  data() {
    return {
      loading: false,
      sent: false,
      error: null,
      form: { name: '', email: '', message: '', botField: '' }
    }
  },
  methods: {
    async onSubmit() {
      this.error = null
      if (this.loading) return
      this.loading = true
      try {
        const body = encode({
          'form-name': 'contact',
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
          'bot-field': this.form.botField
        })
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body
        })
        if (res.ok) {
          this.sent = true
          this.form = { name: '', email: '', message: '', botField: '' }
        } else {
          this.error = 'Erreur lors de l\'envoi. Réessayez plus tard.'
        }
      } catch (e) {
        this.error = 'Réseau indisponible. Vérifiez votre connexion.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.container { max-width: 720px; margin: 2rem auto; }
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
