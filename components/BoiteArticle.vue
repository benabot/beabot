<template>
  <div class="boite-article">
    <svg>
      <defs>
        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 v1 h1 V0 H0 m0.948,0.507 c-0.063,0.25,-0.207,0.466,-0.461,0.466 S0.026,0.765,0.026,0.507 S0.236,0.084,0.487,0.041 c0.486,-0.083,0.531,0.191,0.461,0.466"
          />
        </clipPath>
      </defs>
    </svg>

    <article class="article-resum">
      <div class="boite-image">
        <div class="boite-image__calque"></div>
        <div class="circle"></div>
        <div
          class="boite-image__image lozad"
          :data-background-image="`${require('~/assets/img/' + backgroundUrl)}`"
        ></div>
      </div>
      <h2 class="h4 text-gris1">{{ titre }}</h2>
      <h3 class="text-fin text-gris2">{{ sousTitre }}</h3>
      <div class="boite-chips">
        <span v-for="chip in chips" :key="chip" class="chips"
          ><span>{{ chip }}</span></span
        >
      </div>

      <a :href="lien" target="_blank">
        <button class="seepost">voir le site ⟶</button>
      </a>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    titre: {
      type: String,
      default: 'titre',
    },
    sousTitre: {
      type: String,
      default: 'sous titre',
    },
    backgroundUrl: {
      type: String,
      default: 'profilFreakOut.jpg',
      // 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg',
    },
    lien: {
      type: String,
      default: '',
    },
    chips: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.$lozad.observe();
  },
};
</script>

<style lang="scss" scoped>
.boite-article {
  width: 90%;

  @media (min-width: $breakpoint-tablet) {
    width: 80%;
    display: flex;
    justify-content: flex-start;
  }
  &:nth-child(odd) {
    @media (min-width: $breakpoint-tablet) {
      justify-content: flex-end;
    }
  }
}
.article-resum {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (min-width: $breakpoint-tablet) {
    width: 40%;
  }

  a {
    display: block;
    position: relative;
    z-index: 2000;
  }
  h2 {
    margin-right: -4rem;
    margin-bottom: 0;
    position: relative;
    z-index: 111;
  }
  h3 {
    font-size: 1.18rem;
    margin-bottom: 0.25rem;
  }
  &:hover .clip-svg {
    transform: scale(1.2);
  }
}
.boite-image {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  // overflow: hidden;
  &:hover .boite-image__image {
    // transform: scale(1);
    background-size: 190%;
  }
  &:hover .circle {
    background: radial-gradient(transparent 60%, rgb(167, 167, 167));
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: url('https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg');
    background-position: center;
    background-size: 220%;
    background-repeat: no-repeat;
    // transform: scale(1.2);
    transition: all 0.3s;
    z-index: 10;
    // filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5));
    // box-shadow: inset 0px 40% 40% 0 #000, inset 0 40% 40% 0px #ccc,
    //   inset 0 40% 40% 0px #fff;
    // border-radius: 50%;
  }
  &__calque {
    position: absolute;
    // top: 0;
    // left: 0;
    // width: 101%;
    // height: 101%;
    top: -6px;
    bottom: -6px;
    left: -6px;
    right: -6px;
    background: $fondClair;
    z-index: 30;
    clip-path: url(#myClip);
  }
  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    transition: all 0.3s;
    background: radial-gradient(transparent 40%, transparent);
  }
}
svg {
  position: absolute;
  width: 0;
  height: 0;
}

.boite-chips {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;

  .chips {
    display: inline;
    background: $gris6;
    color: $gris2;
    // border: 0.5px solid $gris3;
    border-radius: 1000px;
    padding: 0.158rem 0.61rem;
    font-size: 0.68rem;
    margin-right: 0.33rem;

    span {
      bottom: 0.06em;
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        width: 1.68ex;
        height: 1.68ex;
        margin-right: 0.68ex;
        border-radius: 100%;
        background-color: $bleu1;
        top: 0.07rem;
        position: relative;
      }
    }
  }
}
</style>
