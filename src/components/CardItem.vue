<script setup lang="ts">
import { useCounterStore, useMoneyStore } from '@/stores/counter'
import { ElMessage } from 'element-plus'
const counterStore = useCounterStore()
const moneyStore = useMoneyStore()
const openAlert = () => {
  ElMessage({
    showClose: true,
    message: '餘額不足~可請郭董支援',
    type: 'warning',
  })
}
defineProps<{
  count: number
}>()
let drawCard = (val: number) => {
  if (moneyStore.money - (val * 10) < 0) {
    openAlert()
    return
  }
  counterStore.increment(val)
  moneyStore.decrease(val * 10)
}
</script>
<template>
  <div class="item" @click="drawCard(count)">
    <img src="@/assets/game/card_style.png" alt="">
    <div>{{ count }}抽</div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  transition: .5s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.2);
    transition: .5s;
  }

  div {
    font-size: 24px;
    color: green;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
