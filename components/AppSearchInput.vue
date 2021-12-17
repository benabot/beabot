<template>
  <div id="search" class="search-box">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Recherche"
    />
    <span></span>
    <ul v-if="articles.length" class="text-gris3">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{
            name: 'eco-conception-slug',
            params: { slug: article.slug },
          }"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
};
</script>
<style lang="scss" scoped>
#search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#search input[type='search'] {
  display: inline-block;
  background: 10px 6px white;
  border: 1px solid #d1d1d1;
  // font: bold 12px Arial, Helvetica, Sans-serif;
  color: #bebebe;
  width: 150px;
  padding: 6px 15px 6px 35px;
  border-radius: 20px;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
  transition: all 0.7s ease 0s;
}

#search input[type='search']:focus {
  width: 200px;
}
input::-moz-focus-inner {
  border: 0;
}
li {
  list-style-type: none;
  a {
    &:hover {
      color: $vert;
    }
  }
}
// .cont {
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%);
// }
// .search-box {
//   input[type='search'] {
//     border: none;
//     background: none;
//     z-index: 1;
//     width: 25px;
//     height: 25px;
//     transition: all 0.25s ease-in 0.25s;
//     color: transparent;
//     font-size: 0.75rem;
//     line-height: 25px;
//     &:hover {
//       cursor: pointer;
//       &:focus {
//         cursor: text;
//       }
//       + span {
//         background: rgba(255, 255, 255, 0.2);
//       }
//     }
//     &:focus {
//       width: 200px;
//       padding: 0 10px;
//       outline: none;
//       color: $gris3;
//       background: none;
//       + span {
//         width: 200px;
//         &::before {
//           width: 2px;
//           opacity: 0;
//           transition: all 0.25s ease-in;
//         }
//       }
//     }
//     + span {
//       z-index: -1;
//       position: absolute;
//       border: 2px solid $vert;
//       top: 0;
//       width: 25px;
//       height: 25px;
//       transition: all 0.25s ease-in 0.25s;
//       border-radius: 25px;
//       left: 0;
//       &::before {
//         transition: all 0.25s ease-in 0.5s;
//         transform-origin: left top;
//         content: '';
//         position: absolute;
//         width: 10px;
//         height: 5px;
//         border-radius: 5px;
//         background: $vert;
//         transform: rotate(45deg) translate(26px, -2px);
//       }
//     }
//   }
// }
</style>
