<script setup lang="ts">
useHead({
  title: "About",
  meta: [
    { name: "description", content: "About section describing Stefan Brill" },
  ],
});
</script>

<template>
  <main class="container flex flex-col md:flex-row md:justify-between mx-auto">
    <div
      class="md:p-16 rounded-t-2xl"
    >
      <ContentDoc path="/about" class="md:w-2/3 p-2" />
    </div>
  </main>
</template>
