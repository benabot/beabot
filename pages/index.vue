/* eslint-disable vue/multi-word-component-names */
<template>
  <main>
    <section class="container container-1">
      <!-- <Oeuf fill="pink" width="5%" transform="rotate(15)" /> -->
      <h1 class="title">beAbot</h1>
      <div id="boite-logo">
        <Oeuf width="40%" class="fixe oeuf-intro" />
      </div>
      <h2 class="links text-gris2 text-normal titre3">Éco-conception web</h2>
      <p class="links lettre-smcp titre-sub h4 text-fin">
        webdesign - développement - gestion de projet
      </p>
    </section>
    <section class="container container-2 fond-gris">
      <!-- <OeufImage /> -->
      <p class="text-gris5 h4">
        Vous avez sans doute entendu dire que le
        <span class="text-black"
          >numérique émettrait plus de CO2 que le transport aérien</span
        ><span class="insec">&thinsp;</span>? C’est vrai. <br />Peut-être
        pensez-vous que les <span class="text-black">data centers</span> sont la
        source principale de cette <span class="text-black">pollution</span
        ><span class="insec">&thinsp;</span>? Pas tout à fait. <br />Peut-être
        vous a-t-on dit qu’un site éco-conçu c’était le modèle amish en noir et
        blanc<span class="insec">&thinsp;</span>?
        <span class="text-black"
          >Pas du tout<span class="insec">&thinsp;</span>!</span
        >
      </p>
    </section>
    <section class="container--space-between fond-gris">
      <div class="impact">
        <div class="impact--col impact--col__centre">
          <div class="impact--titre">
            <h2 class="h3 text-black text-gris6">
              Les impacts du numérique sur l'environnement&nbsp;:
            </h2>
            <div class="lettre-smcp titre-sub">En quelques mots</div>
          </div>
        </div>
        <div class="impact--col impact--col__1">
          <div class="impact--chiffre">
            <div class="bg-gris bg-gris__bleu">
              <p class="para-gros">
                1 Des impacts sur l’émission de CO<sub>2</sub>, la consommation
                d’énergie et de ressources…
              </p>
            </div>
          </div>
          <div class="impact--chiffre">
            <div class="bg-gris bg-gris__vert">
              <p class="para-gros">
                2 …réparties entre les serveurs, le réseau et les utilisateurs.
              </p>
            </div>
          </div>
        </div>

        <div class="impact--col impact--col__2">
          <div class="impact--chiffre">
            <div class="bg-gris bg-gris__jaune">
              <p class="para-gros">
                3 Les utilisateurs ont le plus fort impact sur l'environnement…
              </p>
            </div>
          </div>
          <div class="impact--chiffre">
            <div class="bg-gris bg-gris__gris">
              <p class="para-gros">
                4 …dés l’achat de leur appareil, avant même son utilisation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="sct-footer mt-n10">
        <NuxtLink
          class="sct-footer--btn"
          to="/eco-conception/La-consommation-energetique-du-numerique"
          >en savoir plus</NuxtLink
        >
        <div class="fleche">
          <svg x="0" y="0" viewBox="0 0 32.8 27.3" xml:space="preserve">
            <path
              fill="#04d94f"
              d="M.4 12.7c3.5 1.7 6.5 3.8 9.5 6 1.5 1.1 2.9 2.3 4.4 3.5.4.3.7.6 1 .9l1 .9c.2.2.4.3.6.2.3 0 .5-.1.6-.2l.9-1c.3-.4.6-.7 1-1 1.4-1.3 2.7-2.6 4.1-3.9 2.8-2.5 5.7-4.8 9-6.8l.2.2c-2.4 2.8-4.9 5.5-7.4 8.2L21.6 24l-1.9 2c-.7.8-1.7 1.2-2.7 1.3-1 0-2-.3-2.7-1l-2.1-1.9-4.1-3.8c-2.7-2.5-5.4-5-8.1-7.6l.4-.3z"
            />
            <path
              fill="#04d94f"
              d="M.4 1.3c3.5 1.7 6.5 3.8 9.5 6 1.5 1.1 2.9 2.3 4.4 3.5.4.3.7.6 1 .9l1 .9c.2.2.4.3.6.2.3 0 .5-.1.6-.2l.9-1c.3-.4.6-.7 1-1 1.4-1.3 2.7-2.6 4.1-3.9 2.8-2.5 5.7-4.8 9-6.8l.2.2c-2.4 2.8-4.9 5.5-7.4 8.2l-3.8 4.1-1.9 2.1c-.6.9-1.6 1.3-2.6 1.4-1 0-2-.3-2.7-1L12.2 13 8.1 9.2C5.4 6.7 2.7 4.2 0 1.6l.4-.3z"
            />
          </svg>
        </div>
      </div>
    </section>

    <section class="container container-3">
      <div class="container-3__titre">
        <Oeuf
          class="container-3__titre__oeuf-1"
          width="40%"
          transform="rotate(-115)"
          fill="#04d94f"
        />
        <Oeuf
          class="container-3__titre__oeuf-2"
          width="40%"
          transform="rotate(45)"
          fill=" #0439d9"
        />
        <Oeuf
          class="container-3__titre__oeuf-3"
          width="40%"
          transform="rotate(-65)"
          fill=" #0439d9"
        />
        <Oeuf
          class="container-3__titre__oeuf-4"
          width="40%"
          transform=""
          fill="#f2a81d"
        />
        <h2 class="titre2 text-gris2 text-black">
          Qu'est-ce que l'éco-conception web<span class="insec">&thinsp;</span>?
        </h2>
        <div class="container-3__titre__sub lettre-smcp">En quelques mots</div>
      </div>
      <div class="boite-para">
        <div class="boite-para__para">
          <!-- <Petittitre gris numero="1" titre="Durabilité" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris2">
            1<span class="text-vert">.</span>
          </div>
          <div class="ligne ligne__verte"></div>
          <h3 class="pt-titre text-black text-gris2">Durabilité</h3>
          <p class="text-gris2">
            2/3 des impacts environnementaux du numérique proviennent de la
            fabrication des équipements. Un site éco-conçu les sollicitera
            moins, évitant leur renouvellement prématuré.
          </p>
        </div>
        <div class="boite-para__para mt-2">
          <!-- <Petittitre gris numero="2" titre="Efficience" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris2">
            2<span class="text-vert">.</span>
          </div>
          <div class="ligne ligne__verte"></div>
          <h3 class="pt-titre text-black text-gris2">Efficience</h3>
          <p class="text-gris2">
            Utiliser le minimum de ressources pour obtenir un résultat similaire
            à un produit conçu de manière conventionnelle.
          </p>
        </div>
      </div>
    </section>
    <section class="container container-4 fond-gris">
      <Oeuf
        class="oeuf container-4__oeuf-1"
        width="30%"
        transform=""
        fill="#0439d9"
      />
      <Oeuf
        class="oeuf container-4__oeuf-2"
        width="24%"
        transform="rotate(-45)"
        fill="#04d94f"
      />
      <Oeuf
        class="oeuf container-4__oeuf-3"
        width="27%"
        transform="rotate(-85)"
        fill="#04d94f"
      />
      <Oeuf
        class="oeuf container-4__oeuf-4"
        width="21%"
        transform="rotate(-95)"
        fill="#f2a81d"
      />
      <div class="container-4__boite-para">
        <div class="container-4__boite-para--para">
          <!-- <Petittitre couleur="white" numero="3" titre="Sobriété" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris5">
            3<span class="text-blanc">.</span>
          </div>
          <div class="ligne"></div>
          <h3 class="pt-titre text-black text-gris5">Sobriété</h3>
          <p class="text-gris5">
            Proposer un service correspondant à un besoin avéré et aux
            fonctionnalités simples.
            <br />
            Faire des choix technologiques afin de réduire l’empreinte carbone
            du site tout en fournissant un service optimal.
          </p>
        </div>
        <div class="container-4__boite-para--para">
          <!-- <Petittitre couleur="white" numero="4" titre="Transversalité" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris5">
            4<span class="text-blanc">.</span>
          </div>
          <div class="ligne"></div>
          <h3 class="pt-titre text-black text-gris5">Transversalité</h3>
          <p class="text-gris5">
            À chacune des étapes de la conception du site web et jusqu’à
            l’accompagnement des usagers la préoccupation environnementale est
            au cœur du projet.
          </p>
        </div>
      </div>
      <div class="sct-footer">
        <!-- <button class="sct-footer--btn">en savoir plus</button> -->
        <NuxtLink
          class="sct-footer--btn"
          to="/eco-conception/L-eco-conception-web"
          >en savoir plus</NuxtLink
        >
        <div class="fleche">
          <svg x="0" y="0" viewBox="0 0 32.8 27.3" xml:space="preserve">
            <path
              fill="#04d94f"
              d="M.4 12.7c3.5 1.7 6.5 3.8 9.5 6 1.5 1.1 2.9 2.3 4.4 3.5.4.3.7.6 1 .9l1 .9c.2.2.4.3.6.2.3 0 .5-.1.6-.2l.9-1c.3-.4.6-.7 1-1 1.4-1.3 2.7-2.6 4.1-3.9 2.8-2.5 5.7-4.8 9-6.8l.2.2c-2.4 2.8-4.9 5.5-7.4 8.2L21.6 24l-1.9 2c-.7.8-1.7 1.2-2.7 1.3-1 0-2-.3-2.7-1l-2.1-1.9-4.1-3.8c-2.7-2.5-5.4-5-8.1-7.6l.4-.3z"
            />
            <path
              fill="#04d94f"
              d="M.4 1.3c3.5 1.7 6.5 3.8 9.5 6 1.5 1.1 2.9 2.3 4.4 3.5.4.3.7.6 1 .9l1 .9c.2.2.4.3.6.2.3 0 .5-.1.6-.2l.9-1c.3-.4.6-.7 1-1 1.4-1.3 2.7-2.6 4.1-3.9 2.8-2.5 5.7-4.8 9-6.8l.2.2c-2.4 2.8-4.9 5.5-7.4 8.2l-3.8 4.1-1.9 2.1c-.6.9-1.6 1.3-2.6 1.4-1 0-2-.3-2.7-1L12.2 13 8.1 9.2C5.4 6.7 2.7 4.2 0 1.6l.4-.3z"
            />
          </svg>
        </div>
      </div>
    </section>
    <section class="container container-5">
      <div class="container-5__boite-titre container-5__boite-titre__titre">
        <h3 class="text-black text-gris2 h2">
          Un site bon pour la planete et bon pour&nbsp;:
        </h3>

        <div class="container-5__boite-titre__oeuf">
          <Oeuf class="oeuf" width="60%" transform="rotate(5)" fill="#f2a81d" />
        </div>
      </div>
      <div class="boite-para">
        <div class="boite-para__para fond-oeuf fond-oeuf__vert">
          <!--  <div class="boite-para--titre">
            <Oeuf
              class="oeuf superpo"
              width="60%"
              transform="rotate(5)"
              fill="#f2a81d"
            /> -->
          <h3 class="boite-para__titre text-black text-gris2">
            Ses utilisateurs
          </h3>
          <!-- </div> -->

          <p class="text-gris2">
            L’économie de moyens mis en œuvre ne se fait pas au détriment de la
            qualité graphique du site. Au contraire, toutes les fonctionnalités
            du site sont pensées pour garantir la meilleure expérience
            utilisateur (UX design). Élaborer des interfaces pertinentes pour
            l’utilisateur et sobres énergétiquement c’est une démarche
            rigoureuse de webdesign avec un soin particulièrement prononcé pour
            le détails typographique et la mise en page léchée.
          </p>
        </div>
        <div class="boite-para__para fond-oeuf fond-oeuf__bleu">
          <!-- <div class="boite-para--titre">
            <Oeuf
              class="oeuf superpo"
              width="30%"
              transform="rotate(-95)"
              fill="#2561d9"
            /> -->
          <h3 class="boite-para__titre text-black text-gris2">
            Le référencement
          </h3>
          <!-- </div> -->

          <p class="text-gris2">
            L’expérience utilisateur finement étudiée et la sobriété des moyens
            employés permettent à un site éco-conçu de répondre naturellement
            aux principaux critères d’un bon référencement. Votre site possédera
            les atouts les plus pertinents pour figurer en bonne position dans
            les moteurs de recherche.
          </p>
        </div>
      </div>
    </section>
    <section class="container container-blog">
      <hr />
      <h3 class="h2 text-gris2 text-black">
        éco-conception&nbsp;<span>:</span>
        <br />
        <span class="text-fin">derniers articles</span>
      </h3>
      <div class="container-blog__box">
        <div class="boite-para__para a">
          <Petittitre
            gris
            titre="éco-conception d'un thème WordPress"
            stitre="Éco-conception"
          />
          <p class="text-gris2">
            Eco-conception et WordPress, exemple et cas concret avec un thème
            WordPress éco-conçu pour le site de la petite boucle.
          </p>
          <Boutoncta to="/eco-conception/theme-wordpress-eco-conception" />
        </div>
        <div class="oeuf b">
          <NuxtLink to="/eco-conception" aria-label="voir le blog"
            ><svg class="lien" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.4,13h-4.9c-0.3,0-0.6,0.2-0.6,0.6v4.9c0,0.3-0.2,0.6-0.6,0.6h-0.9c-0.3,0-0.6-0.2-0.6-0.6v-4.9c0-0.3-0.2-0.6-0.6-0.6
	H5.6C5.2,13,5,12.8,5,12.4v-0.9C5,11.2,5.2,11,5.6,11h4.9c0.3,0,0.6-0.2,0.6-0.6V5.6C11,5.2,11.2,5,11.6,5h0.9C12.8,5,13,5.2,13,5.6
	v4.9c0,0.3,0.2,0.6,0.6,0.6h4.9c0.3,0,0.6,0.2,0.6,0.6v0.9C19,12.8,18.8,13,18.4,13z"
              /></svg></NuxtLink
          ><Oeuf
            class="fond"
            width="80%"
            transform="rotate(-95)"
            fill="#04d94f"
          />
        </div>
        <div class="boite-para__para c">
          <Petittitre
            gris
            titre="Qu’est-ce que l’éco-conception web?"
            stitre="Éco-conception"
          />
          <p class="text-gris2">
            Sujet en vogue, l’éco-conception web, victime de son succès, est
            sujet d’une vague de greenwashing. Par delà les malentendus, tentons
            de clarifier le sujet.
          </p>
          <Boutoncta to="/eco-conception/L-eco-conception-web" />
        </div>
      </div>
    </section>
    <section class="container container-blog container-blog--bleu">
      <hr />
      <h3 class="h2 text-gris2 text-black">
        portfolio&nbsp;<span>:</span>
        <br />
        <span class="text-fin">dernières créations</span>
      </h3>
      <div class="container-blog__box">
        <div class="boite-para__para a">
          <Petittitre gris couleur="#2561d9" titre="AMC2" stitre="dev" />
          <p class="text-gris2">
            Vitrine et catalogue d'entreprise. Réalisé avec NuxtJS et WordPress
            (headless CMS).
          </p>
          <Boutoncta to="/portfolio#site1" bleu>découvrir</Boutoncta>
        </div>
        <div class="oeuf b">
          <NuxtLink to="/portfolio" aria-label="voir le portfolio"
            ><svg class="lien" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.4,13h-4.9c-0.3,0-0.6,0.2-0.6,0.6v4.9c0,0.3-0.2,0.6-0.6,0.6h-0.9c-0.3,0-0.6-0.2-0.6-0.6v-4.9c0-0.3-0.2-0.6-0.6-0.6
	H5.6C5.2,13,5,12.8,5,12.4v-0.9C5,11.2,5.2,11,5.6,11h4.9c0.3,0,0.6-0.2,0.6-0.6V5.6C11,5.2,11.2,5,11.6,5h0.9C12.8,5,13,5.2,13,5.6
	v4.9c0,0.3,0.2,0.6,0.6,0.6h4.9c0.3,0,0.6,0.2,0.6,0.6v0.9C19,12.8,18.8,13,18.4,13z"
              /></svg></NuxtLink
          ><Oeuf
            class="fond"
            width="80%"
            transform="rotate(-95)"
            fill="#2561d9"
          />
        </div>
        <div class="boite-para__para c">
          <Petittitre
            gris
            couleur="#2561d9"
            titre="Guide RSE Banque Populaire"
            stitre="dev"
          />
          <p class="text-gris2">
            Carte interactive pour le guide RSE de la Banque populaire. Réalisée
            avec VueJs.
          </p>
          <Boutoncta to="/portfolio#site2" bleu>présentation</Boutoncta>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Accueil - éco-conception web',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'L’éco-conception web, c’est concilier respect de l’environnement et technologies numériques de pointe pour un internet durable.',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://beabot.netlify.app/',
        },
      ],
      // script: [
      //   {
      //     type: 'application/ld+json',
      //     json: {
      //       '@context': 'http://schema.org',
      //       '@type': 'Organization',
      //       name: 'NuxtJS',
      //     },
      //   },
      // ],
    }
  },
  created() {
    // this.$store.commit('page/sethome', true)
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  z-index: 3;
  &:first-child {
    z-index: 1;
  }
}

