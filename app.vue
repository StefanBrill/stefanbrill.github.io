<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Stefan Brill` : "Stefan Brill";
  },
});
useServerSeoMeta({
  title: "Stefan Brill",
  ogTitle: "Stefan Brill",
  ogUrl: "https://simonscholz.github.io/",
  description:
    "View the profile and skills of Stefan Brill plus tutorials he has written for you",
  ogDescription:
    "View the profile and skills of Stefan Brill plus tutorials he has written for you",
  twitterCard: "summary_large_image",
  titleTemplate: "%s - Stefan Brill",
  applicationName: "Stefan Brill",
  author: "Stefan Brill",
  creator: "Stefan Brill",
  generator: "Nuxt",
  robots: {
    all: true,
  },
  ogImageType: "image/png",
});
</script>
<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>
