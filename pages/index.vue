<template>
  <div class="container">
    <div class="container__tabs">
      <h1>START GAME</h1>
      <NuxtLink
        v-for="game in games"
        :key="game.path"
        :to="game.path"
        class="button-link"
      >
        {{ game.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

const games = [
  { name: "가위바위보", path: "/rockPaperScissors" },
  { name: "빙고", path: "/bingo" },
  { name: "숫자 맞추기", path: "/numberGuess" },
];
</script>

<style lang="scss" scoped>
.container {
  @include flex-center;
  height: 100vh;

  &__tabs {
    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: center;
      color: $color-primary-400;
    }
    .button-link {
      display: block;
      border: 1px solid $color-primary-400;
      padding: 0.7rem 1rem;
      border-radius: 7rem;
      margin: 0.5rem;
      width: 300px;
      color: $color-primary-400;
      text-decoration: none;
      text-align: center;

      &:hover {
        cursor: pointer;
        background-color: $color-primary-400;
        color: $color-white-000;
      }
    }
  }
}
</style>
