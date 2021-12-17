<template>
  <section class="container container-1">
    <h1 class="text-vert titre2">OUPS</h1>
    <h2 v-if="error.statusCode === 404" class="title">Page non trouvée</h2>
    <h2 v-else class="title">Une erreur est survenue</h2>
    <h3 class="text-vert">Naviguez vers :</h3>
    <NuxtLink exact to="/">Page d'accueil</NuxtLink>
    <NuxtLink exact to="/eco-conception">Blog</NuxtLink>
    <NuxtLink exact to="/portfolio">Portfolio</NuxtLink>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // nous pouvons definir un layout personnalisé pour la page erreur
};
</script>
