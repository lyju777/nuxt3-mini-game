<template>
  <div class="container">
    <div class="container__buttons">
      <img src="../assets/icon/가위-색상변경.png" @click="onUserSelect('가위')"></img>
      <img src="../assets/icon/바위-색상변경.png" @click="onUserSelect('바위')"></img>
      <img src="../assets/icon/보-색상변경.png" @click="onUserSelect('보')"></img>
    </div>
    <div class="container__winCount">이긴횟수: {{ winCount }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userChoice = ref("");
const computerChoice = ref("");
const result = ref("");
const winCount = ref(0);

const generateComputerChoice = () => {
  const options = ref(["가위", "바위", "보"]);
  const randomIndex = Math.floor(Math.random() * options.value.length);
  computerChoice.value = options.value[randomIndex];
};

const determineWinner = (user: string, computer: string) => {
  if (user === computer) return "비겼습니다.😅";
  if (
    (user === "가위" && computer === "보") ||
    (user === "바위" && computer === "가위") ||
    (user === "보" && computer === "바위")
  )
    return "사용자 승리!😎";
  return "컴퓨터 승리!🤖";
};

const onUserSelect = (choice: string) => {
  userChoice.value = choice;
  generateComputerChoice();
  result.value = determineWinner(userChoice.value, computerChoice.value);

  if (result.value === "사용자 승리!😎") {
    winCount.value++;
  }

  if (result.value === "컴퓨터 승리!🤖") {
    winCount.value = 0
  }

  setTimeout(() => {
    alert(`컴퓨터는 ${computerChoice.value}를 선택했습니다. ${result.value}`);
  }, 0);
};

</script>

<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  height: 100vh;

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    button {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid $color-primary-400;

      &:hover {
        cursor: pointer;
        background-color: $color-primary-400;
        color: $color-white-000;
      }
    }
    img {
       cursor: pointer;
        opacity: 0.9;
        width: 12%;
      }

      img:hover {
        opacity: 1;
      }
  }

  &__winCount {
    margin-top: 2rem;
    font-size: 1.25rem;
    color: $color-primary-400;
  }
}
</style>
