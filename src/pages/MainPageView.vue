<template>
  <v-container
    fluid
    class="d-flex text-center flex-column justify-space-between"
  >
    <h1>Maple Online Judge</h1>
    <h3>새로운 것을 학습하는 이파리들이 만든 온라인 저지 사이트입니다.</h3>
    <br /><br /><br />
    <v-responsive
      class="align-center text-center mx-auto"
      height="100%"
      width="100%"
    >
      <v-carousel
        hide-delimiters
        hide-delimiter-background
        show-arrows-on-hover
        height="500"
      >
        <v-carousel-item
          v-for="page in pages"
          :key="page.id"
          :src="page.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row class="fill-height ma-1 pa-0" align="end" justify="center">
            <h3>{{ page.content }}</h3>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-responsive>
  </v-container>
  <v-col /><v-col />

  <v-container fluid class="d-flex flex-column justify-space-between">
    <v-responsive class="align-center mx-auto" height="100%" width="100%">
      <h1>Architecture</h1>
      <v-col />
      <v-img src="./mainPageView/architecture.png" :aspect-ratio="12 / 5" />
      <v-col /><v-col />
    </v-responsive>
  </v-container>

  <v-container fluid class="d-flex flex-column">
    <h1>기술 스택</h1>
    <v-col />
    <v-responsive class="align-center mx-auto" height="100%" width="100%">
      <v-col />
      <h3>Frontend</h3>
      <v-row class="techStackCard">
        <v-col v-for="img in clientImgs" :key="img.id" cols="1">
          <v-img :src="img.src" alt="" aspect-ratio="1" />
        </v-col>
      </v-row>
      <v-col /><v-col />
      <h3>Server</h3>
      <v-row>
        <v-col v-for="img in serverImgs" :key="img.id" cols="1">
          <v-img :src="img.src" alt="" aspect-ratio="1" />
        </v-col>
      </v-row>
      <v-col /><v-col />
      <h3>Database</h3>
      <v-row>
        <v-col v-for="img in dbImgs" :key="img.id" cols="1">
          <v-img :src="img.src" alt="" aspect-ratio="1" />
        </v-col>
      </v-row>
      <v-col /><v-col />
      <h3>Infra</h3>
      <v-row>
        <v-col v-for="img in infraImgs" :key="img.id" cols="1">
          <v-img :src="img.src" alt="" aspect-ratio="1" />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-col /><v-col /><v-col /><v-col />

  <v-container fluid class="d-flex flex-column justify-space-between">
    <h1>Developers</h1>
    <v-col />
    <v-responsive class="align-center mx-auto" height="70%" width="70%">
      <v-row class="fill-height align-center">
        <v-col
          cols="12"
          md="2"
          v-for="developer in developers"
          :key="developer.id"
        >
          <v-avatar
            class="profile"
            size="90"
            max-height="90"
            avatar-border-radius="80%"
          >
            <a :href="developer.github">
              <img :src="developer.github + '.png'" width="100" height="100" />
            </a>
          </v-avatar>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
const pages = [
  {
    id: 0,
    src: "./mainPageView/feature-ProblemSetView.png",
    content: "다양한 종류의 알고리즘 문제를 풀어볼 수 있습니다.",
  },
  {
    id: 1,
    src: "./mainPageView/feature-ProblemSubmitView.png",
    content: "여러 종류의 언어로 알고리즘 문제를 풀어볼 수 있습니다.",
  },
  {
    id: 2,
    src: "./mainPageView/feature-ProblemResultView.png",
    content:
      "답의 정답 여부를 판단하며, 정답이 아닐 때 아닌 이유를 보여줍니다.",
  },
];

const clientImgs = [
  {
    id: 0,
    src: "./mainPageView/vuejs-logo.png",
  },
  {
    id: 1,
    src: "./mainPageView/vercel-logo.png",
  },
  {
    id: 2,
    src: "./mainPageView/ts-logo.png",
  },
  {
    id: 3,
    src: "./mainPageView/pnpm-logo.png",
  },
  {
    id: 4,
    src: "./mainPageView/pinia-logo.svg",
  },
  {
    id: 5,
    src: "./mainPageView/nodejs-logo.png",
  },
];

const serverImgs = [
  {
    id: 0,
    src: "./mainPageView/spring-boot-logo.png",
  },
  {
    id: 1,
    src: "./mainPageView/spring-security-logo.png",
  },
  {
    id: 2,
    src: "./mainPageView/spring-jpa-logo.png",
  },
  {
    id: 3,
    src: "./mainPageView/jwt-logo.png",
  },
  {
    id: 4,
    src: "./mainPageView/gradle-logo.png",
  },
  {
    id: 5,
    src: "./mainPageView/swagger-logo.png",
  },
  {
    id: 6,
    src: "./mainPageView/rust-logo.png",
  },
  {
    id: 7,
    src: "./mainPageView/rabbitmq-logo.png",
  },
];

const dbImgs = [
  {
    id: 0,
    src: "./mainPageView/mysql-logo.png",
  },
  {
    id: 1,
    src: "./mainPageView/redis-logo.png",
  },
];

const infraImgs = [
  {
    id: 0,
    src: "./mainPageView/github-logo.png",
  },
  {
    id: 1,
    src: "./mainPageView/github-actions-logo.png",
  },
  {
    id: 2,
    src: "./mainPageView/docker-logo.png",
  },
  {
    id: 3,
    src: "./mainPageView/docker-compose-logo.png",
  },
  {
    id: 4,
    src: "./mainPageView/teamcity-logo.png",
  },
];

const developers = [
  {
    id: 0,
    github: "https://github.com/level120",
  },
  {
    id: 1,
    github: "https://github.com/Supernovaysi",
  },
  {
    id: 2,
    github: "https://github.com/juyonLee00",
  },
  {
    id: 3,
    github: "https://github.com/leedonggyu1848",
  },
  {
    id: 4,
    github: "https://github.com/ur2e",
  },
  {
    id: 5,
    github: "https://github.com/Team-Maple-Leaf",
  },
];
</script>

<style scoped>
.profile {
  margin-left: 5px;
}
</style>
