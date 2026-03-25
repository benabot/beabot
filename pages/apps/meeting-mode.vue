<template>
  <main class="app-detail">
    <section class="app-hero">
      <div class="app-hero__copy">
        <p class="app-kicker">{{ meetingModeContent.platform }}</p>
        <h1>{{ meetingModeContent.heroTitle }}</h1>
        <p class="app-hero__lead">{{ meetingModeContent.heroLead }}</p>
        <p class="app-hero__description">
          {{ meetingModeContent.heroDescription }}
        </p>
        <div class="app-hero__actions">
          <AppLink
            :to="meetingModeContent.cta.to"
            class="app-btn app-btn--primary"
          >
            {{ meetingModeContent.cta.label }}
          </AppLink>
          <AppLink to="/apps/" class="app-btn app-btn--secondary">
            Retour aux apps
          </AppLink>
        </div>
      </div>

      <div class="app-preview app-preview--placeholder">
        <div
          class="app-preview__placeholder"
          role="img"
          :aria-label="meetingModeContent.preview.alt"
        >
          <span>{{ meetingModeContent.platform }}</span>
          <strong>{{ meetingModeContent.name }}</strong>
          <small>{{ meetingModeContent.preview.label }}</small>
        </div>
      </div>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-section" aria-labelledby="meeting-problem-title">
      <h2 id="meeting-problem-title">Le problème</h2>
      <p v-for="paragraph in meetingModeContent.problem" :key="paragraph">
        {{ paragraph }}
      </p>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-section" aria-labelledby="meeting-features-title">
      <h2 id="meeting-features-title">Ce que l’app fait</h2>
      <ul class="app-list">
        <li v-for="item in meetingModeContent.whatItDoes" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-section" aria-labelledby="meeting-practice-title">
      <h2 id="meeting-practice-title">En pratique</h2>
      <ol class="app-list app-list--ordered">
        <li v-for="item in meetingModeContent.inPractice" :key="item">
          {{ item }}
        </li>
      </ol>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-section" aria-labelledby="meeting-limits-title">
      <h2 id="meeting-limits-title">Ce que l’app ne promet pas</h2>
      <ul class="app-list">
        <li v-for="item in meetingModeContent.limits" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-section" aria-labelledby="meeting-price-title">
      <h2 id="meeting-price-title">Prix</h2>
      <p v-for="paragraph in meetingModeContent.pricing" :key="paragraph">
        {{ paragraph }}
      </p>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-section" aria-labelledby="meeting-faq-title">
      <h2 id="meeting-faq-title">FAQ</h2>
      <AppFaqList :items="meetingModeContent.faq" />
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section
      class="app-section app-section--wide"
      aria-labelledby="meeting-privacy-title"
    >
      <h2 id="meeting-privacy-title">Politique de confidentialité</h2>
      <AppPrivacyPolicy :policy="meetingModeContent.privacy" />
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section class="app-cta" aria-labelledby="meeting-cta-title">
      <div class="app-cta__panel">
        <h2 id="meeting-cta-title">Être informé de la sortie de l'app</h2>
        <p>{{ meetingModeContent.cta.note }}</p>
        <AppReleaseInterestForm :app-name="meetingModeContent.name" />
        <div class="app-cta__actions">
          <AppLink
            :to="meetingModeContent.cta.to"
            class="app-btn app-btn--primary"
          >
            Me contacter
          </AppLink>
          <AppLink to="/apps/" class="app-btn app-btn--secondary">
            Retour à la page Apps
          </AppLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { meetingModeContent } from '~/data/apps'
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps/meeting-mode')

useSeoMeta({
  title: meetingModeContent.seo.title,
  description: meetingModeContent.seo.description,
  ogTitle: meetingModeContent.seo.title,
  ogDescription: meetingModeContent.seo.description,
  ogType: 'website',
  ogUrl: pageUrl,
  twitterTitle: meetingModeContent.seo.title,
  twitterDescription: meetingModeContent.seo.description,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
  ],
})
</script>

