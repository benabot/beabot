<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <div class="contact-layout">
      <!-- Colonne gauche -->
      <div class="contact-aside">
        <p class="kicker">Contact</p>


        <h1>Parlons de votre projet</h1>

        <p>
          Une question sur l'éco-conception ?<br />
          Un site à créer ou optimiser ?<br />
          Écrivez-moi, <strong>je vous réponderai rapidement</strong>.
        </p>

        <div class="promise" aria-label="Engagements">
          <!-- <ul>
            <li>Réponse sous 48h ouvrées</li>
            <li>Échanges clairs, sans jargon inutile</li>
            <li>Aucune exploitation commerciale de vos données</li>
          </ul> -->
          <p>Un premier échange suffit pour cadrer : objectifs, contraintes, budget, délais.</p>
        </div>


<div class="contact-links">
  <button
    type="button"
    class="copy-email-btn"
    @click="copyEmail"
    :disabled="copied"
  >
    {{ copied ? 'Email copié ✓' : 'Copier mon email' }}
  </button>

  <a
    class="contact-link"
    href="https://www.linkedin.com/in/benoit-abot/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>


        <p v-if="sent" class="notice" aria-live="polite">
          ✓ Message envoyé ! Je vous recontacte très vite.
        </p>
        <p v-if="error" class="error" aria-live="assertive">{{ error }}</p>
      </div>

      <!-- Colonne droite -->
      <div class="form-panel">
        <form
          class="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact"
          @submit.prevent="onSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />

          <!-- Honeypot -->
          <p class="hp">
            <label>Ne pas remplir : <input name="bot-field" v-model="form.botField" /></label>
          </p>

          <label>
            Votre nom
            <input name="name" v-model="form.name" required autocomplete="family-name" />
          </label>

          <label>
            Votre prénom
            <input name="prenom" v-model="form.prenom" required autocomplete="given-name" />
          </label>

          <label>
            Votre Email
            <input type="email" name="email" v-model="form.email" required autocomplete="email" />
          </label>

          <label>
            Votre message (décrivez votre projet ou posez votre question)
            <textarea name="message" v-model="form.message" required rows="7"></textarea>
          </label>
<label class="optin">
  <input class="optin__control" type="checkbox" name="optin" v-model="form.optin" required />
  <span>
    J'accepte les
    <AppLink to="/mentions-legales/" target="_blank" rel="noopener noreferrer">mentions légales</AppLink>
    <small class="privacy-note-inline">
      Vos coordonnées sont utilisées uniquement pour répondre à votre demande. Aucune newsletter, aucun partage à des tiers.
    </small>
  </span>
</label>


          <button type="submit" :disabled="loading">
            {{ loading ? 'Envoi…' : 'Envoyer mon message →' }}
          </button>

          <p class="form-note">Vous recevrez une réponse sous 2 jours ouvrés.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { canonicalUrl } from '~/utils/seo-url'
const copied = ref(false)
const email = 'hello@beabot.fr'

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = email
    ta.setAttribute('readonly', '')
    ta.style.position = 'absolute'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  } finally {
    copied.value = true
    window.setTimeout(() => (copied.value = false), 1600)
  }
}


function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

const config = useRuntimeConfig()
const contactCanonicalUrl = canonicalUrl(config.public.siteUrl, '/contact')

// SEO meta tags - useSeoMeta pour un remplacement propre des meta globales
useSeoMeta({
  title: 'Contact — Développeur web éco-conception',
  description: 'Contactez Benoît Abot, développeur web spécialisé en éco-conception. Devis gratuit pour votre projet web sobre, performant et durable.',
  ogTitle: 'Contact — Benoît Abot, développeur éco-conception',
  ogDescription: 'Une question sur l\'éco-conception web ? Un site à créer ou optimiser ? Écrivez-moi, je vous réponds sous 48h.',
  ogType: 'website',
  ogUrl: contactCanonicalUrl,
  twitterTitle: 'Contact — Benoît Abot',
  twitterDescription: 'Développeur web éco-conception. Contactez-moi pour votre projet web sobre et performant.',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: contactCanonicalUrl,
    },
  ],
})

const loading = ref(false)
const sent = ref(false)
const error = ref(null)
const form = reactive({
  name: '',
  prenom: '',
  email: '',
  message: '',
  botField: '',
  optin: false,
})

async function onSubmit() {
  error.value = null
  if (loading.value) return
  loading.value = true

  try {
    const body = encode({
      'form-name': 'contact',
      name: form.name,
      prenom: form.prenom,
      email: form.email,
      message: form.message,
      'bot-field': form.botField,
      optin: form.optin ? 'yes' : 'no',
    })

    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })

    if (res.ok) {
      sent.value = true
      form.name = ''
      form.prenom = ''
      form.email = ''
      form.message = ''
      form.botField = ''
      form.optin = false
    } else {
      error.value = "Erreur lors de l'envoi. Réessayez plus tard."
    }
  } catch (e) {
    error.value = 'Réseau indisponible. Vérifiez votre connexion.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Container: tu peux garder ton clamp */
.container {
  width: clamp(90vw, 80vw, 1040px);
  margin: 2rem auto;
}

/* Layout 2 colonnes desktop */
.contact-layout {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr 1.15fr;
    gap: 40px;
    align-items: start;
  }
}

