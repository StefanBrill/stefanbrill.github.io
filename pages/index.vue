<script setup lang="ts">
useHead({
  title: null,
  meta: [
    {
      name: "description",
      content:
        "Profile of Stefan Brill including quotes, about me, blog and tech stack",
    },
  ],
});
import type { UseIntersectionObserverReturn } from "@vueuse/core";
import { useIntersectionObserver } from "@vueuse/core";
import me from "~/assets/me.webp";

const findMe = ref<HTMLInputElement | null>(null);
const findMeContent = ref<HTMLInputElement | null>(null);
const blogSection = ref<HTMLInputElement | null>(null);
const aboutMeSection = ref<HTMLInputElement | null>(null);

function scrollToAboutMeSection(e: Event) {
  e.preventDefault();
  aboutMeSection?.value?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
  return false;
}

const findMeObserver: UseIntersectionObserverReturn = useIntersectionObserver(
  findMe,
  (entries: IntersectionObserverEntry[]) => {
    if (entries.some((entry) => entry.isIntersecting))
      findMe?.value?.classList?.add("show");
    else findMe?.value?.classList?.remove("show");
  }
);

const findMeContentObserver: UseIntersectionObserverReturn =
  useIntersectionObserver(
    findMeContent,
    (entries: IntersectionObserverEntry[]) => {
      if (entries.some((entry) => entry.isIntersecting))
        findMeContent?.value?.classList?.add("show");
      else findMeContent?.value?.classList?.remove("show");
    }
  );

onUnmounted(() => {
  findMeObserver.stop();
  findMeContentObserver.stop();
});

useFadeIn(() => Array.from(document.getElementsByClassName("fadeSection")));
</script>

<template>
  <div class="flex flex-col snap-y snap-mandatory">
    <section class="snap-center snap-always">
      <section
        class="mt-12 md:mt-0 flex flex-grow flex-row select-none justify-center text-8xl font-mono"
      >
        <span class="tracking-wider">Moin</span
        ><Icon name="mdi:hand-wave" class="ml-3" />
      </section>
      <section
        class="mt-20 flex flex-col select-none justify-center md:flex-row"
      >
        <span class="text-2xl m-3 md:w-1/3 md:mt-10 md:text-left fadeSection">
          <div class="m-auto">
            <p>
              Mit meiner Linse enthülle ich die Seele der Stadt und die Essenz
              von Menschen.
            </p>
            <p>
              Jeder Augenblick ist ein Kunstwerk, das darauf wartet, eingefangen
              zu werden.
            </p>
            <p>
              Durch meine Linse erfasse ich nicht nur Bilder, sondern die
              Emotionen, Geschichten und Magie, die in jedem Moment stecken.
              Meine Leidenschaft für Fotografie treibt mich dazu an, die Welt
              mit neuen Augen zu sehen und unvergessliche Erinnerungen zu
              schaffen.
            </p>
          </div>
        </span>
        <img
          class="mt-10 h-80 w-80 self-center border-4 rounded-full md:ml-20 md:mt-0"
          :src="me"
          alt="me"
          title="me"
          height="80"
          width="80"
        />
      </section>
      <div
        class="mt-10 flex flex-col items-center justify-center text-3xl md:mt-32"
      >
        <div
          ref="findMe"
          class="flex flex-row select-none text-3xl findMeHidden"
        >
          Find me here <Icon name="carbon:location-heart" class="ml-2" />
        </div>
        <div ref="findMeContent" class="flex flex-row findMeContentsHidden">
          <div
            class="grow grid grid-cols-3 mt-10 gap-y-32 justify-items-center space-x-4"
          >
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
              href="https://www.linkedin.com/in/opensource-simon"
              target="_blank"
              title="LinkedIn"
            >
              <Icon name="uil:linkedin-alt" />
            </NuxtLink>
            <NuxtLink
              class="icon-btn hover:hand"
              title="About Me"
              @click.prevent="scrollToAboutMeSection"
            >
              <Icon name="carbon:id-management" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section
      id="blod"
      ref="blogSection"
      class="mt-32 md:mt-40 flex flex-col snap-center snap-always items-center justify-center text-3xl fadeSection md:mx-10"
    >
      <div class="mb-10 flex flex-row">
        Neuste Blog-Artikel <Icon name="carbon:pen" class="ml-2" />
      </div>
      <div class="md:w-2/3">
        <Top3Tutorials />
      </div>
      <div class="mt-8">
        <NuxtLink
          to="/blog"
          title="All Tutorials"
          class="text-xl border-0 p-2 px-4 transition duration-500 hover:duration-500 bg-cyan-600 hover:bg-cyan-700 rounded-md"
          >Alle Blog-Artikel</NuxtLink
        >
      </div>
    </section>
    <section
      id="about"
      ref="aboutMeSection"
      class="fadeSection mt-20 md:mt-32 flex flex-col snap-center snap-always items-center justify-center"
    >
      <div class="flex flex-row text-3xl">
        Über mich <Icon name="carbon:id-management" class="ml-2" />
      </div>
      <div class="mt-6 flex flex-col items-center justify-center text-center">
        <div
          class="aboutme flex-row border-2 border-opacity-50 rounded-lg bg-opacity-50 p-2 text-xl md:w-2/3"
        >
          <p>
            Herzlich willkommen auf meiner Fotografie-Seite! Mein Name ist
            Stefan Brill, und ich bin leidenschaftlicher Fotograf mit Sitz in
            der wunderschönen Stadt Hamburg.
          </p>
          <NuxtLink
            to="/about"
            title="Über mich"
            class="mr-2 mt-4 flex flex-row justify-end text-2xl icon-btn"
          >
            ... mehr lesen <Icon name="uil:book-reader" class="ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section
      class="mt-20 md:mt-32 flex flex-col snap-center snap-always items-center justify-center text-3xl fadeSection md:mx-10 mb-10"
    >
      <div class="mb-6 flex flex-row">
        Meine Werke <Icon name="carbon:image" class="ml-2" />
      </div>
      <div class="flex flex-row flex-wrap justify-center md:w-2/3">
        <img src="bahn.jpg" title="Bahn" />
        <img src="elbphi.jpg" title="Elbphi" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-btn {
  @apply cursor-pointer transition duration-500 hover:duration-500 hover:text-cyan-700 dark:hover:text-cyan-700;
}
.findMeHidden {
  opacity: 0;
  transition-property: transform, opacity, blur;
  transition-duration: 1s;
  transition-timing-function: linear;
  filter: blur(5px);
  transform: translateX(-100%);
}

.findMeContentsHidden {
  opacity: 0;
  transition-property: transform, opacity, blur;
  transition-duration: 1s;
  transition-timing-function: linear;
  filter: blur(5px);
  transform: translateY(100%);
}

.fadeSection {
  opacity: 0;
  transition-property: transform, opacity, blur;
  transition-duration: 1s;
  transition-timing-function: linear;
  filter: blur(5px);
  transform: translateY(50px);
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: none;
}
</style>
