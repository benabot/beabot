<template>
  <footer id="footer" class="fond-gris" data-nav-theme="light">
    <div class="container-or">
      <div class="item a">
        <div class="title title--footer h1 beabot">beAbot</div>

        <nav id="footer--nav">
          <ul>
            <li><AppLink to="/" no-prefetch>Accueil</AppLink></li>
            <li><AppLink to="/portfolio/" no-prefetch>Portfolio</AppLink></li>
            <li><AppLink to="/greenlight/" no-prefetch>Greenlight</AppLink></li>
            <li>
              <AppLink to="/eco-conception/" no-prefetch
                >Éco-conception</AppLink
              >
            </li>
            <li>
              <AppLink
                to="/apps/"
                no-prefetch
                class="footer-link"
                :class="{ 'footer-link--active': isAppsActive }"
                :aria-current="isAppsActive ? 'page' : undefined"
                >Apps</AppLink
              >
            </li>
            <li>
              <AppLink to="/eco-conception/faq-eco-conception/" no-prefetch
                >FAQ Éco-conception</AppLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="item b h3 text-black">
        <p class="h3 text-black">Échangeons</p>
      </div>
      <div class="item c">
        <AppLink to="/contact/" no-prefetch aria-label="beAbot - Contact">
          Formulaire de contact
        </AppLink>
        <a href="https://twitter.com/AbotBenoit" target="_blank" class="twit"
          >@BenoitAbot</a
        >
        <a href="https://github.com/benabot" target="_blank" class="git"
          >benabot</a
        >
        <a
          href="https://www.linkedin.com/in/benoit-abot/"
          target="_blank"
          class="linkedin"
          >benoitabot</a
        >
        <a href="/rss.xml" class="rss">RSS</a>
      </div>
      <div class="item d">
        <span class="footer-geo">Benoît Abot · Développeur web freelance · Lille</span>
        —
        <a href="/mentions-legales/">Mentions légales</a>
        · beAbot {{ annee }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from 'vue'

const annee = ref(new Date().getFullYear())
const route = useRoute()

const isAppsActive = computed(() => {
  return (
    route.path === '/apps/' ||
    route.path === '/apps' ||
    route.path.startsWith('/apps/')
  )
})
</script>

<style lang="scss" scoped>
$width: 100vw;
@media (min-width: $breakpoint-tablet) {
  $width: 90vw;
}
$height: 90vh;
@media (min-width: $breakpoint-tablet) {
  $height: calc($width / 1.618);
}

footer {
  --footer-wave-height: clamp(3rem, 8vw, 4.75rem);

  display: flex;
  position: relative;
  margin-top: calc(var(--footer-wave-height) * -1);
  padding-top: calc(var(--footer-wave-height) + clamp(2rem, 4vw, 3rem));
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
  z-index: 1;
  background: $fondGris;
  -webkit-mask-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M0 78 C130 28 275 50 410 66 C555 84 690 50 820 70 C955 91 1060 93 1180 52 C1280 18 1365 58 1440 34 L1440 120 L0 120 Z'/%3E%3C/svg%3E"),
    linear-gradient(#000, #000);
  mask-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M0 78 C130 28 275 50 410 66 C555 84 690 50 820 70 C955 91 1060 93 1180 52 C1280 18 1365 58 1440 34 L1440 120 L0 120 Z'/%3E%3C/svg%3E"),
    linear-gradient(#000, #000);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size:
    100% var(--footer-wave-height),
    100% calc(100% - var(--footer-wave-height) + 1px);
  mask-size:
    100% var(--footer-wave-height),
    100% calc(100% - var(--footer-wave-height) + 1px);
  -webkit-mask-position:
    top left,
    left calc(var(--footer-wave-height) - 1px);
  mask-position:
    top left,
    left calc(var(--footer-wave-height) - 1px);

  @supports not (
    (mask-image: linear-gradient(#000, #000)) or
      (-webkit-mask-image: linear-gradient(#000, #000))
  ) {
    clip-path: polygon(
      0 11%,
      7% 6%,
      15% 8%,
      28% 6.5%,
      42% 8.5%,
      56% 6.5%,
      70% 9%,
      84% 7%,
      100% 6%,
      100% 100%,
      0 100%
    );
  }

  @media (min-width: $breakpoint-tablet) {
    --footer-wave-height: clamp(3.75rem, 5vw, 5.25rem);
  }

  @media (max-width: $breakpoint-tablet) {
    -webkit-mask-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 120' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M0 74 C70 36 140 54 212 65 C310 80 390 45 482 64 C576 83 648 56 720 38 L720 120 L0 120 Z'/%3E%3C/svg%3E"),
      linear-gradient(#000, #000);
    mask-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 120' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M0 74 C70 36 140 54 212 65 C310 80 390 45 482 64 C576 83 648 56 720 38 L720 120 L0 120 Z'/%3E%3C/svg%3E"),
      linear-gradient(#000, #000);
  }

  @supports not (
    (mask-image: linear-gradient(#000, #000)) or
      (-webkit-mask-image: linear-gradient(#000, #000))
  ) {
    @media (max-width: $breakpoint-tablet) {
      clip-path: polygon(
        0 10%,
        14% 5.5%,
        28% 7.5%,
        44% 5.8%,
        62% 8%,
        80% 6.5%,
        100% 5.5%,
        100% 100%,
        0 100%
      );
    }
  }

  .title--footer {
    color: rgba(235, 235, 235, 0.82);
    -webkit-text-stroke-width: 0;
    text-shadow:
      0 1px 0 rgba(0, 0, 0, 0.25),
      0 12px 30px rgba(0, 0, 0, 0.28);
    letter-spacing: -0.02em;
  }
  .icon {
    display: inline-flex;
    align-self: center;
  }

  .icon svg {
    height: 1em;
    width: 1em;
  }

  .icon.baseline svg {
    top: 0.125em;
    position: relative;
  }
  a {
    text-decoration: none;
    color: $gris4;
    background: linear-gradient(currentColor, currentColor) left bottom / 0%
      0.12em no-repeat;
    transition: background-size 0.3s ease;
    &:hover {
      background-size: 100% 0.12em;
    }

    &.footer-link--active {
      color: $vert;
      background-size: 100% 0.12em;
      font-weight: 700;
    }
  }
}
.container-or {
  width: $width;
  height: $height;
  display: grid;
  margin: 0 auto;
  grid-template-areas:
    'A A A'
    'A A A'
    'F B B'
    'F C C'
    'F D D';

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
    grid-template-rows: 61.8% 9.02% 5.58% 11.8% 11.8%;
    grid-template-areas:
      'A B B B'
      'A E E C'
      'A E E C'
      'A E E C'
      'A D D D';
  }
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: $gris4;

  &.a {
    grid-area: A;

    //color: $gris4;
    //user-select: none;
    //pointer-events: none;
    display: flex;
    flex-direction: column;

    .title--footer {
      font-size: clamp(3rem, 10vw, 6rem);
    }
  }
  &.b {
    grid-area: B;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  &.c {
    grid-area: C;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.2em;
    line-height: 1.5em;

    .twit {
      display: flex;
      &::before {
        content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' fill='rgb(166,165,164)'/></svg>");
        margin-right: 5px;
        display: block;
        top: 0.125em;
        position: relative;
      }
    }
    .git {
      display: flex;
      &::before {
        content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z' fill='rgb(166,165,164)'/></svg>");
        margin-right: 5px;
        display: block;
        top: 0.125em;
        position: relative;
      }
    }
    .linkedin {
      display: flex;
      &::before {
        content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' fill='rgb(166,165,164)'/></svg>");
        margin-right: 5px;
        display: block;
        top: 0.125em;
        position: relative;
      }
    }
    .rss {
      display: flex;
      &::before {
        content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'> <path d='M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z' fill='rgb(166,165,164)'/></svg>");
        margin-right: 5px;
        display: block;
        top: 0.125em;
        position: relative;
      }
    }
  }
  &.d {
    grid-area: D;
    justify-content: flex-start;
    overflow: visible;
    font-size: 0.75em;
  }
  &.e {
    grid-area: B;
    font-size: 1.2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: $breakpoint-tablet) {
      grid-area: E;
    }
    &::before {
      content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M17.25 18H6.75V4h10.5M14 21h-4v-1h4m2-19H8a3 3 0 00-3 3v16a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3z' fill='rgb(166,165,164)'/></svg>");
      display: block;
      margin-bottom: -5px;
    }
  }
}

#footer--nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem; /* rythme lisible */
}

#footer--nav a {
  display: inline-block;
  padding: 0.15rem 0;
  text-decoration: none;
  color: rgba(166, 165, 164, 0.85);
  letter-spacing: 0.01em;
  background: linear-gradient(currentColor, currentColor) left bottom / 0%
    0.12em no-repeat;
  transition: background-size 0.3s ease;
}

#footer--nav a:hover {
  background-size: 100% 0.12em;
}

#footer--nav a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(166, 165, 164, 0.18);
  border-radius: 6px;
}

#footer--nav {
  position: relative;
  width: 100%;
  max-width: 26ch; /* limite “graphique” : évite que ça parte trop large */
}

/* reset liste + rythme */
// #footer--nav ul {
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: grid;
//   gap: 0.75rem; /* rythme lisible */
// }

/* ligne cliquable + puce sobre */
#footer--nav li {
  display: flex;
  align-items: baseline;
  gap: 0.6rem; /* espace puce/texte */
  line-height: 1.15;
  font-size: clamp(1rem, 1.2vw, 1.25rem);
}

/* puce “typographique” (pas une grosse pastille) */
#footer--nav li::before {
  content: '•';
  font-size: 0.9em;
  opacity: 0.5;
  transform: translateY(-0.05em);
}

/* liens : même logique que tes autres liens (underline “propre”) */
// #footer--nav a {
//   color: $gris4;
//   text-decoration: none;
//   background: linear-gradient(currentColor, currentColor) left bottom / 0% 0.12em no-repeat;
//   transition: background-size 200ms ease, opacity 200ms ease;
//   opacity: 0.95;
// }

// #footer--nav a:hover {
//   background-size: 100% 0.12em;
//   opacity: 1;
// }

// #footer--nav a:focus-visible {
//   outline: none;
//   box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
//   border-radius: 6px;
// }

/* état “actif” Nuxt */
#footer--nav a.router-link-active,
#footer--nav a.router-link-exact-active {
  opacity: 1;
  background-size: 100% 0.12em;
}

.beabot {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.beabot::after {
  content: '';
  width: 0.45em;
  height: 0.45em;
  margin-left: 0.25em;
  border-radius: 50%;
  background-color: #04d94f;
  transform: translateY(0.05em);
}
</style>
