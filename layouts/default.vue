<template>
  <div id="wrapper">
    <nav role="navigation" class="nav-mobile">
      <!-- <button @click="showMobileMenu = !showMobileMenu">bla</button> -->
      <img
        src="/beabot.svg"
        alt="beabot"
        :class="{ 'logo-gris': showMobileMenu }"
        @click="showMobileMenu = !showMobileMenu"
      />
      <transition name="slide-right">
        <ul v-if="showMobileMenu" class="menu-mobile">
          <li @click="showMobileMenu = !showMobileMenu">
            <NuxtLink to="/" exact class="title title--menu h2" no-prefetch
              >Accueil</NuxtLink
            >
          </li>
          <li @click="showMobileMenu = !showMobileMenu">
            <NuxtLink
              to="/eco-conception"
              class="title title--menu h2"
              no-prefetch
              >Éco-conception</NuxtLink
            >
          </li>
          <li @click="showMobileMenu = !showMobileMenu">
            <NuxtLink to="/portfolio" class="title title--menu h2" no-prefetch
              >Portfolio</NuxtLink
            >
          </li>
          <li @click="showMobileMenu = !showMobileMenu">
            <a href="#footer" class="title title--menu h2">Contact</a>
          </li>
        </ul>
      </transition>
    </nav>
    <nav role="navigation" class="nav-desktop nav-1">
      <NuxtLink :class="couleurHaut" to="/" no-prefetch>
        <svg
          x="0"
          y="0"
          viewBox="0 0 1111.7 336.6"
          xml:space="preserve"
          @mouseover="degrad = 'url(#SVGID1)'"
          @mouseleave="degrad = 'url(#SVGID2)'"
        >
          <linearGradient
            id="SVGID1"
            gradientUnits="userSpaceOnUse"
            x1="838.034"
            y1="104.967"
            x2="1054.326"
            y2="229.844"
            gradientTransform="matrix(1 0 0 -1 0 338)"
          >
            <stop offset="0" stop-color="#0439d9" />
            <stop offset=".08" stop-color="#083ed9" />
            <stop offset=".177" stop-color="#144dd9" />
            <stop offset=".267" stop-color="#2561d9" />
            <stop offset=".293" stop-color="#2369d0" />
            <stop offset=".443" stop-color="#1891a2" />
            <stop offset=".586" stop-color="#0fb07e" />
            <stop offset=".72" stop-color="#09c764" />
            <stop offset=".84" stop-color="#05d454" />
            <stop offset=".935" stop-color="#04d94f" />
          </linearGradient>
          <linearGradient
            id="SVGID2"
            gradientUnits="userSpaceOnUse"
            x1="838.0335"
            y1="104.9666"
            x2="1054.326"
            y2="229.844"
            gradientTransform="matrix(1 0 0 -1 0 338)"
          >
            <stop offset="0" style="stop-color: #3b3b3b" />
            <stop offset="8.000000e-02" style="stop-color: #3f3f3f" />
            <stop offset="0.177" style="stop-color: #4b4b4b" />
            <stop offset="0.267" style="stop-color: #5c5c5c" />
            <stop offset="0.293" style="stop-color: #5f5f5f" />
            <stop offset="0.443" style="stop-color: #6f6f6f" />
            <stop offset="0.586" style="stop-color: #7a7a7a" />
            <stop offset="0.72" style="stop-color: #838383" />
            <stop offset="0.84" style="stop-color: #888888" />
            <stop offset="0.935" style="stop-color: #8a8a8a" />
          </linearGradient>
          <path
            d="M1047.4 175.8C1032 236 997 288.3 934.9 288.3s-112.5-50.4-112.5-112.5S873.6 73.6 934.9 63.3c118.5-20 129.5 46 112.5 112.5z"
            :fill="degrad"
          />
          <path
            class="st1"
            d="M193.6 199.5c0 36.4-29 64.5-65.3 64.5-36.6 0-64.8-27.3-64.8-65V57.2l13.6-3.4v109.9c10.5-17.3 29.3-28.4 52-28.4 36.1 0 64.5 27.8 64.5 64.2zm-13.7 0c0-29-22.4-51.7-51.1-51.7-29 0-51.7 22.7-51.7 52 0 29 22.2 51.7 51.1 51.7s51.7-22.5 51.7-52z"
          />
          <path
            class="st1"
            d="M296.4 220.3l5.1 12.5C286.4 247.3 268 255 248.1 255c-37.5 0-65-28.1-65-64.2 0-36.4 28.7-64.5 64.8-64.5 29.8 0 53.1 18.7 57.9 49.4L199 207.5c6.5 20.4 25.3 34.9 49.4 34.9 18.2.1 34.1-7.6 48-22.1zm-100-29.5c0 1.7 0 3.1.3 4.8l93.4-27.8c-5.7-17.9-22.4-29.3-42.3-29.3-28.7 0-51.4 23-51.4 52.3z"
          />
          <path
            class="st1"
            d="M440.9 164.7h-81.2l-34.1 78.7h-15.3l90-205.9 90.3 205.9H475l-34.1-78.7zm-5.6-13.3l-34.9-80.9-34.9 80.9h69.8z"
          />
          <path
            class="st1"
            d="M619.6 181.5c0 36.4-29 64.5-65.3 64.5-36.6 0-64.8-27.3-64.8-65V39.2l13.6-3.4v109.9c10.5-17.3 29.3-28.4 52-28.4 36.1 0 64.5 27.8 64.5 64.2zm-13.7 0c0-29-22.4-51.7-51.1-51.7-29 0-51.7 22.7-51.7 52 0 29 22.2 51.7 51.1 51.7s51.7-22.5 51.7-52z"
          />
          <path
            class="st1"
            d="M609.1 181.5c0-36.1 28.7-64.2 65-64.2 36.6 0 65 28.1 65 64.2s-28.4 64.5-65 64.5c-36.4 0-65-28.4-65-64.5zm116.4 0c0-29.3-22.4-51.7-51.4-51.7-28.7 0-51.1 22.4-51.1 51.7 0 29.5 22.4 52 51.1 52 29 0 51.4-22.5 51.4-52zm39.8-49.4v77.8c0 14.8 7.7 23 21 23 5.7 0 12.2-1.7 16.5-3.7V242c-4.3 1.7-10.8 3.4-17.6 3.4-20.4 0-33.2-13.1-33.2-34.6v-78.7h-19l2.6-12.2h16.5V90l13.3-8.8v38.6h37.5V132h-37.6v.1z"
          />
          <path
            d="M911.6 257.2l-3.2-10.7c16.7-9 25.5-21.1 31.1-32l8.1 7.7-17.6-8.4c-11.1-5.3-14.8-13.2-14.8-20.4 0-12.8 10.2-22.5 23.2-22.5 7.4 0 13 1.6 18.6 6.5 3 7.4 3.7 12.1 3.7 19.5-.1 33.4-27 54-49.1 60.3zm3.5-139.9c0-12.5 10-23 22.7-23s22.7 10.4 22.7 23c0 12.3-10 22.3-22.7 22.3s-22.7-10-22.7-22.3z"
            fill="#fff"
          />
        </svg>
        <!-- <img src="/beabot.svg" alt="beabot" /> -->
      </NuxtLink>
    </nav>
    <nav role="navigation" class="nav-desktop nav-2 h4">
      <NuxtLink to="/eco-conception" :class="couleurHaut" no-prefetch
        >Éco-conception</NuxtLink
      >
    </nav>
    <nav role="navigation" class="nav-desktop nav-3 h4">
      <NuxtLink to="/portfolio" :class="couleurBas" no-prefetch
        >Portfolio</NuxtLink
      >
    </nav>
    <nav role="navigation" class="nav-desktop nav-4 h4">
      <a href="#footer" :class="couleurBas">Contact</a>
    </nav>
    <Nuxt :class="{ 'main-flou': showMobileMenu }" />
    <Footer />
  </div>