<style lang="scss" scoped>
.app-detail {
  --detail-space-1: 0.9rem;
  --detail-space-2: 1.4rem;
  --detail-space-3: 2.1rem;
  --detail-space-4: 3.2rem;
  padding: clamp(4.5rem, 8vw, 6rem) 5% 6rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.app-hero {
  display: grid;
  gap: 2rem;
  align-items: center;
  width: min(100%, 1120px);
  margin: 0 auto;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 3rem;
  }
}

.app-hero__copy {
  max-width: 38rem;
}

.app-kicker {
  margin: 0 0 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $gris3;
}

.app-hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 5.5vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.03em;
  color: $gris1;
}

.app-hero__lead {
  margin: 1rem 0 0;
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  font-weight: 700;
  line-height: 1.6;
  color: $gris2;
}

.app-hero__description {
  margin: 1rem 0 0;
  color: $gris3;
  line-height: 1.75;
}

.app-hero__actions,
.app-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  font-weight: 700;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease,
    opacity 0.14s ease;
}

.app-btn--primary {
  background: $vert;
  color: white;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(13, 199, 99, 0.18);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(13, 199, 99, 0.18);
  }
}

.app-btn--secondary {
  color: $bleu2;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    opacity: 0.72;
  }

  &:focus-visible {
    outline: 2px solid $bleu2;
    outline-offset: 4px;
    border-radius: 999px;
  }
}

.app-preview {
  border-radius: 1.6rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.94),
    rgba(244, 247, 251, 0.98)
  );
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  min-height: 24rem;
}

.app-preview--placeholder {
  background:
    linear-gradient(135deg, rgba(4, 57, 217, 0.08), rgba(13, 199, 99, 0.08)),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.94),
      rgba(244, 247, 251, 0.98)
    );
}

.app-preview__placeholder {
  min-height: 24rem;
  padding: 2rem;
  display: grid;
  align-content: center;
  gap: 0.8rem;

  span {
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $bleu2;
  }

  strong {
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 0.96;
    color: $gris1;
  }

  small {
    font-size: 0.95rem;
    color: $gris3;
  }
}

.app-section,
.app-cta {
  width: min(100%, 820px);
  margin: 0 auto;
}

.app-section--wide {
  width: min(100%, 1080px);
}

.app-section h2,
.app-cta h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.55rem, 3vw, 2.2rem);
  line-height: 1.03;
  color: $gris1;
}

.app-section p {
  margin: 0;
  color: $gris2;
  line-height: 1.75;
}

.app-section p + p {
  margin-top: 1rem;
}

.app-list {
  margin: 0;
  padding-left: 1.2rem;
  color: $gris2;
  line-height: 1.75;
}

.app-list li + li {
  margin-top: 0.8rem;
}

.app-list--ordered {
  padding-left: 1.35rem;
}

.app-cta__panel {
  padding: clamp(1.5rem, 4vw, 2.2rem);
  border-radius: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(246, 248, 250, 0.9)
  );
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.app-cta__panel p {
  margin: 0;
  color: $gris2;
  line-height: 1.75;
}

.app-cta__panel :deep(.release-form) {
  margin-top: 1.2rem;
}

.timeline-dot {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.1rem 0;
  position: relative;
}

.timeline-dot::before,
.timeline-dot::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 1px;
  height: 1.4rem;
  background: linear-gradient(
    180deg,
    rgba(4, 57, 217, 0.08),
    rgba(13, 199, 99, 0.3)
  );
  transform: translateX(-50%);
}

.timeline-dot::before {
  top: 0;
}

.timeline-dot::after {
  bottom: 0;
}

.timeline-dot__core {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: $vert;
  box-shadow: 0 0 0 0.45rem rgba(13, 199, 99, 0.13);
}

@media (prefers-reduced-motion: reduce) {
  .app-btn {
    transition: none;
  }
}
</style>
