<template>
  <div>
    <v-form>
      <v-container>
        <h1>제출 페이지</h1>

        <h1>{{ $route.params }} 문제 제목</h1>
        <br />
        <v-textarea @keydown.tab="canUseTab"></v-textarea>

        <v-btn class="text-center mr-2 left" @click="gotoResultPage">
          제출
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },

  methods: {
    canUseTab: function () {},
    gotoResultPage: function () {},
  },
};
</script>

<style scoped></style>
