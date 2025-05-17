<template>
  <div class="container">
    <div class="container__game__info">
      <h1>빙고 게임</h1>
      <p>상대보다 먼저 빙고를 완성해보세요!</p>
    </div>
    <div class="container__board">
      <button
        v-for="(cell, index) in board"
        :key="index"
        @click="handleClick(index)"
        class="cell"
      >
        {{ cell }}
      </button>
    </div>
    <span class="container__common-buttons">
      <button @click="goBack">뒤로가기</button>
      <button @click="resetGame">다시하기</button>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const board = ref(Array(9).fill(""));
const currentPlayer = ref("X");

const winner = computed(() => checkWinner(board.value));
const isDraw = computed(
  () => board.value.every((cell) => cell) && !winner.value
);

function handleClick(index: number) {
  if (board.value[index] || winner.value) return;
  board.value[index] = currentPlayer.value;
  currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";

  if (winner.value) {
    setTimeout(() => {
      alert(`${winner.value}가 승리했습니다!🏆`);
    }, 0);
  } else if (isDraw.value) {
    setTimeout(() => {
      alert("무승부입니다.😅");
    }, 0);
  }
}

function checkWinner(board: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const goBack = () => {
  navigateTo("/");
};

function resetGame() {
  board.value = Array(9).fill("");
  currentPlayer.value = "X";
}
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

  &__board {
    display: grid;
    grid-template-columns: repeat(3, 90px);
    grid-gap: 1px;
    margin-top: 1rem;

    .cell {
      width: 90px;
      height: 90px;
      font-size: 2rem;
      border: 2px solid $color-primary-400;
      border-radius: 3px;
      color: $color-primary-400;
      cursor: pointer;
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
