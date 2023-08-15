<template>
  <nav class="print:hidden">
    <!-- Covers everything, which is not root "/" and not "/blog" -->
    <span
      v-show="
        $route.fullPath?.length > 1 && !$route.fullPath?.match('/blog/.+')
      "
    >
      <NuxtLink
        to="/"
        class="ml-3 text-xl transition duration-500 hover:duration-500 hover:text-cyan-700 dark:hover:text-cyan-700"
        ><Icon name="material-symbols:arrow-left-alt" />Home</NuxtLink
      >
    </span>

    <!-- Covers everything, which is not root "/" -->
    <span v-show="$route.fullPath?.match('/blog/.+')">
      <NuxtLink
        to="/blog"
        class="ml-3 text-xl transition duration-500 hover:duration-500 hover:text-cyan-700 dark:hover:text-cyan-700"
        ><Icon name="material-symbols:arrow-left-alt" />Blog</NuxtLink
      >
    </span>

    <ColorModeSwitch
      class="dark:text-primary-100 transition duration-500 hover:duration-500 hover:text-cyan-700 dark:hover:text-cyan-700 absolute right-0 top-0 z-100 mr-10 mt-5 text-xl md:fixed"
    />

    <section
      class="hidden md:grid grid-cols-5 mt-20 justify-items-center gap-6 md:fixed md:grid-cols-1 md:ml-6"
    >
      <NuxtLink class="icon-btn" to="/" title="Home">
        <Icon name="uil:home-alt" />
      </NuxtLink>
      <NuxtLink
        class="icon-btn"
        rel="noreferrer"
        to="https://instagram.com/sb_f.o.t.o.s"
        target="_blank"
        title="Instagram"
      >
        <Icon name="uil:instagram-alt" />
      </NuxtLink>
      <NuxtLink
        class="icon-btn"
        rel="noreferrer"
        to="https://www.linkedin.com/in/stefan-brill-174223282/"
        target="_blank"
        title="LinkedIn"
      >
        <Icon name="uil:linkedin-alt" />
      </NuxtLink>
      <NuxtLink class="icon-btn" title="Mein Blog" to="/blog">
        <Icon name="carbon:pen" />
      </NuxtLink>
      <NuxtLink class="icon-btn" title="Über mich" to="/about">
        <Icon name="carbon:id-management" />
      </NuxtLink>
      <NuxtLink class="icon-btn" to="/cv" title="Mein Lebenslauf">
        <Icon name="pepicons-pop:cv" />
      </NuxtLink>
    </section>
  </nav>
</template>

<style scoped>
.icon-btn {
  @apply cursor-pointer transition duration-500 hover:duration-500 hover:text-cyan-700 dark:hover:text-cyan-700;
}
</style>
