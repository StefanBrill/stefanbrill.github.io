<script setup lang="ts">
interface Tool {
  imgSrc: string;
  imgAlt?: string;
  name: string;
}

const tools: Tool[] = [
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    name: "Kotlin",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    name: "Java",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
    name: "Groovy",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    name: "Dart",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    name: "TypeScript",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    name: "JavaScript",
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/SimonScholz/simonscholz/c826feb58203a6eb3be9247f38d48d55c63a7c7e/img/quarkus.svg",
    name: "Quarkus",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    name: "Spring",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    name: "Linux",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    name: "Ubuntu",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    name: "IntelliJ",
  },
  {
    imgSrc: "https://cdn.icon-icons.com/icons2/1381/PNG/512/eclipse_94656.png",
    name: "Eclipse",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "GitHub",
  },
  {
    imgSrc:
      "https://gradle.com/wp-content/themes/fuel/assets/img/branding/gradle-elephant-icon-gradient.svg",
    name: "Gradle",
  },
  {
    imgSrc: "https://www.zeespire.com/assets/images/posts/0013/maven.png",
    name: "Maven",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatling/gatling-plain.svg",
    name: "Gatling",
  },
  {
    imgSrc: "https://api.iconify.design/material-symbols/terminal-rounded.svg",
    name: "Bash",
  },
  {
    imgSrc:
      "https://github.com/SimonScholz/simonscholz/raw/master/img/postman.svg",
    name: "Postman",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    name: "Redis",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    name: "Postgresql",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    imgSrc: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    name: "Kubernetes",
  },
  {
    imgSrc: "https://www.vectorlogo.zone/logos/fluxcdio/fluxcdio-icon.svg",
    name: "GitOps",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    name: "Terraform",
  },
  {
    imgSrc:
      "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    name: "GCP",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    name: "Prometheus",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    name: "Grafana",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    name: "Flutter",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    name: "VueJS",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    name: "GraphQl",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg",
    name: "Gatsby",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "Tailwind CSS",
  },
];
</script>

<template>
  <main
    class="grid grid-cols-2 md:grid-cols-6 place-content-around justify-center gap-3 align-middle"
  >
    <ToolCard
      v-for="(tool, index) in tools"
      :key="index"
      :img-src="tool.imgSrc"
      :img-alt="tool.imgAlt || tool.name"
      class="m-2"
    >
      {{ tool.name }}
    </ToolCard>
  </main>
</template>
