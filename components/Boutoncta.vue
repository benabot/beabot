<template>
  <div class="button_cont">
    <NuxtLink class="example_f" :class="[bleu ? 'bleu' : 'vert']" :to="to"
      ><span> <slot>lire la suite</slot></span></NuxtLink
    >
  </div>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
    bleu: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.button_cont {
  text-align: right;
  margin-top: 0.4rem;
}
.example_f {
  text-align: center;
  text-transform: uppercase;
  font-size: 0.86rem;
  padding-left: 20px;
  width: 200px;

  cursor: pointer;
  margin-left: 5px;
}
.vert {
  color: $vert;
  background: linear-gradient($vert, $vert) right bottom / 0 0.1em no-repeat;
  transition: background-size 0.4s;
  &:hover {
    background-size: 80% 0.6em;
    color: $gris2;
  }
}
.bleu {
  color: $bleu2;
  background: linear-gradient(lighten($bleu2, 25%), lighten($bleu2, 25%)) right
    bottom / 0 0.1em no-repeat;
  transition: background-size 0.4s;
  &:hover {
    background-size: 80% 0.6em;
    color: $gris1;
  }
}

.example_f span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.4s;
}
.example_f span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -40px;
  transition: 0.5s;
}
.example_f:hover span {
  padding-right: 25px;
}
.example_f:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
