/* eslint-disable vue/multi-word-component-names */
<template>
  <main>
    <section class="container container-1">
      <!-- <Oeuf fill="pink" width="5%" transform="rotate(15)" /> -->
      <h1 class="title">beAbot</h1>
      <div id="boite-logo">
        <Oeuf width="35%" class="fixe oeuf-intro" />
      </div>
      <h2 class="links text-gris2 text-normal titre3">Éco-conception web</h2>
      <p class="links lettre-smcp titre-sub h4 text-fin">
        Performance, accessibilité, sobriété : un web durable et beau
      </p>

      <!-- Flèche de scroll -->
      <button
        @click="scrollToNext"
        class="scroll-indicator"
        aria-label="Aller à la section suivante : impacts du numérique"
      >
        <svg viewBox="0 0 32.8 27.3" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#04d94f"
            d="M.4 12.7c3.5 1.7 6.5 3.8 9.5 6 1.5 1.1 2.9 2.3 4.4 3.5.4.3.7.6 1 .9l1 .9c.2.2.4.3.6.2.3 0 .5-.1.6-.2l.9-1c.3-.4.6-.7 1-1 1.4-1.3 2.7-2.6 4.1-3.9 2.8-2.5 5.7-4.8 9-6.8l.2.2c-2.4 2.8-4.9 5.5-7.4 8.2L21.6 24l-1.9 2c-.7.8-1.7 1.2-2.7 1.3-1 0-2-.3-2.7-1l-2.1-1.9-4.1-3.8c-2.7-2.5-5.4-5-8.1-7.6l.4-.3z"
          />
          <path
            fill="#04d94f"
            d="M.4 1.3c3.5 1.7 6.5 3.8 9.5 6 1.5 1.1 2.9 2.3 4.4 3.5.4.3.7.6 1 .9l1 .9c.2.2.4.3.6.2.3 0 .5-.1.6-.2l.9-1c.3-.4.6-.7 1-1 1.4-1.3 2.7-2.6 4.1-3.9 2.8-2.5 5.7-4.8 9-6.8l.2.2c-2.4 2.8-4.9 5.5-7.4 8.2l-3.8 4.1-1.9 2.1c-.6.9-1.6 1.3-2.6 1.4-1 0-2-.3-2.7-1L12.2 13 8.1 9.2C5.4 6.7 2.7 4.2 0 1.6l.4-.3z"
          />
        </svg>
      </button>
    </section>
    <section class="container container-2 fond-gris">
      <!-- <LazyOeufImage /> -->
      <p class="text-gris5 h4">
        <span class="text-black"
          >Les émissions de gaz à effet de serre liées à la technologie
          numérique dépassent celles de l'aviation</span
        >. <br />Cependant, il y a une bonne nouvelle<span class="insec"
          >&thinsp;</span
        >:
        <span class="text-black"
          >votre site web a le pouvoir de contribuer à la solution</span
        >. 
        <br />
        <br />
        Un site web conçu de manière écoresponsable nécessite
        <span class="text-black"
          >moins de ressources, se charge plus rapidement, sollicite moins les
          téléphones sans renoncer à l’esthétique</span
        ><span class="insec">&thinsp;</span>: c'est non seulement possible, et
        c'est aussi ce que je fais...

        <!-- <span class="text-black">Le numérique pèse plus lourd que l'aviation</span> dans nos émissions de CO2. La bonne nouvelle<span class="insec">&thinsp;</span>? <span class="text-black">Chaque site peut faire partie de la solution</span>. Un site éco-conçu consomme moins de ressources, charge plus vite, use moins les téléphones et reste beau : c'est possible, et c'est ce que je fais... -->
      </p>
      <!-- <p class="text-gris5 h4">
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
      </p> -->
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
          <div class="impact--chiffre impact-card">
            <div class="bg-gris bg-gris__bleu">
              <p class="para-gros">
                1 Le numérique génère des effets environnementaux mesurables :
                émissions de CO₂, consommation d’énergie et extraction de
                ressources.
              </p>
            </div>
          </div>
          <div class="impact--chiffre impact-card">
            <div class="bg-gris bg-gris__vert">
              <p class="para-gros">
                2 Ces effets se répartissent entre les centres de données, les
                réseaux et surtout les équipements des utilisateurs.
              </p>
            </div>
          </div>
        </div>

        <div class="impact--col impact--col__2">
          <div class="impact--chiffre impact-card">
            <div class="bg-gris bg-gris__jaune">
              <p class="para-gros">
                3 La fabrication et l’usage des terminaux concentrent
                l’essentiel de l’empreinte environnementale.
              </p>
            </div>
          </div>
          <div class="impact--chiffre impact-card">
            <div class="bg-gris bg-gris__gris">
              <p class="para-gros">
                4 Cette empreinte débute dès la production des appareils, bien
                avant leur première utilisation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-gris5 h4 mt-n10">
        Comprendre ces impacts permet de concevoir autrement.
      </p>
      <div class="sct-footer mt-n10">
        <AppLink
          class="sct-footer--btn"
          to="/eco-conception/la-consommation-energetique-du-numerique/"
          >en savoir plus</AppLink
        >
        <div class="fleche">
          <svg
            x="0"
            y="0"
            viewBox="0 0 32.8 27.3"
            xml:space="preserve"
            aria-hidden="true"
            focusable="false"
          >
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
        <LazyOeuf
          class="container-3__titre__oeuf-1"
          width="40%"
          transform="rotate(-115)"
          fill="#04d94f"
        />
        <LazyOeuf
          class="container-3__titre__oeuf-2"
          width="40%"
          transform="rotate(45)"
          fill=" #0439d9"
        />
        <LazyOeuf
          class="container-3__titre__oeuf-3"
          width="40%"
          transform="rotate(-65)"
          fill=" #0439d9"
        />
        <LazyOeuf
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
          <!-- <BaseHeading gris numero="1" titre="Durabilité" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris2">
            1<span class="text-vert">.</span>
          </div>
          <div class="ligne ligne__verte"></div>
          <p class="text-gris3 text-black lettre-smcp">
            Allonger la durée de vie
          </p>
          <h3 class="pt-titre text-black text-gris2">Durabilité</h3>
          

          <p class="text-gris2">
            Un site allégé (≈ 500 Ko au lieu de plusieurs mégaoctets) reste
            utilisable sur des smartphones anciens, limitant leur renouvellement
            prématuré.
          </p>
        </div>
        <div class="boite-para__para mt-2">
          <!-- <BaseHeading gris numero="2" titre="Efficience" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris2">
            2<span class="text-vert">.</span>
          </div>
          <div class="ligne ligne__verte"></div>
           <p class="text-gris3 text-black lettre-smcp">
            Faire mieux avec moins
          </p>
          <h3 class="pt-titre text-black text-gris2">Efficience</h3>
         

          <p class="text-gris2">
            Réduire de 60 à 70 % le poids d’un site à fonctionnalités
            équivalentes, sans dégrader l’expérience utilisateur.
          </p>
        </div>
      </div>
    </section>
    <section class="container container-4 fond-gris">
      <LazyOeuf
        class="oeuf container-4__oeuf-1"
        width="30%"
        transform=""
        fill="#0439d9"
      />
      <LazyOeuf
        class="oeuf container-4__oeuf-2"
        width="24%"
        transform="rotate(-45)"
        fill="#04d94f"
      />
      <LazyOeuf
        class="oeuf container-4__oeuf-3"
        width="27%"
        transform="rotate(-85)"
        fill="#04d94f"
      />
      <LazyOeuf
        class="oeuf container-4__oeuf-4"
        width="21%"
        transform="rotate(-95)"
        fill="#f2a81d"
      />
      <div class="container-4__boite-para">
        <div class="container-4__boite-para--para">
          <!-- <BaseHeading couleur="white" numero="3" titre="Sobriété" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris5">
            3<span class="text-blanc">.</span>
          </div>
          <div class="ligne"></div>
            <p class="text-gris4 text-black lettre-smcp">
            Répondre à l’essentiel
          </p>
          <h3 class="pt-titre text-black text-gris5">Sobriété</h3>
        

          <p class="text-gris5">
            Proposer un service répondant à un besoin avéré, avec des
            fonctionnalités ciblées et pertinentes. Faire des choix
            technologiques sobres afin de réduire l’empreinte carbone du site,
            sans compromettre la qualité du service rendu.
          </p>
        </div>
        <div class="container-4__boite-para--para">
          <!-- <BaseHeading couleur="white" numero="4" titre="Transversalité" /> -->
          <div class="pt-titre h3 text-black chiffre-onum text-gris5">
            4<span class="text-blanc">.</span>
          </div>
          <div class="ligne"></div>
          <p class="text-gris4 text-black lettre-smcp">
            Une démarche continue
          </p>
          <h3 class="pt-titre text-black text-gris5">Transversalité</h3>
          

          <p class="text-gris5">
            Du recueil des besoins au développement du site, jusqu’à
            l’accompagnement des usagers, la préoccupation environnementale est
            au cœur du projet et guide chaque choix.
          </p>
        </div>
      </div>
            <p class="text-gris5  lettre-smcp para-trans">Cette approche permet de concevoir des sites à la fois plus légers, plus rapides et plus durables, sans renoncer à la qualité graphique ni à l’expérience utilisateur.</p>

      <div class="sct-footer">
        <!-- <button class="sct-footer--btn">en savoir plus</button> -->
        <AppLink
          class="sct-footer--btn"
          :to="faqLink"
          >en savoir plus</AppLink
        >
        <div class="fleche">
          <svg
            x="0"
            y="0"
            viewBox="0 0 32.8 27.3"
            xml:space="preserve"
            aria-hidden="true"
            focusable="false"
          >
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
          <LazyOeuf
            class="oeuf"
            width="60%"
            transform="rotate(5)"
            fill="#f2a81d"
          />
        </div>
      </div>
      <div class="boite-para">
        <div class="boite-para__para fond-oeuf fond-oeuf__vert">
          <!--  <div class="boite-para--titre">
            <LazyOeuf
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
            <LazyOeuf
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
    <section class="section-faq-home" aria-labelledby="faq-home">
      <div class="home-faq-card__inner">
        <h2 id="faq-home" class="h3 text-gris2 text-black home-faq-card__title">
          FAQ — Éco-conception web
        </h2>
        <p class="text-gris3 text-fin home-faq-card__lead">
          L’essentiel en questions-réponses, pour comprendre vite et décider mieux.
        </p>
        <ul class="home-faq-card__list text-gris2">
          <li>
            SEO : est-ce compatible (et pourquoi)<span class="insec"> &thinsp;</span>?
          </li>
          <li>
            Design : sobriété veut-elle dire moins esthétique<span class="insec"> &thinsp;</span>?
          </li>
          <li>
            Fonctionnalités : que faut-il garder, que faut-il éviter<span class="insec"> &thinsp;</span>?
          </li>
          <li>
            WordPress : peut-on faire léger et durable<span class="insec"> &thinsp;</span>?
          </li>
        </ul>
        <BaseButton text="Comprendre l’essentiel" :to="faqLink" />
      </div>
    </section>
    <LazyHomeEcoArticles />
    <LazyHomePortfolioLatest />
  </main>
