<template>
  <div class="boite-article">
    <svg>
      <defs>
        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 v1 h1 V0 H0 m0.948,0.507 c-0.063,0.25,-0.207,0.466,-0.461,0.466 S0.026,0.765,0.026,0.507 S0.236,0.084,0.487,0.041 c0.486,-0.083,0.531,0.191,0.461,0.466"
          />
        </clipPath>
        <clipPath id="phone-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0.541,0.048 c0.263,0.067,0.492,0.217,0.492,0.486 c0,0.269,-0.22,0.486,-0.492,0.487 S0.095,0.8,0.049,0.535 C-0.038,0.023,0.25,-0.025,0.541,0.048"
          ></path>
        </clipPath>
      </defs>
    </svg>

    <article class="article-resum">
      <a :href="lien" target="_blank">
        <div class="boite-image">
          <div class="boite-image__calque"></div>
          <div class="circle"></div>
          <div
            class="boite-image__image lozad"
            :data-background-image="resolvedBackgroundUrl"
          ></div></div
      ></a>
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
    this.$lozad.observe()
  }
  ,
  computed: {
    resolvedBackgroundUrl() {
      const src = this.backgroundUrl || ''
      // Absolute or root-relative URL
      if (/^https?:\/\//.test(src) || src.startsWith('/')) return src

      // Try to resolve from assets via webpack context
      try {
        const ctx = require.context('~/assets/img', false, /\.(png|jpe?g|gif|webp|svg)$/)
        const key = src.startsWith('./') ? src : `./${src}`
        if (ctx.keys().includes(key)) return ctx(key)
      } catch (e) {
        // fallthrough to /static path
      }

      // Fallback to static directory convention: /static/img/<file>
      return `/img/${src}`
    },
  }
}
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
    // z-index: 2000;
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
    @media (min-width: $breakpoint-tablet) {
      transform: scale(1.2);
    }
  }
}
.boite-image {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  // overflow: hidden;
  &:hover .boite-image__image {
    @media (min-width: $breakpoint-tablet) {
      // transform: scale(1);
      background-size: 190%;
    }
  }
  &:hover .circle {
    @media (min-width: $breakpoint-tablet) {
      background: radial-gradient(transparent 60%, rgb(167, 167, 167));
    }
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
    clip-path: ellipse(46% 42% at 49% 53%);
    //clip-path: url(#phone-clip);
    // clip-path: path(
    //  'M578.523 302.928C538.663 456.87 448.961 590.45 290.041 590.242 131.121 589.78 2.517 460.936 2.727 301.76 2.935 142.584 134.257 40.604 291.207 14.446 594.609-36.108 622.267 132.874 578.523 302.928Z'
    //);

    @media (min-width: $breakpoint-tablet) {
      clip-path: none;
    }
  }
  &__calque {
    @media (min-width: $breakpoint-tablet) {
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
      -webkit-clip-path: url(#myClip);
    }
  }
  .circle {
    @media (min-width: $breakpoint-tablet) {
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
}
svg {
  position: absolute;
  width: 0;
  height: 0;
}

.boite-chips {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.9rem;

  .chips {
    display: inline;
    background: $gris6;
    color: $gris2;
    // border: 0.5px solid $gris3;
    border-radius: 1000px;
    padding: 0.158rem 0.61rem;
    font-size: 0.68rem;
    margin-right: 0.33rem;
    margin-bottom: 0.33rem;

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
