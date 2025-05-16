<template>
  <header>
    <div class="header__container">
      <span class="header__container__title">
        <img
          class="header__container__title__home"
          @click="returnHome"
          src="@/assets/icon/header_title.png"
        />
        <img
          class="header__container__title__ranking"
          src="@/assets/icon/header_ranking.png"
        />
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

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
  background-color: $color-primary-500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header__container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.2rem;
    padding: 0 1rem;

    &__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      cursor: pointer;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-white-000;
      flex: 1;
      display: flex;
      align-items: center;

      &__home {
        width: 25%;
      }
      &__ranking {
        width: 17%;
      }
    }
  }
}
</style>
