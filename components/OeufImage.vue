<template>
  <div class="clip-svg" :style="{ backgroundImage: fond, width: width }">
    <div class="oeuf">
      <!-- <img src="~/assets/img/profilFreakOut.jpg" alt="ggg" /> -->
      <svg width="100%" viewBox="0 0 231.3 228.6" :transform="transform">
        <defs>
          <clipPath id="myClip">
            <path
              d="M225 116.1c-15.4 60.2-50.4 112.5-112.5 112.5S0 178.2 0 116.1 51.2 13.9 112.5 3.6C231-16.4 242 49.6 225 116.1z"
              fill=":fill"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OeufImage',
  props: {
    fill: {
      type: String,
      default: '#F1F1F1', // green, green--outline, white
      required: false,
    },

    width: {
      type: String,
      default: '80%',
      required: false,
    },
    transform: {
      type: String,
      default: 'rotate(0)',
      required: false,
    },
    fond: {
      type: String,
      default:
        "url('https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg')",
      required: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.clip-svg {
  clip-path: url(#myClip);
  background-size: cover;
  overflow: visible;
  /* background-image: url('~assets/img/profilFreakOut.jpg'); */
}
// .clip-svg:hover .oeuf {
//   transform: scale(1.2);
// }
</style>