</template>
<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      windowHeight: null,
      // lastScrollPosition: null,
      // gris: false,
      scrollPos: null,
      scrollPosition: null,
      degrad: 'url(#SVGID2)',
      showMobileMenu: false,
    };
  },
  computed: {
    acc() {
      return this.$nuxt.$route.path;
    },
    couleurHaut() {
      let clr = 'couleur-gris';
      if (this.acc === '/') {
        if (this.scrollPosition < this.windowHeight) {
          return (clr = 'couleur-none');
        }
        if (
          (this.scrollPosition > this.windowHeight &&
            this.scrollPosition < this.windowHeight * 3) ||
          (this.scrollPosition > this.windowHeight * 4 &&
            this.scrollPosition < this.windowHeight * 5)
        ) {
          return (clr = 'couleur-blanc');
        }
      }
      return clr;
    },
    couleurBas() {
      let clr = 'couleur-gris';
      if (this.acc === '/') {
        if (this.scrollPosition < 66) {
          return (clr = 'couleur-none');
        }
        if (
          (this.scrollPosition > 66 &&
            this.scrollPosition < this.windowHeight * 2) ||
          (this.scrollPosition > this.windowHeight * 3 &&
            this.scrollPosition < this.windowHeight * 4)
        ) {
          return (clr = 'couleur-blanc');
        }
      }

      return clr;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    // window.addEventListener('scroll', this.onScroll)
    this.windowHeight = window.innerHeight;
    // ScrollTrigger.defaults({
    //   toggleActions: 'restart pause resume pause',
    // })
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.container-3',
    //     start: 'top top', // when the top of the trigger hits the top of the viewport
    //     end: '+=50%', // end after scrolling 500px beyond the start
    //   },
    // })
    // tl.to('.nav-2', { scale: 0.3, rotation: 45, autoAlpha: 0 })
    //   gsap.from('.nav-2, .nav-1', {
    //     scrollTrigger: {
    //       trigger: '.container-3',
    //       markers: true,
    //       start: 'center center',
    //     },
    //     autoAlpha: 0,
    //   })
    //   gsap.from('.nav-3, .nav-4', {
    //     scrollTrigger: {
    //       trigger: '.container-3',
    //     },
    //     autoAlpha: 0,
    //   })
    // },
    // beforeDestroy() {
    //   window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    handleScroll(e) {
      this.scrollPos = e.target.scrollTop;
    },
    // onScroll() {
    //   const lastScrollPosition = window.scrollY
    //   const positionAnim = this.windowHeight * 2
    //   console.log(positionAnim)
    //   if (lastScrollPosition > positionAnim) {
    //     this.gris = true
    //   } else {
    //     this.gris = false
    //   }
    // },
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>
<style lang="scss">
a.nuxt-link-active {
  font-weight: bold;
}
// .fade-enter {
//   color: red;
//   transform: translateX(-200px);
// }

// .fade-enter-active {
//   transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1),
//     color 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate(-2em, 0);
}

