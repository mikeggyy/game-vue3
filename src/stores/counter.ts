import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment(val: number) {
    count.value = count.value + val
  }

  return { count, doubleCount, increment }
})
export const useMoneyStore = defineStore('money', () => {
  const money = ref(500)
  function increment(val: number) {
    money.value = money.value + val
  }
  function decrease(val: number) {
    money.value = money.value - val
  }

  return { money, decrease, increment }
})