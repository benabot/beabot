<template>
  <footer id="footer" class="fond-gris">
    <!-- <svg viewBox="0 0 433 333">
      <path
        d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
        style="stroke: none; fill: #f2f2f2"
      ></path>
    </svg> -->
    <svg viewBox="0 0 1366 144.3">
      <path
        d="M0 0h1366v81c-84.4 17.6-217.1 39.2-380.5 38.5-228.3-1-329.2-44.6-547-48C336.3 69.9 185.6 76.8 0 121V0z"
        fill="#f2f2f2"
      />
    </svg>
    <div class="container-or">
      <div class="item a title title--footer h1">CONTACT :</div>
      <div class="item b h3 text-black">
        <a href="mailto:hello@beabot.fr">hello@beabot.fr</a>
      </div>
      <div class="item c">
        <!-- <div> -->
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
        <!-- </div> -->
      </div>
      <div class="item d">
        <a href="/mentions-legales">Mentions légales </a>
        - beAbot 2021
      </div>
      <div class="item e chiffre-onum">
        <a href="tel:+33768214853">07 68 21 48 53</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
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
// $border: 0.5px solid #4a4949;
footer {
  display: flex;
  position: relative;
  z-index: 1;
  // box-shadow: inset 0 2.5vw 10vw 0 white;
  /*SVG ICON SYSTEM*/
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
  svg {
    position: absolute;
    top: -3px;
    width: 100%;
    height: auto;
    max-height: 100%;
  }

  a {
    text-decoration: none;
    color: $gris4;
    &:hover {
      text-decoration: underline;
    }
  }
}
.container-or {
  width: $width;
  height: $height;
  display: grid;
  margin: 0 auto;
  // grid-template-columns: 75% 25%;
  // grid-template-rows: 61.8% 9.02% 5.58% 11.8% 11.8%;
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
//   grid-template-rows: 61.8% 9.02% 5.58% 23.6%;
//   grid-template-areas:
//     'A B B B'
//     'A E E C'
//     'A E E C'
//     'A D D C';

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: $gris4;
  &:first-child {
    color: transparent;
  }

  &.a {
    grid-area: A;
  }
  &.b {
    grid-area: B;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  &.c {
    grid-area: C;
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;

    // height: 50%;
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
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
    // display: flex;
    justify-content: flex-start;
    // align-items: flex-end;
    overflow: visible;
    font-size: 0.75em;
    .rss {
      // display: flex;
      &::after {
        // content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z' fill='rgb(166,165,164)' /></svg>");
        // margin-right: 5px;
        // display: block;
      }
    }
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
</style>