.container-1 {
  h2 {
    margin-bottom: 0.1rem;
  }
}
.container-2 {
  min-height: 60vh;
  @media (min-width: $breakpoint-tablet) {
    min-height: 100vh;
  }
  p {
    width: 90vw;
    line-height: 1.618;
    text-align: left;
    @media (min-width: $breakpoint-tablet) {
      width: 50vw;
    }
  }
}
.impact {
  height: 87vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-evenly;
  hyphens: none;
  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
  }
  // margin-top: -3rem;
  &--col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 33vh;
    @media (min-width: $breakpoint-tablet) {
      height: auto;
      &__1 {
        order: 1;
        width: 35%;
      }
      &__2 {
        order: 3;
        width: 35%;
      }
    }

    &__centre {
      justify-content: center;
      align-items: flex-start;
      @media (min-width: $breakpoint-tablet) {
        order: 2;
      }
    }
  }
  &--titre {
    width: 80%;
    margin: 0 auto;
    text-align: left;
  }
  &--chiffre {
    border: 5px solid $gris1;
    min-height: 31.8%;
    display: flex;
    align-items: stretch;
    .bg-gris {
      background: $gris6;
      padding: 0.5rem 1rem;
      // height: 100%;
      display: flex;
      align-items: center;
      width: 100%;

      &__bleu {
        border-left: 15px solid $bleu2;
      }
      &__vert {
        border-left: 15px solid $vert;
      }
      &__jaune {
        border-right: 15px solid $jaune;
      }
      &__gris {
        // border-right: 15px solid $gris2;
        border-left: 15px solid $gris2;
      }
    }
  }
  .titre-sub {
    display: inline-block;
    color: $gris4;
    text-align: left;
    margin-left: 1rem;
    border-top: 2px solid $gris4;
  }
}
.container-3 {
  display: flex;
  overflow: hidden;
  @media (min-width: $breakpoint-tablet) {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
  &__titre {
    width: 90%;
    margin-left: 10%;
    margin-bottom: 1.6rem;
    margin-top: 2rem;
    position: relative;
    @media (min-width: $breakpoint-tablet) {
      width: 60%;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 40%;
      min-height: 45vh;
    }

    h2 {
      position: relative;
      text-align: left;
      z-index: 2;
    }
    &__oeuf-1 {
      position: absolute;
      z-index: 1;
      top: -45%;
      left: -2%;
    }
    &__oeuf-2 {
      position: absolute;
      z-index: 1;
      top: -43%;
      right: -18%;
    }
    &__oeuf-3 {
      position: absolute;
      z-index: 1;
      top: 24%;
      left: -35%;
    }
    &__oeuf-4 {
      position: absolute;
      z-index: 1;
      top: 52%;
    }
    &__sub {
      color: $vert;
      text-align: center;
      width: 60%;
      position: relative;
      z-index: 2;
      border-top: 2px solid $vert;
      @media (min-width: $breakpoint-tablet) {
        // width: 20%;
        // width: 100%;
        width: auto;
        display: inline-block;
        text-align: left;
      }
      // div {
      //   &:first-child {
      //     width: 9.8ex;
      //     // width: 61.8%;
      //     height: 0.5em;
      //     border-top: 2px solid $vert;
      //   }
      // }
    }
  }
}
.container-4 {
  position: relative;
  justify-content: space-between;
  &__boite-para {
    width: 100%;
    min-height: 80vh;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (min-width: $breakpoint-tablet) {
      width: 66%;
      flex-direction: row;
      min-height: 65vh;
      margin-top: 5%;
    }
    &--para {
      width: 100%;
      @media (min-width: $breakpoint-tablet) {
        width: 50%;
        align-self: flex-end;
        &:first-child {
          align-self: flex-start;
        }
      }

      p {
        text-align: justify;
        margin-right: 2rem;
      }
    }
  }
  .oeuf {
    position: absolute;
    z-index: 2;
  }
  &__oeuf-1 {
    left: 10%;
    top: 5%;
  }
  &__oeuf-2 {
    right: 9%;
    top: 8%;
  }
  &__oeuf-3 {
    left: 10%;
    top: 78%;
    @media (min-width: $breakpoint-tablet) {
      top: 56%;
    }
  }
  &__oeuf-4 {
    right: 10%;
    top: 80%;
    @media (min-width: $breakpoint-tablet) {
      top: 60%;
    }
  }
}
.container-5 {
  margin-bottom: 6rem;
  &__boite-titre {
    display: flex;
    width: 100%;
    padding-top: 10%;

    &__titre {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40vh;
      @media (min-width: $breakpoint-tablet) {
        width: 60%;
        height: 90vh;
      }
      h3 {
        // color: white;
        // margin: 1px 4px;
        z-index: +1;
        @media (min-width: $breakpoint-tablet) {
          // margin: 0 3rem;
        }
      }
      div {
        position: absolute;
        width: 100%;
        &:first-child {
          z-index: +1;
        }
      }
    }
    &__oeuf {
      width: 35%;
      height: 40vh;
      display: flex;
      align-items: flex-start;
      @media (min-width: $breakpoint-tablet) {
        height: 80vh;
      }
      .oeuf {
        position: sticky;
        top: 0;
      }
    }
  }
  .fond-oeuf {
    background-repeat: no-repeat;
    background-size: 80%;
    overflow: visible;
    position: relative;
    &__vert {
      // background: url('~assets/img/oeuf-vert.svg');
      // background-position: -25% 75%;
      &::before {
        content: '';
        display: inline-block;
        width: 65%;
        min-height: 66%;
        background-image: url('~assets/img/oeuf-vert.svg');
        background-repeat: no-repeat;
        position: absolute;
        left: -15%;
        z-index: -1;
        opacity: 0.8;
      }
    }
    &__bleu {
      &::after {
        content: '';
        display: inline-block;
        width: 65%;
        min-height: 66%;
        background-image: url('~assets/img/oeuf-bleu.svg');
        background-repeat: no-repeat;
        position: absolute;
        right: -15%;
        bottom: 0;
        z-index: -1;
        opacity: 0.6;
      }
    }
  }
}
.container-blog {
  hr {
    // color: $vert;
    width: 66%;
    border: 0.6px solid $vert;
    border-radius: 500px;
    opacity: 0.7;
    margin-bottom: 1.6rem;
    @media (min-width: $breakpoint-tablet) {
      display: none;
    }
  }

  h3 {
    span {
      color: $vert;
    }
  }
  .a {
    order: 1;
  }
  .b {
    order: 3;
    @media (min-width: $breakpoint-tablet) {
      order: 2;
    }
  }
  .c {
    order: 2;
    margin-top: 1.6rem;
    @media (min-width: $breakpoint-tablet) {
      order: 3;
      margin-top: 0;
    }
  }
  &--bleu {
    h3 {
      span {
        color: $bleu1;
      }
    }
    hr {
      border: 0.6px solid $bleu1;
    }
  }

  &__box {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
    }
    .oeuf {
      position: relative;
      z-index: 12;
      height: 25vh;
      width: 33%;
      margin-left: 33%;
      @media (min-width: $breakpoint-tablet) {
        align-self: center;
        position: sticky;
        top: 200px;
        margin-left: 0;
      }
      a,
      .fond {
        position: absolute;
        height: 90px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      a {
        z-index: +1;
        color: $fondClair;
        height: auto;
        opacity: 0.8;
        width: 60%;
        transition: all 500ms ease;
        &:hover {
          opacity: 1;
          width: 70%;
        }
      }
      .fond {
        height: auto;
      }
      // &::before {
      //   content: '+';
      //   font-size: 8rem;
      //   height: 82px;
      //   line-height: 0.58;
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      //   z-index: 1;
      //   color: $fondClair;
      //   font-weight: $bold;
      //   opacity: 0.9;
      //   transition: ease-in 0.1s;
      // }
      // &:hover::before {
      //   font-size: 8.4rem;
      //   opacity: 1;
      // }
    }
    & > div {
      width: 100%;
      @media (min-width: $breakpoint-tablet) {
        width: 33%;
      }
    }
  }
}
.boite-para {
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: $breakpoint-tablet) {
    width: 66%;
    flex-direction: row;
  }
  &__para {
    width: 100%;
    @media (min-width: $breakpoint-tablet) {
      width: 50%;
    }
    & p {
      text-align: justify;
    }
    &:first-of-type {
      margin-right: 1.4rem;
      @media (min-width: $breakpoint-tablet) {
        margin-right: 2rem;
      }
    }
  }
  &__titre {
    text-align: left;
    word-break: keep-all;
    margin-bottom: 0;
  }
  // &--titre {
  //   position: relative;
  //   display: flex;
  //   align-items: center;
  //   width: 100%;
  //   min-height: 5rem;
  //   margin-top: 2.5rem;
  //   @media (min-width: $breakpoint-tablet) {
  //     margin-top: 0;
  //   }
  //   .superpo {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     &:first-child {
  //       z-index: -1;
  //       left: 10%;
  //       top: -40%;
  //       @media (min-width: $breakpoint-tablet) {
  //         // left: -40%;
  //       }
  //     }
  //   }
  // }
}
#boite-logo {
  position: relative;
  width: 66%;
  height: auto;
  min-height: 48vh;
  background: url('~assets/img/forme-flou.svg') no-repeat center;
  background-size: 100%;
  // background: url('~assets/img/forme-flou.svg') no-repeat center,
  //   url('~assets/img/forme.svg') no-repeat center;
  // background-size: 90%, 100%;
  // filter: drop-shadow(14px);
  // filter: blur(14.187px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: $breakpoint-tablet) {
    background-size: 90%;
    width: 33%;
  }

  &::before {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100px;
    background-color: blue;
    background: url('~assets/img/forme.svg') no-repeat center;
    background-size: 100%;
  }
  @keyframes hideshow {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }
  .oeuf-intro {
    padding: 5%;
    filter: blur(1px);
    z-index: 2;
    animation: hideshow 1.5s ease;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  position: relative;
  z-index: 3;
}

.para-gros {
  &::first-letter {
    font-weight: 900;
    color: $gris1;
    // margin-right: 100%;
    line-height: 0;
  }
  @media (min-width: $breakpoint-tablet) {
    &::first-letter {
      font-size: 3rem;
    }
  }
  @media (min-width: 1920px) {
    font-size: 1.68rem;
  }
}

.mt-n10 {
  margin-top: -10%;
}
.sct-footer {
  &--btn {
    color: $gris5;
    background: linear-gradient($gris1, $gris1) right bottom / 80% 0.55em
      no-repeat;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.86rem;
    border: none;
    // padding-left: 20px;
    // width: 200px;
    transition: background-size 0.4s;
    cursor: pointer;
    // margin-left: 5px;
    // margin-bottom: 2.5rem;

    &:hover {
      background-size: 100% 0.6em;
    }
  }
  .fleche {
    width: 33px;
    margin: 0 auto;
    padding: 1rem 0;
  }
}
</style>
