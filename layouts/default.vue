<template>
  <div id="wrapper">
    <nav role="navigation" class="nav-mobile">
      <!-- <button @click="showMobileMenu = !showMobileMenu">bla</button> -->
      <img
        src="/beabot.svg"
        alt="beabot"
        width="1112"
        height="337"
        :class="{ 'logo-gris': showMobileMenu }"
        @click="showMobileMenu = !showMobileMenu"
      />
      <transition name="slide-right">
        <ul v-if="showMobileMenu" class="menu-mobile">
          <li @click="showMobileMenu = !showMobileMenu">
            <AppLink to="/" class="title title--menu h2"> Accueil </AppLink>
          </li>
          <li
            v-for="item in navigationItems"
            :key="`mobile-${item.to}`"
            @click="showMobileMenu = !showMobileMenu"
          >
            <AppLink :to="item.to" class="title title--menu h2">
              {{ item.label }}
            </AppLink>
          </li>
        </ul>
      </transition>
    </nav>
    <nav role="navigation" class="nav-desktop nav-1">
      <AppLink :class="couleurHaut" to="/" no-prefetch>
        <svg
          x="0"
          y="0"
          viewBox="0 0 1111.7 336.6"
          xml:space="preserve"
          role="img"
          aria-label="BeAbot - Accueil"
          @mouseover="setLogoHover"
          @mouseleave="resetLogoHover"
        >
          <title>BeAbot</title>
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
      </AppLink>
    </nav>
    <nav role="navigation" class="nav-desktop nav-links">
      <AppLink
        v-for="item in navigationItems"
        :key="item.to"
        :to="item.to"
        :data-nav-active="isNavItemActive(item.to) ? 'true' : undefined"
        :class="[couleurHaut, 'nav-link', item.variant]"
      >
        {{ item.label }}
      </AppLink>
    </nav>
    <slot :class="{ 'main-flou': showMobileMenu }" />
    <TheFooter />
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

const route = useRoute()

const navigationItems = [
  { label: 'Éco-conception', to: '/eco-conception/', variant: 'nav-link--eco' },
  { label: 'Portfolio', to: '/portfolio/', variant: 'nav-link--portfolio' },
  { label: 'Apps', to: '/apps/', variant: 'nav-link--apps' },
  { label: 'Contact', to: '/contact/', variant: 'nav-link--contact' },
]

const isHomeRoute = computed(() => route.path === '/' || route.path === '')
const showMobileMenu = ref(false)
const isHeroActive = ref(isHomeRoute.value)
const isLogoHovered = ref(false)

const getDefaultLogoFill = () =>
  isHomeRoute.value ? 'url(#SVGID1)' : 'url(#SVGID2)'

const degrad = ref(getDefaultLogoFill())

const couleurHaut = computed(() => {
  if (isHomeRoute.value) {
    return isHeroActive.value ? 'couleur-none' : 'couleur-blanc'
  }

  return 'couleur-gris'
})

const setLogoHover = () => {
  isLogoHovered.value = true
  degrad.value = 'url(#SVGID1)'
}

const resetLogoHover = () => {
  isLogoHovered.value = false
  degrad.value = getDefaultLogoFill()
}

const syncLogoFill = () => {
  if (!isLogoHovered.value) {
    degrad.value = getDefaultLogoFill()
  }
}

const updateHeroState = () => {
  if (!isHomeRoute.value) {
    isHeroActive.value = false
    syncLogoFill()
    return
  }

  const hero = document.querySelector('.home-hero')

  if (!(hero instanceof HTMLElement)) {
    isHeroActive.value = true
    syncLogoFill()
    return
  }

  const nav = document.querySelector('.nav-desktop.nav-1')
  const navBottom =
    nav instanceof HTMLElement ? nav.getBoundingClientRect().bottom : 96

  isHeroActive.value = hero.getBoundingClientRect().bottom > navBottom
  syncLogoFill()
}

const refreshHeroState = async () => {
  await nextTick()
  updateHeroState()
}

const isNavItemActive = (path) => {
  const normalizedCurrentPath = route.path.endsWith('/')
    ? route.path
    : `${route.path}/`
  return (
    normalizedCurrentPath === path || normalizedCurrentPath.startsWith(path)
  )
}

watch(isHomeRoute, (value) => {
  if (!value) {
    isHeroActive.value = false
  }
  syncLogoFill()
})

watch(
  () => route.fullPath,
  () => {
    refreshHeroState()
  },
)

onMounted(() => {
  refreshHeroState()
  window.addEventListener('scroll', updateHeroState, { passive: true })
  window.addEventListener('resize', updateHeroState)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeroState)
  window.removeEventListener('resize', updateHeroState)
})
</script>
<style lang="scss">
@use 'sass:color';

a.nuxt-link-active {
  font-weight: bold;
}

.nav-desktop a.router-link-active,
.nav-desktop a.router-link-exact-active,
.nav-desktop a[data-nav-active='true'] {
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
      width: 114vw;
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
      position: fixed;
      font-weight: $light;
      margin: 0;
      z-index: 1000;
      overflow: visible;
      word-break: keep-all;
      hyphens: none;

      a {
        text-decoration: none;
      }
      img {
        filter: grayscale(1);
        &:hover {
          filter: grayscale(0);
        }
      }
    }

    .nav-links {
      display: flex;
      top: 11px;
      left: calc(4px + 150px + clamp(0.9rem, 2vw, 2rem));
      align-items: center;
      gap: clamp(0.9rem, 2vw, 1.8rem);
      font-size: clamp(0.95rem, 1vw + 0.35rem, 1.15rem);
      line-height: 1.2;

      .nav-link {
        display: inline-flex;
        width: max-content;
        transition: 0.3s ease-in-out background-size;

        &:hover {
          background-size: 100% 0.46em;
        }
      }

      .nav-link.couleur-none {
        display: none;
      }

      .nav-link--eco {
        background: linear-gradient($vert, $vert) left bottom / 0 0.1em
          no-repeat;
      }

      .nav-link--portfolio {
        background: linear-gradient(
            color.adjust($bleu2, $lightness: 10%),
            color.adjust($bleu2, $lightness: 10%)
          )
          left bottom / 0 0.1em no-repeat;
      }

      .nav-link--apps {
        background: linear-gradient($bleu1, $bleu1) left bottom / 0 0.1em
          no-repeat;
      }

      .nav-link--contact {
        background: linear-gradient($jaune, $jaune) left bottom / 0 0.1em
          no-repeat;
      }
    }
  }

  .nav {
    &-1 {
      top: 2px;
      left: 4px;
      max-width: 150px;

      svg {
        width: 100%;
      }
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
