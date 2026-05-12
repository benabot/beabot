<template>
  <NuxtLayout>
    <main class="error-page">
      <section class="container container-error">
        <!-- Oeufs décoratifs -->
        <div class="error-oeufs">
          <Oeuf width="20%" transform="rotate(-25)" fill="#04d94f" class="oeuf-1" />
          <Oeuf width="15%" transform="rotate(45)" fill="#0439d9" class="oeuf-2" />
          <Oeuf width="18%" transform="rotate(-65)" fill="#f2a81d" class="oeuf-3" />
        </div>

        <!-- Contenu erreur -->
        <div class="error-content">
          <h1 class="error-title">{{ error.statusCode }}</h1>
          <h2 class="error-subtitle text-gris2">
            {{ error.statusCode === 404 ? 'Page introuvable' : 'Erreur' }}
          </h2>
          <p class="error-text text-gris3">
            {{ error.statusCode === 404
              ? 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.'
              : error.message || 'Une erreur est survenue.'
            }}
          </p>

          <!-- Bouton retour -->
          <BaseButton to="/" class="error-button">
            Retour à l'accueil
          </BaseButton>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
// Props reçu automatiquement par Nuxt
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

// SEO
useHead({
  title: `${props.error.statusCode} - ${props.error.statusCode === 404 ? 'Page introuvable' : 'Erreur'}`,
  meta: [
    {
      name: 'description',
      content: `${props.error.statusCode} - BeAbot éco-conception web`,
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})
</script>

<style scoped lang="scss">
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-error {
  position: relative;
  text-align: center;
  padding: 2rem;
  min-height: 80vh;
}

.error-oeufs {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;

  .oeuf-1 {
    position: absolute;
    top: 10%;
    left: 10%;
    animation: float 6s ease-in-out infinite;
  }

  .oeuf-2 {
    position: absolute;
    top: 60%;
    right: 15%;
    animation: float 8s ease-in-out infinite 1s;
  }

  .oeuf-3 {
    position: absolute;
    bottom: 15%;
    left: 20%;
    animation: float 7s ease-in-out infinite 2s;
  }
}

.error-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.error-title {
  font-size: clamp(5rem, 15vw, 12rem);
  font-weight: $bold;
  color: $gris2;
  line-height: 1;
  margin-bottom: 1rem;
}

.error-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: $bold;
  margin-bottom: 1rem;
}

.error-text {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  max-width: 500px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.error-button {
  margin-top: 1.5rem;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(var(--rotate, 0deg));
  }
  50% {
    transform: translateY(-20px) rotate(var(--rotate, 0deg));
  }
}

@media (min-width: $breakpoint-tablet) {
  .error-oeufs {
    .oeuf-1 {
      width: 25%;
      top: 15%;
      left: 8%;
    }

    .oeuf-2 {
      width: 20%;
      top: 50%;
      right: 10%;
    }

    .oeuf-3 {
      width: 22%;
      bottom: 10%;
      left: 15%;
    }
  }

  .error-content {
    padding: 3rem;
  }
}
</style>
