<script setup lang="ts">
import me from "~/assets/me.webp";

useHead({
  title: "CV / Resume",
  meta: [{ name: "description", content: "CV or resume of Stefan Brill" }],
});
</script>

<template>
  <div class="flex flex-col mx-auto md:flex-row md:w-5/6">
    <div class="md:w-1/3 p-2 text-center print:hidden">
      <img
        :src="me"
        alt="Stefan Brill"
        title="Stefan Brill"
        class="rounded-2xl m-3 p-4"
      />
      <span class="font-semibold text-xl text-cyan-500">
        Stefan Brill
        <br />* 28.05.1984
      </span>
    </div>
    <div class="hidden print:block">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <h1 class="text-3xl text-cyan-500 mb-4">Stefan Brill</h1>
          <div
            class="flex flex-col bg-cyan-500 mt-2 pt-6 pl-6 pb-6 pr-10 rounded-md text-gray-300"
          >
            <div class="p-1">
              <Icon name="fa6-solid:location-dot" class="mr-1" />
              <span>Richardstraße, 22415 Hamburg</span>
            </div>
            <span class="p-1">
              <Icon name="fa-solid:baby" class="mr-1" />
              born 28.05.1984 in Greißwald
            </span>
            <span class="p-1">
              <Icon name="fa-solid:paper-plane" class="mr-1" />
              <a href="mailto:herr.brill@web.de"> herr.brill@web.de </a>
            </span>
            <span class="p-1">
              <Icon name="fa:phone" class="mr-1" />
            </span>
            <span class="p-1">
              <Icon name="material-symbols:house-outline" class="mr-1" />
              <a href="https://stefanbrill.github.io">
                https://stefanbrill.github.io
              </a>
            </span>
          </div>
        </div>
        <div class="w-1/3">
          <img
            :src="me"
            alt="Stefan Brill"
            title="Stefan Brill"
            class="rounded m-3"
          />
        </div>
      </div>
    </div>
    <div class="md:w-2/3 p-2 mt-2">
      <ProfessionalBackground />
      <Education />
      <SpecialSkills />
      <TrainingsCertificates />
    </div>
  </div>
</template>
