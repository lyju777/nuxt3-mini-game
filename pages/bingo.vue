<template>
  <div class="container">
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
    <button class="container__reset" @click="resetGame">다시하기</button>
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

function resetGame() {
  board.value = Array(9).fill("");
  currentPlayer.value = "X";
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;

  &__board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 2px;

    .cell {
      width: 100px;
      height: 100px;
      font-size: 2rem;
      border: 2px solid $color-primary-400;
      background-color: #f0f0f000;
      color: $color-primary-400;
      cursor: pointer;
    }
  }

  &__reset {
    margin-top: 20px;
    width: 100px;
    height: 50px;
    font-size: 1rem;
    border: 2px solid $color-primary-400;
    background-color: $color-primary-400;
    color: $color-white-000;
    border-radius: 30px;
    cursor: pointer;
  }
}
</style>
