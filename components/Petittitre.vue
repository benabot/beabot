<template>
  <div class="petit-titre" :class="gris ? 'text-gris2' : 'text-gris5'">
    <!-- <div v-if="numero" class="h3 text-black chiffre-onum">
      {{ numero }}<span :style="{ color: couleur }">.</span>
    </div> -->
    <div v-if="stitre" class="h4 text-fin lettre-smcp">
      {{ stitre }}<span class="text-black" :style="{ color: couleur }">.</span>
    </div>
    <div v-if="tags" class="h4 text-fin lettre-smcp">
      <span v-for="tag in tags" :key="tag"
        >{{ tag
        }}<span class="text-black" :style="{ color: couleur }">. </span></span
      >
    </div>
    <div
      v-if="tags || stitre"
      class="ligne text-black"
      :style="{ color: couleur }"
    ></div>
    <h3 class="h3 text-black">{{ titre }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Petittitre',
  props: {
    // numero: {
    //   type: String,
    //   default: null, // green, green--outline, white
    //   required: false,
    // },

    titre: {
      type: String,
      default: 'titre long',
      required: false,
    },
    stitre: {
      type: String,
      default: null,
      required: false,
    },
    couleur: {
      type: String,
      default: '#04d94f',
      required: false,
    },
    gris: {
      type: Boolean,
      default: false,
      required: false,
    },
    tags: {
      type: Array,
      default: null,
      required: false,
    },
  },
  //   data() {
  //     return {
  //       isgris: this.gris,
  //     }
  //   },
};
</script>
<style lang="scss" scoped>
.h3,
.h4 {
  text-align: left;
  margin: 0;
  word-break: normal;
}
.ligne {
  width: 4em;
  height: 0.1rem;
  margin-top: 0.1rem;
  border-top: 2px solid;
  border-radius: 0.25rem;
}
</style>