</template>

<script setup>
import { canonicalUrl, withTrailingSlash } from '~/utils/seo-url'

const config = useRuntimeConfig()
const homeCanonicalUrl = canonicalUrl(config.public.siteUrl, '/')
const faqLink = withTrailingSlash('/eco-conception/faq-eco-conception')

// Fonction de scroll smooth vers la section suivante
const scrollToNext = () => {
  const container2 = document.querySelector('.container-2')
  if (container2) {
    container2.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Schema Organization pour la page d'accueil
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BeAbot',
  url: config.public.siteUrl,
  logo: `${config.public.siteUrl}/beabot.png`,
  description: 'Développeur web spécialisé en éco-conception. Sites performants, accessibles et sobres.',
  founder: {
    '@type': 'Person',
    name: 'Benoît Abot',
    jobTitle: 'Développeur web & designer',
    url: `${config.public.siteUrl}/portfolio/`,
  },
  sameAs: [
    'https://github.com/benabot',
    'https://www.linkedin.com/in/benoit-abot/',
    'https://twitter.com/AbotBenoit',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${config.public.siteUrl}/contact/`,
  },
}

useHead({
  title: 'Accueil - éco-conception web',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: homeCanonicalUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema),
    },
  ],
})
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
  @media (max-width: $breakpoint-tablet) {
    padding: 2rem 0;
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
.section-faq-home {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.home-faq-card__inner {
  max-width: 960px;
  margin: 0 auto;
  border: 1px solid $vert;
  background: rgba($vert, 0.04);
  border-radius: 0.6rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.06);

}
.home-faq-card__title {
  margin: 0 0 1.5rem;
  font-weight: $bold;
  letter-spacing: 0.02em;
}
.home-faq-card__lead {
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}
.home-faq-card__list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 2rem;
  display: grid;
  gap: 0.5rem 1.6rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  li {
    position: relative;
    padding-left: 1.2rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 999px;
    background: $vert;
  }
}
.impact {
  height: 87vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-evenly;
  hyphens: none;
  @media (max-width: 1200px) {
    height: auto;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
  }
  @media (max-width: $breakpoint-tablet) {
    gap: 1rem;
  }
  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
  }
  // margin-top: -3rem;
  &--col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 33vh;
    @media (max-width: 1200px) {
      height: auto;
      gap: 1rem;
    }
    @media (max-width: $breakpoint-tablet) {
      gap: 1rem;
    }
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
    width: 100%;
    margin: 0 auto;
    text-align: left;
    @media (min-width: $breakpoint-tablet) {
      width: 80%;
    }
  }
  &--chiffre {
    border: 5px solid $gris1;
    min-height: 31.8%;
    display: flex;
    align-items: stretch;
    @media (max-width: 1200px) {
      min-height: auto;
    }
    @media (max-width: $breakpoint-tablet) {
      min-height: auto;
    }
    .bg-gris {
      background: $gris6;
      padding: 0.5rem 1rem;
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

// .impact-card {
//   display: flex;
//   width: 100%;
//   min-height: auto;
//   aspect-ratio: 1 / 1;
//   box-sizing: border-box;
//   max-width: 100%;
//   @media (max-width: 1200px) {
//     aspect-ratio: auto;
//     min-height: 220px;
//   }
//   @media (max-width: $breakpoint-tablet) {
//     min-height: 180px;
//   }
// }
/* 1) Stopper les césures moches dans les cartes (nu-mé-rique / environnemen-tale)
   Tu as hyphens: none sur .impact (conteneur), mais ça ne suffit pas toujours si d’autres règles s’appliquent aux <p>.
   On force sur le texte des cartes. */
.impact .impact--chiffre .para-gros {
  hyphens: none;
  -webkit-hyphens: none;
  word-break: normal;
  overflow-wrap: normal;
}

/* 2) Rendre les cartes moins “lourdes” visuellement : padding responsive + confort de lecture
   (sans changer le layout, ça améliore immédiatement desktop + mobile). */
.impact .impact--chiffre .bg-gris {
  padding: clamp(10px, 1.2vw, 18px) clamp(12px, 1.6vw, 22px);
}

.impact .impact--chiffre .para-gros {
  line-height: 1.35;
}

/* 3) Stabiliser les hauteurs : éviter l’aspect-ratio 1/1 sur desktop (trop rigide) et réduire les min-height mobiles
   → On garde le “carré” uniquement sur très grand écran si tu y tiens, sinon on privilégie une hauteur souple.
   Impact : meilleure homogénéité des 4 blocs + moins de vide inutile. */
/* Base : comportement fluide par défaut (mobile + tablette + laptop) */
.impact-card {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: auto;
  min-height: 180px;

  @media (min-width: $breakpoint-tablet) {
    min-height: 220px;
  }

  @media (min-width: 1200px) {
    aspect-ratio: 1 / 1;
    min-height: 0;
  }
}
.impact--titre {
   @media (max-width: $breakpoint-tablet) {
    padding-top: 3rem;
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
  .para-trans {
    position: relative;
    z-index: 10;
    width: 55%;
    margin: 3rem auto 0 auto;
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
    // retrait des inline data URI décoratives
    &__vert {
      &::before {
        content: '';
        display: inline-block;
        width: 65%;
        min-height: 66%;
        background-image: url('/img/oeuf-vert.svg');
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
        background-image: url('/img/oeuf-bleu.svg');
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
:deep(.container-blog) {
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
}
:deep(.container-blog--bleu) {
  h3 {
    span {
      color: $bleu1;
    }
  }
  hr {
    border: 0.6px solid $bleu1;
  }
}

:deep(.container-blog__box) {
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
:deep(.boite-para) {
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: $breakpoint-tablet) {
    width: 66%;
    flex-direction: row;
  }
}
:deep(.boite-para__para) {
  width: 100%;
  @media (min-width: $breakpoint-tablet) {
    width: 50%;
  }
  p {
    text-align: justify;
  }
  &:first-of-type {
    margin-right: 1.4rem;
    @media (min-width: $breakpoint-tablet) {
      margin-right: 2rem;
    }
  }
}
:deep(.boite-para__titre) {
  text-align: left;
  word-break: keep-all;
  margin-bottom: 0;
}
#boite-logo {
  position: relative;
  width: 66%;
  height: auto;
  min-height: 48vh;
  background: url('/img/forme-flou.svg') no-repeat center;
  background-size: 100%;
  // background: url('/img/forme-flou.svg') no-repeat center,
  //   url('/img/forme.svg') no-repeat center;
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
    background: url('/img/forme.svg') no-repeat center;
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
    position: fixed;
    //top: 33%;
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
  @media (max-width: $breakpoint-tablet) {
    margin-top: 0;
  }
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

// CTAs Hero
.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  position: relative;
  z-index: 3;

  @media (max-width: $breakpoint-tablet) {
    flex-direction: column;
    gap: 0.8rem;
  }
}

.hero-cta {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.75rem 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;

  span {
    position: relative;
    z-index: 1;
    transition: 0.3s;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &--primary {
    color: $vert;
    background: transparent;

    &::before {
      background: $vert;
    }

    &:hover {
      color: darken($vert, 10%);

      &::before {
        width: 80%;
      }

      span::after {
        content: ' →';
        margin-left: 0.3rem;
      }
    }
  }

  &--secondary {
    color: $bleu2;
    background: transparent;

    &::before {
      background: $bleu2;
    }

    &:hover {
      color: darken($bleu2, 10%);

      &::before {
        width: 80%;
      }
    }
  }
}

.scroll-indicator {
  width: 40px;
  margin: 2.5rem auto 0;
  animation: bounce 2s infinite;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  border: none;
  background: transparent;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: auto;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
