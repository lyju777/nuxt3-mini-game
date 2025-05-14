<template>
  <div>
    <h1>가위바위보 게임</h1>
    <p>
      선택하세요: <button @click="onUserSelect('가위')">가위</button>
      <button @click="onUserSelect('바위')">바위</button>
      <button @click="onUserSelect('보')">보</button>
    </p>
    <p>컴퓨터 선택: {{ computerChoice }}</p>
    <p>결과: {{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userChoice = ref("");
const computerChoice = ref("");
const result = ref("");

const generateComputerChoice = () => {
  const options = ["가위", "바위", "보"];
  const randomIndex = Math.floor(Math.random() * options.length);
  computerChoice.value = options[randomIndex];
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

<style>
button {
  margin: 5px;
  padding: 10px;
}
</style>
