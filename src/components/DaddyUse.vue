<script setup lang="ts">
import { useMoneyStore } from '@/stores/counter'
const moneyStore = useMoneyStore()
</script>
<template>
  <div class="daddy">
    <div @click="moneyStore.increment(5000)">郭董支援</div>
  </div>
</template>

<style lang="scss" scoped>
.daddy {
  cursor: pointer;

  div {
    width: 80px;
    height: 80px;
    background-color: black;
    color: #fff;
    position: fixed;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