.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

#wrapper {
  position: relative;
  overflow: hidden;
  .main-flou {
    position: relative;
    z-index: 3;
    opacity: 0.2;
  }
  .nav-desktop {
    display: none;
  }
  .nav-mobile {
    display: block;
    position: fixed;
    z-index: 9999;
    @media (min-width: $breakpoint-tablet) {
      display: none;
    }

    img {
      position: absolute;
      height: auto;
      width: 21vw;
      max-height: 50px;
      z-index: +1;
    }
    .logo-gris {
      filter: grayscale(1);
    }
    .menu-mobile {
      position: absolute;
      padding-top: 3rem;
      width: 86vw;
      height: 60vh;
      background: $vert;
      clip-path: ellipse(87% 91% at 0% 8%);
      ul {
        list-style-type: none;
      }
    }
  }
  @media (min-width: $breakpoint-tablet) {
    overflow: visible;
    .nav-desktop {
      display: block;
    }
    nav {
      position: fixed;
      font-weight: $light;
      margin: 0;
      z-index: 1000;
      // min-width: 80px;
      // width: 15%;
      overflow: visible;
      word-break: keep-all;
      hyphens: none;
      // background: linear-gradient(red, red) bottom / 0 0.1em no-repeat;
      // background-size: 0 0.1em;
      transition: 0.3s ease-in-out background-size;

      &:hover {
        background-size: 88% 0.46em;
      }

      a {
        text-decoration: none;
        // -webkit-text-stroke-width: 1px;
        // -webkit-text-stroke-color: $fondClair;
        // text-shadow: 0.2px 0.2px 0.9px $fondClair, -0.2px -0.2px 0.9px $fondClair,
        //   0.2px 0.2px 0.9px $fondClair, -0.2px -0.2px 0.9px $fondClair;
        // text-shadow: 0px 0px 1.9px $fondClair;
        // text-shadow: 0.4px 0 0 $fondClair, -0.4px 0 0 $fondClair,
        //   0 0.4px 0 $fondClair, 0 -0.4px 0 $fondClair, 0.3px 0.3px $fondClair,
        //   -0.3px -0.3px 0 $fondClair, 0.3px -0.3px 0 $fondClair,
        //   -0.3px 0.3px 0 $fondClair;
      }
      img {
        filter: grayscale(1);
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  .nav {
    &-1 {
      top: 2px;
      left: 4px;
      max-width: 150px;

      // background: linear-gradient(red, red) bottom / 0 0.1em no-repeat;

      svg {
        width: 100%;
      }
    }
    &-2 {
      top: 6px;
      right: 10px;
      padding-left: 11px;
      text-align: right;
      background: linear-gradient($vert, $vert) right bottom / 0 0.1em no-repeat;
    }
    &-3 {
      bottom: 6px;
      left: 10px;
      background: linear-gradient(lighten($bleu2, 10%), lighten($bleu2, 10%))
        left bottom / 0 0.1em no-repeat;
    }
    &-4 {
      bottom: 6px;
      right: 10px;
      text-align: right;
      background: linear-gradient($jaune, $jaune) right bottom / 0 0.1em
        no-repeat;
    }
  }
}
.couleur {
  &-none {
    display: none;
  }
  &-blanc {
    // border: 1px solid green;
    color: $fondClair;
    .st1 {
      fill: $fondClair;
      enable-background: new;
    }
  }
  &-gris {
    // border: 1px solid red;
    color: $gris1;
    .st1 {
      fill: $gris1;
      enable-background: new;
    }
  }
}
[class*='couleur-'] {
  transition: all ease-in 0.3s;
}
</style>
