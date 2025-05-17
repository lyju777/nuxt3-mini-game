<template>
  <div class="container">
    <div class="container__game__info">
        <h1>가위바위보 게임</h1>
        <p>컴퓨터에게 몇번 이길 수 있을까요?</p>
      </div>
      <div class="container__winCount">이긴 횟수: {{ winCount }}</div>
    <div class="container__buttons">
      <img src="../assets/icon/scissors.png" @click="onUserSelect('가위')"></img>
      <img src="../assets/icon/rock.png" @click="onUserSelect('바위')"></img>
      <img src="../assets/icon/paper.png" @click="onUserSelect('보')"></img>
    </div>
    <span class="container__common-buttons">
      <button @click="goBack">뒤로가기</button>
      <button @click="resetGame">다시하기</button>
    </span>  
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

const goBack = () => {
  navigateTo("/");
};

const resetGame = () => {
  userChoice.value = "";
  computerChoice.value = "";
  result.value = "";
  winCount.value = 0;
};

</script>

<style lang="scss" scoped>
.container {
  @include flex-center;
  @include header-height;

  &__game__info {
    text-align: center;

  h1 {
    color: $color-primary-400;
  }

  }

  &__buttons {
    margin-top: 2rem;
    margin-bottom: 2rem;
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
        opacity: 0.7;
        width: 80px;
      }

      img:hover {
        opacity: 1;
      }
  }

  &__winCount {
    margin-top: 1rem;
    color: $color-primary-400;
  }

  &__common-buttons {
    @include common-buttons;

    button {
      @include common-button;
    }
  }
}
</style>
