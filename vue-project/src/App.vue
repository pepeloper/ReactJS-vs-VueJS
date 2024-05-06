<script setup>
import { ref, computed } from 'vue'

const totalAmount = ref(0)
const numberOfPeople = ref(1)

const toPay = computed(() => {
  if (totalAmount.value <= 0 || numberOfPeople <= 0) {
    return null
  }

  return (totalAmount.value / numberOfPeople.value).toFixed(2)
})
</script>

<template>
  <main class="mx-auto container mt-24 flex flex-col gap-y-5">
    <div class="flex flex-col">
      <label for="totalAmount">Importe total</label>
      <input type="number" id="totalAmount" v-model="totalAmount" class="border px-2 py-3">
    </div>
    <div class="flex flex-col">
      <label for="numberOfPeople">Número de personas</label>
      <input type="number" id="numberOfPeople" v-model="numberOfPeople" class="border px-2 py-3">
    </div>
    <div v-if="toPay">
      A pagar por persona <span>{{ toPay }} €</span>
    </div>
  </main>
</template>