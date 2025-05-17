<template>
  <div class="container">
    <div class="container__game__info">
      <h1>숫자 맞추기 게임</h1>
      <p>1-100 사이의 숫자를 맞춰보세요!</p>
    </div>
    <div class="container__life-count">남은 도전횟수: {{ remainingTries }}</div>

    <span class="container__input-section">
      <input
        class="container__input-section__input"
        v-model.number="userGuess"
        @input="validateInput"
        @keypress="preventNonNumeric"
        :min="1"
        :max="100"
        placeholder="1-100 사이 숫자"
      />
      <button @click="checkGuess">확인</button>
    </span>

    <div class="container__hint-section">
      <p v-if="hint" :class="hintClass">{{ hint }}</p>
    </div>

    <span class="container__common-buttons">
      <button @click="goBack">뒤로가기</button>
      <button @click="resetGame">다시하기</button>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// 게임 상태 변수
const targetNumber = ref(0);
const userGuess = ref<number | null>(null);
const hint = ref("");
const remainingTries = ref(10);
const gameOver = ref(false);

const hintClass = computed(() => {
  if (hint.value.includes("정답")) return "success";
  if (hint.value.includes("높")) return "high";
  if (hint.value.includes("낮")) return "low";
  return "";
});

function initGame() {
  targetNumber.value = Math.floor(Math.random() * 100) + 1;
  userGuess.value = null;
  hint.value = "";
  remainingTries.value = 10;
  gameOver.value = false;
}

initGame();

function checkGuess() {
  if (gameOver.value || userGuess.value === null) return;

  remainingTries.value--;

  if (userGuess.value === targetNumber.value) {
    gameOver.value = true;
    setTimeout(() => {
      alert(`정답입니다! \n정답은 ${targetNumber.value}입니다.🎉`);
    }, 0);
  } else if (remainingTries.value === 0) {
    gameOver.value = true;
    setTimeout(() => {
      alert(`게임 오버... \n정답은 ${targetNumber.value}입니다.😅`);
    }, 0);
  } else if (userGuess.value > targetNumber.value) {
    setTimeout(() => {
      alert("정답보다 높습니다. \n더 낮은 숫자를 입력하세요.📈");
    }, 0);
  } else {
    setTimeout(() => {
      alert("정답보다 낮습니다. \n더 높은 숫자를 입력하세요.📉");
    }, 0);
  }
}

const goBack = () => {
  navigateTo("/");
};

function resetGame() {
  initGame();
}

const validateInput = () => {
  if (userGuess.value !== null) {
    if (userGuess.value < 1) userGuess.value = 1;
    if (userGuess.value > 100) userGuess.value = 100;
  }
};

const preventNonNumeric = (event: KeyboardEvent) => {
  const char = event.key;
  const isNumber = /^[0-9]$/.test(char);

  if (!isNumber && char !== "Backspace" && char !== "Delete") {
    event.preventDefault();
  }
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

  &__life-count {
    margin-top: 1rem;
    color: $color-primary-400;
  }

  &__input-section {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    &__input {
      width: 180px;
      height: 30px;
      padding: 0.5rem;
      border: 1px solid $color-primary-400;
      border-radius: 10px;
    }

    button {
      cursor: pointer;
      background-color: $color-primary-400;
      color: $color-white-000;
      border: 1px solid $color-primary-400;
      border-radius: 10px;
      padding: 0.1rem 0.5rem;
    }
  }

  &__common-buttons {
    @include common-buttons;

    button {
      @include common-button;
    }
  }
}
</style>
