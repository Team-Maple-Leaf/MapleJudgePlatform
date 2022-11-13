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
      <v-img :src="architectureUrl" :aspect-ratio="12 / 5" />
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
          <v-card elevation="0">
            <v-list class="transparent">
              <v-list-item horizontal>
                <v-avatar
                  class="profile"
                  size="90"
                  max-height="90"
                  avatar-border-radius="80%"
                >
                  <a :href="developer.github">
                    <img
                      :src="developer.github + '.png'"
                      width="100"
                      height="100"
                    />
                  </a>
                </v-avatar>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import architectureUrl from "@/assets/mainPageView/sub-screen.png";
import pageUrl from "@/assets/mainPageView/sub-screen.png";
import vueUrl from "@/assets/mainPageView/vuejs-logo.png";
import vercelUrl from "@/assets/mainPageView/vercel-logo.png";
import tsUrl from "@/assets/mainPageView/ts-logo.png";
import pnpmUrl from "@/assets/mainPageView/pnpm-logo.png";
import piniaUrl from "@/assets/mainPageView/pinia-logo.svg";
import nodejsUrl from "@/assets/mainPageView/nodejs-logo.png";
import springbootUrl from "@/assets/mainPageView/spring-boot-logo.png";
import springSecurityUrl from "@/assets/mainPageView/spring-security-logo.png";
import jpaUrl from "@/assets/mainPageView/spring-jpa-logo.png";
import jwtUrl from "@/assets/mainPageView/jwt-logo.png";
import gradleUrl from "@/assets/mainPageView/gradle-logo.png";
import swaggerUrl from "@/assets/mainPageView/swagger-logo.png";
import rustUrl from "@/assets/mainPageView/rust-logo-crab.png";
import mysqlUrl from "@/assets/mainPageView/mysql-logo.png";
import redisUrl from "@/assets/mainPageView/redis-logo.png";
import githubUrl from "@/assets/mainPageView/github-logo.png";
import githubActionsUrl from "@/assets/mainPageView/github-actions-logo.png";
import dockerUrl from "@/assets/mainPageView/docker-logo.png";
import dockerComposeUrl from "@/assets/mainPageView/docker-compose-logo.png";
import teamcityUrl from "@/assets/mainPageView/teamcity-logo.png";

const pages = [
  {
    id: 0,
    src: pageUrl,
    content: "다양한 종류의 알고리즘 문제를 풀어볼 수 있습니다.",
  },
  {
    id: 1,
    src: pageUrl,
    content: "알고리즘 문제를 풀어 정답 여부를 판단할 수 있습니다.",
  },
  {
    id: 2,
    src: pageUrl,
    content: "정답이 아닐 때 정답이 아닌 이유를 보여줍니다.",
  },
  {
    id: 3,
    src: pageUrl,
    content: "개인 계정에서 자신이 풀어본 문제를 확인할 수 있습니다.",
  },
];

const clientImgs = [
  {
    id: 0,
    src: vueUrl,
  },
  {
    id: 1,
    src: vercelUrl,
  },
  {
    id: 2,
    src: tsUrl,
  },
  {
    id: 3,
    src: pnpmUrl,
  },
  {
    id: 4,
    src: piniaUrl,
  },
  {
    id: 5,
    src: nodejsUrl,
  },
];

const serverImgs = [
  {
    id: 0,
    src: springbootUrl,
  },
  {
    id: 1,
    src: springSecurityUrl,
  },
  {
    id: 2,
    src: jpaUrl,
  },
  {
    id: 3,
    src: jwtUrl,
  },
  {
    id: 4,
    src: gradleUrl,
  },
  {
    id: 5,
    src: swaggerUrl,
  },
  {
    id: 6,
    src: rustUrl,
  },
];

const dbImgs = [
  {
    id: 0,
    src: mysqlUrl,
  },
  {
    id: 1,
    src: redisUrl,
  },
];

const infraImgs = [
  {
    id: 0,
    src: githubUrl,
  },
  {
    id: 1,
    src: githubActionsUrl,
  },
  {
    id: 2,
    src: dockerUrl,
  },
  {
    id: 3,
    src: dockerComposeUrl,
  },
  {
    id: 4,
    src: teamcityUrl,
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
