<template>
  <section class="container legal-page">
    <h1>Legal notice</h1>
    <p class="intro">
      This page provides a concise English version of the legal information published on beabot.fr.
    </p>

    <h2>Website Information</h2>
    <p>
      Website: <a href="https://beabot.fr/">https://beabot.fr/</a>
    </p>

    <h2>Publisher</h2>
    <p>
      <strong>Owner / Publisher</strong>: Benoit Abot<br />
      60320 Saint-Sauveur (France)<br />
      <strong>SIRET</strong>: 82332050200029<br />
      <strong>Email</strong>: hello@beabot.fr
    </p>

    <h2>Hosting Provider</h2>
    <p>
      Netlify, Inc.<br />
      2325 3rd Street, Suite 296<br />
      San Francisco, California 94107, USA
    </p>

    <h2>Intellectual Property</h2>
    <p>
      Unless otherwise stated, website content (texts, visuals, graphics, and related elements)
      is protected by intellectual property rights. Any reproduction or reuse requires prior authorization.
    </p>

    <h2>Personal Data and Forms</h2>
    <p>
      Data submitted through the contact form (name, email address, message) is used only to reply
      to your request. It is not used for commercial prospecting and is not sold to third parties.
      Data submitted through the DuoSpend idea form (idea, optional usefulness details, and optional
      email address) is used only to review the suggestion and, when an address is provided, to reply.
      These forms are processed by Netlify as part of the website hosting service. The data is not used
      for newsletters or commercial prospecting, is not sold to third parties, and is retained only for
      the limited time necessary to process the request or suggestion.
    </p>

    <h2>Contact</h2>
    <p>
      For legal or privacy-related questions, please use the contact form:
      <AppLink to="/en/contact/">/en/contact/</AppLink>
    </p>

    <p class="reference-note">
      This English version is provided for convenience. The French version remains the reference version.
    </p>
  </section>
</template>

<script setup>
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const englishCanonicalUrl = canonicalUrl(config.public.siteUrl, '/en/legal')
const frenchCanonicalUrl = canonicalUrl(config.public.siteUrl, '/mentions-legales')

useHead({
  title: 'Legal notice',
  titleTemplate: '%s | BeAbot',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: englishCanonicalUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: frenchCanonicalUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: englishCanonicalUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: frenchCanonicalUrl,
    },
  ],
})

useSeoMeta({
  description:
    'Legal notice for beabot.fr: publisher, hosting provider, intellectual property, personal data, and contact details.',
  ogTitle: 'Legal notice — BeAbot',
  ogDescription:
    'English legal notice for beabot.fr with publisher information, hosting details, personal data usage, and contact.',
  ogUrl: englishCanonicalUrl,
  ogImage: `${config.public.siteUrl}/beabot.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Legal notice — BeAbot',
  twitterDescription:
    'English legal notice for beabot.fr: publisher, hosting provider, personal data and contact.',
  twitterImage: `${config.public.siteUrl}/beabot.png`,
})
</script>

<style scoped lang="scss">
.legal-page {
  text-align: left;
  padding-top: clamp(2.5rem, 5vw, 4rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

h2 {
  margin-top: 2rem;
}

p {
  margin-bottom: 0.85rem;
}

.intro,
.reference-note {
  text-align: center;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
}

.reference-note {
  margin-top: 2rem;
  font-weight: 600;
}
</style>
