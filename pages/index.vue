<template>
  <div class="container">
    <ul>
      <li><NuxtLink to="/rockPaperScissors">가위바위보</NuxtLink></li>
      <li><NuxtLink to="/tic-tac-toe">카드 맞추기</NuxtLink></li>
      <li><NuxtLink to="/guess-number">끝말잊기</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  height: 100vh;
}
</style>