/* Colonne gauche */
h1 {
  font-size: clamp(2.4rem, 5.2vw, 5.2rem);
  line-height: 0.95;
  margin: 0 0 1rem;
}
.kicker {
  margin: 0 0 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  opacity: 0.55;

  /* petit trait “print”, discret */
  display: inline-block;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(0,0,0,0.18);
}


.contact-aside p {
  line-height: 1.6;
  margin: 0 0 1rem;
}

.promise {
  margin: 0 0 1.25rem;
  padding: 14px 16px;
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.03);
}

.promise ul {
  margin: 0;
  padding-left: 18px;
}
/* Texte accessible mais non visible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* Ligne email */
.email-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* SVG email */
.email-svg {
  width: 180px; /* ajuste selon ton layout */
  height: 18px;
}

.email-svg text {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  fill: #000;
}

/* Bouton copier */
.copy-email-btn {
  padding: 8px 12px;
  border-radius: 999px;
  border: 2px solid rgba(0,0,0,0.14);
  background: rgba(255,255,255,0.7);
  cursor: pointer;
  color: grey;
  font-weight: 800;
  transition: transform .12s ease, background .12s ease, border-color .12s ease, box-shadow .12s ease;
}

.copy-btn:hover {
  background: #fff;
  transform: translateY(-1px);
}

.copy-btn:focus,
.copy-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
  border-color: #04d94f;
}

.copy-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.contact-links {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}


.contact-link {
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 700;
}

/* Messages */
.notice {
  background: #f0fff4;
  border: 1px solid #b7f5c6;
  padding: 0.75rem;
  margin: 1rem 0 0;
  border-radius: 12px;
}

.error {
  background: #fff5f5;
  border: 1px solid #f5b7b7;
  padding: 0.75rem;
  margin: 1rem 0 0;
  border-radius: 12px;
}

/* Panel formulaire */
.form-panel {
  border: 2px solid rgba(0, 0, 0, 0.14);
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.02);
  padding: clamp(16px, 2vw, 24px);

}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  margin: 1rem 0;
  font-weight: 700;
}

/* Champs */
input,
textarea {
  width: 100%;
  margin-top: 0.5rem;

  padding: 12px 14px;
  border-radius: 12px;

  border: 2px solid rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.75);
  color: #000;

  font-size: 16px;
  line-height: 1.35;

  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

input:hover,
textarea:hover {
  background: rgba(255, 255, 255, 0.95);
}

input:focus,
textarea:focus,
input:focus-visible,
textarea:focus-visible {
  outline: none;
  border-color: #04d94f;
  box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
  background: #fff;
}

textarea {
  resize: vertical;
  min-height: 160px;
}

.privacy-note-inline {
  display: block;
  margin-top: 6px;
  font-size: 0.7rem;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.6);
  font-style: italic;
  font-weight: 400;
}

/* Checkbox + optin */


.optin {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 10px;
  align-items: center;
  margin: 1rem 0 0.25rem;
  font-weight: 500;
}

.optin__control {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
 align-self: center;
  border: 2px solid rgba(0,0,0,0.28);
  border-radius: 6px;
  background: rgba(255,255,255,0.8);

  display: grid;
  place-content: center;

  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
}

.optin__control::before {
  content: "";
  width: 10px;
  height: 10px;
  transform: scale(0);
  transition: transform .12s ease;
  box-shadow: inset 1em 1em #04d94f;
  clip-path: polygon(14% 44%, 0 65%, 44% 100%, 100% 20%, 80% 0, 43% 62%);
}

.optin__control:checked {
  border-color: #04d94f;
  background: #fff;
}

.optin__control:checked::before {
  transform: scale(1);
}

.optin__control:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
  border-color: #04d94f;
}



input[type='checkbox'] {
  width: 18px;
  height: 18px;
  margin-top: 0.2rem;
}

/* .optin {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-weight: 500;
} */

.optin a {
  background: linear-gradient(currentColor, currentColor) right bottom / 100% 0.12em no-repeat;
  transition: background-size 0.3s ease;
  text-decoration: none;
}
.optin a:hover {
  background-size: 100% 0.22em;
}

/* Bouton */
button {
  margin-top: 0.25rem;

  background-color: #0dc763;
  color: white;
  border: 2px solid transparent;
  border-radius: 999px;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  font-weight: 800;

  transition: transform 0.12s ease, filter 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease,
    color 0.12s ease, border-color 0.12s ease;
}

button:hover {
  background-color: white;
  color: #0dc763;
  border-color: #0dc763;
  transform: translateY(-1px);
}

button:focus,
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.form-note {
  margin: 12px 0 0;
  font-size: 0.95rem;
  opacity: 0.75;
}

/* Honeypot: off-screen (mieux que display:none) */
.hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Autofill Chrome */
input:-webkit-autofill,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  box-shadow: 0 0 0px 1000px #fff inset;
  -webkit-text-fill-color: #000;
}
/* Desktop: alignement plus net des colonnes */
@media (min-width: 1024px) {
  .form-panel {
    margin-top: 6px;
  }
}
</style>
