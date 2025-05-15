<template>
  <header>
    <div class="header__container">
      <span>
        <h1 @click="returnHome" class="header__container__title">Nuxtendo</h1>
        <!-- <h1 class="header__container__title">랭킹</h1> -->
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

// 뒤로가기 함수
const returnHome = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  z-index: 999;
  background-color: $color-primary-100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header__container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0 1rem;

    &__title {
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: 600;
      display: inline-block;
      color: $color-white-000;
    }
  }
}
</style>
