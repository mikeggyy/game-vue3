<script setup lang="ts">
import CardItem from '@/components/CardItem.vue'
import DaddyUse from '@/components/DaddyUse.vue'
import { useCounterStore } from '@/stores/counter'
import { useMoneyStore } from '@/stores/counter'
const counterStore = useCounterStore()
const moneyStore = useMoneyStore()
</script>
<template>
  <div class="game">
    <div class="title">
      抽卡模擬
    </div>
    <div class="content">
      <div>抽卡次數:{{ counterStore.count }}</div>
      <div>金額:{{ moneyStore.money }}</div>
    </div>
    <div class="zone__cardItem">
      <CardItem :count="1"></CardItem>
      <CardItem :count="3"></CardItem>
      <CardItem :count="10"></CardItem>
    </div>
    <DaddyUse></DaddyUse>
  </div>
</template>

<style lang="scss" scoped>
.game {
  position: relative;
}

.title {
  font-size: 36px;
  text-align: center;
}

.zone__cardItem {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
}

.result {

  .box__img {
    width: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>
