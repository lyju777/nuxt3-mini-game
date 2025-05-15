<template>
  <div class="game-container">
    <h1>Tic-Tac-Toe</h1>
    <div class="board">
      <button
        v-for="(cell, index) in board"
        :key="index"
        @click="handleClick(index)"
        class="cell"
        :class="{ x: cell === 'X', o: cell === 'O' }"
      >
        {{ cell }}
      </button>
    </div>
    <p v-if="winner">승자: {{ winner }}!</p>
    <p v-if="!winner && isDraw">무승부!</p>
    <button @click="resetGame">재시작</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const board = ref(Array(9).fill("")); // 3x3 배열 초기화
const currentPlayer = ref("X"); // 현재 플레이어

const winner = computed(() => checkWinner(board.value)); // 승자 계산
const isDraw = computed(
  () => board.value.every((cell) => cell) && !winner.value
); // 무승부 체크

function handleClick(index: number) {
  if (board.value[index] || winner.value) return; // 이미 채워지거나 게임 끝나면 무시
  board.value[index] = currentPlayer.value; // 배열 업데이트
  currentPlayer.value = currentPlayer.value === "X" ? "O" : "X"; // 플레이어 전환
}

function checkWinner(board: string[]): string | null {
  const lines = [
    // 승리 조건 (행, 열, 대각선)
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // 행
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // 열
    [0, 4, 8],
    [2, 4, 6], // 대각선
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 승자 반환
    }
  }
  return null; // 무승부 또는 진행 중
}

function resetGame() {
  board.value = Array(9).fill(""); // 보드 초기화
  currentPlayer.value = "X"; // 플레이어 초기화
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  font-size: 2rem;
  border: 1px solid #000;
  background-color: #f0f0f0;
  cursor: pointer;
}

.cell.x {
  color: blue;
} /* X 스타일 */
.cell.o {
  color: red;
} /* O 스타일 */
</style>
