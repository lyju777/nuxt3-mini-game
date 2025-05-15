<template>
  <div class="container">
    <div class="container__buttons">
      <button @click="onUserSelect('가위')">가위</button>
      <button @click="onUserSelect('바위')">바위</button>
      <button @click="onUserSelect('보')">보</button>
    </div>
    <div>컴퓨터 선택: {{ computerChoice }}</div>
    <div>결과: {{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userChoice = ref("");
const computerChoice = ref("");
const result = ref("");

const generateComputerChoice = () => {
  const options = ref(["가위", "바위", "보"]);
  const randomIndex = Math.floor(Math.random() * options.value.length);
  computerChoice.value = options.value[randomIndex];
};

const determineWinner = (user: string, computer: string) => {
  if (user === computer) return "비겼습니다!";
  if (
    (user === "가위" && computer === "보") ||
    (user === "바위" && computer === "가위") ||
    (user === "보" && computer === "바위")
  )
    return "사용자 승리!";
  return "컴퓨터 승리!";
};

const onUserSelect = (choice: string) => {
  userChoice.value = choice;
  generateComputerChoice();
  result.value = determineWinner(userChoice.value, computerChoice.value);
};
</script>

<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  height: 100vh;

  &__buttons {
    button {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid $color-gray-100;

      &:hover {
        cursor: pointer;
        background-color: $color-gray-500;
        color: $color-white-000;
      }
    }
  }
}
</style>
