<template>
  <!-- <svg :width="width" :height="width" viewBox="0 0 243.887 241.204">
    <path
      id="trace-oeuf"
      d="M1047.366,175.76c-15.389,60.2-50.368,112.5-112.5,112.5a112.5,112.5,0,0,1-112.5-112.5c0-62.132,51.234-102.16,112.5-112.5C1053.366,43.26,1064.366,109.26,1047.366,175.76Z"
      transform="translate(-22.366 -59.624)"
      :fill="fill"
    />
  </svg> -->
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 243.9 241.2"
    xml:space="preserve"
    :transform="transform"
  >
    <!-- <defs>
      <linearGradient id="Gradient2">
        <stop offset="30%" class="stop-bleu2" />
        <stop offset="80%" class="stop-bleu1" />
      </linearGradient>
      <linearGradient id="Gradient3">
        <stop offset="23.78%" class="stop-jaune" />
        <stop offset="49.3%" stop-color="#f6b721" />
        <stop offset="100%" stop-color="#ffd329" />
      </linearGradient>
      <linearGradient id="Gradient1">
        <stop offset="20.76%" class="stop-vert" />
        <stop offset="89.73%" class="stop-bleu1" />
      </linearGradient>
      <linearGradient id="Gradient4">
        <stop offset="44.84%" class="stop-vert" />
        <stop offset="68%" stop-color="#18ea62" />
        <stop offset="90.89%" stop-color="#30ff79" />
      </linearGradient>
    </defs> -->
    <path
      id="oeuf-shape"
      class="st0"
      d="M231.3,122.4c-15.4,60.2-50.4,112.5-112.5,112.5S6.3,184.6,6.3,122.4S57.5,20.3,118.8,9.9
	C237.3-10.1,248.3,55.9,231.3,122.4z"
      :fill="fill"
    />
  </svg>
</template>
<script>
export default {
  name: 'Oeuf',
  props: {
    fill: {
      type: String,
      default: '#F1F1F1', // green, green--outline, white
      required: false,
    },

    width: {
      type: String,
      default: '50%',
      required: false,
    },
    transform: {
      type: String,
      default: 'rotate(0)',
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.stop-jaune {
  stop-color: $jaune;
}
.stop-vert {
  stop-color: $vert;
}
.stop-bleu1 {
  stop-color: $bleu1;
}
.stop-bleu2 {
  stop-color: $bleu2;
}
</style>
