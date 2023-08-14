<script setup lang="ts">
useHead({
  title: "Contact",
});
</script>

<template>
  <div class="container flex flex-col md:justify-between mx-auto mb-10">
    <h1 class="text-xl">Contact</h1>
    <p class="mt-2">
      Hey,
      <br />
      you can reach out to me via email (
      <a class="text-cyan-500" href="mailto:herr.brill@web.de">
        opensource.simonⓐⓣgmail.com
      </a>
      ) or on social media like
      <a class="text-cyan-500" href="https://twitter.com/stefanbrill">
        twitter.com/stefanbrill
      </a>
      .
    </p>
    <p>
      In regards of the blog also feel free to open issues in this GitHub
      repository:
      <a
        class="text-cyan-500"
        href="https://github.com/stefanbrill/stefanbrill.github.io/issues"
      >
        https://github.com/stefanbrill/stefanbrill.github.io/issues
      </a>
    </p>
    <p>I am really happy to receive feedback about my content.</p>
    <div class="md:h-96"></div>
  </div>
</template>

<style scoped>
p {
  @apply mt-6;
}

h1 {
  @apply text-3xl;
}
</style>
