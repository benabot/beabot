<template>
  <form
    class="idea-form"
    name="duospend-idea"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    :aria-describedby="noteId"
  >
    <input type="hidden" name="form-name" value="duospend-idea" />
    <input type="hidden" name="app" value="duo-spend" />
    <input type="hidden" name="locale" :value="locale" />

    <p class="idea-form__honeypot">
      <label>
        {{
          isEnglish ? 'Do not fill in this field' : 'Ne pas remplir ce champ'
        }}
        <input name="bot-field" type="text" tabindex="-1" autocomplete="off" />
      </label>
    </p>

    <label class="idea-form__field">
      <span>
        {{ isEnglish ? 'Your idea' : 'Votre idée' }}
        <small>{{ isEnglish ? 'required' : 'obligatoire' }}</small>
      </span>
      <textarea name="idea" rows="5" required></textarea>
    </label>

    <label class="idea-form__field">
      <span>
        {{
          isEnglish
            ? 'Why would this be useful to you?'
            : 'Pourquoi cela vous serait utile ?'
        }}
        <small>{{ isEnglish ? 'optional' : 'facultatif' }}</small>
      </span>
      <textarea name="usefulness" rows="4"></textarea>
    </label>

    <label class="idea-form__field">
      <span>
        {{ isEnglish ? 'Your email' : 'Votre e-mail' }}
        <small>{{ isEnglish ? 'optional' : 'facultatif' }}</small>
      </span>
      <input name="email" type="email" autocomplete="email" inputmode="email" />
    </label>

    <p :id="noteId" class="idea-form__note">
      {{
        isEnglish
          ? 'Your address is used only to reply about this suggestion. No newsletter.'
          : 'Votre adresse sert uniquement à vous répondre à propos de cette suggestion. Aucune newsletter.'
      }}
      <AppLink :to="isEnglish ? '/en/legal/' : '/mentions-legales/'">
        {{
          isEnglish ? 'Privacy details' : 'Détails sur les données personnelles'
        }}
      </AppLink>
    </p>

    <button type="submit">
      {{ isEnglish ? 'Send the suggestion' : 'Envoyer la proposition' }}
    </button>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  locale: 'fr' | 'en'
}>()

const isEnglish = props.locale === 'en'
const noteId = `duospend-idea-note-${props.locale}`
</script>

<style lang="scss" scoped>
@use '~/assets/css/vars/_colors.scss' as *;

.idea-form {
  display: grid;
  gap: 1rem;
  padding: clamp(1.15rem, 3vw, 1.75rem);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.9);
}

.idea-form__field {
  display: grid;
  gap: 0.45rem;
  color: $gris1;
  font-weight: 700;
}

.idea-form__field span {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.35rem 1rem;
}

.idea-form__field small {
  color: $gris3;
  font-size: 0.76rem;
  font-weight: 500;
}

.idea-form textarea,
.idea-form input {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 1px solid rgba(15, 23, 42, 0.16);
  border-radius: 0.8rem;
  background: white;
  color: $gris1;
  font: inherit;
}

.idea-form textarea {
  resize: vertical;
}

.idea-form textarea:focus-visible,
.idea-form input:focus-visible,
.idea-form button:focus-visible,
.idea-form a:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
}

.idea-form__note {
  margin: 0;
  color: $gris3;
  font-size: 0.85rem;
  line-height: 1.6;
}

.idea-form__note a {
  color: $gris2;
  font-weight: 700;
  text-underline-offset: 0.16em;
}

.idea-form button {
  justify-self: start;
  min-height: 2.9rem;
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 999px;
  background: $vert;
  color: white;
  font-weight: 800;
  cursor: pointer;
}

.idea-form__honeypot {
  position: absolute;
  left: -9999px;
}
</style>
