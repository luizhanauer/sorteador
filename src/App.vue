<template>
  <main class="min-h-screen bg-gray-900 py-12 px-4 flex flex-col items-center">
    
    <div class="w-full max-w-lg bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 space-y-8">
      
      <header class="text-center space-y-2">
        <h1 class="text-3xl font-bold text-white tracking-tight">Sorteador de Números</h1>
        <p class="text-gray-400">Informe o intervalo e a quantidade a sortear</p>
      </header>

      <div class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <label for="initial" class="text-sm font-medium text-gray-300">Número Inicial</label>
            <input 
              id="initial" 
              type="number" 
              v-model.number="initialNumber" 
              class="w-full h-12 px-4 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            >
          </div>
          <div class="space-y-2">
            <label for="final" class="text-sm font-medium text-gray-300">Número Final</label>
            <input 
              id="final" 
              type="number" 
              v-model.number="finalNumber" 
              class="w-full h-12 px-4 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            >
          </div>
        </div>

        <div class="space-y-2">
          <label for="quantity" class="text-sm font-medium text-gray-300">Quantidade de Números</label>
          <input 
            id="quantity" 
            type="number" 
            v-model.number="quantity" 
            class="w-full h-12 px-4 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
          >
        </div>

        <div v-show="errorMessage" class="p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {{ errorMessage }}
        </div>

        <button 
          @click="handleDraw" 
          class="w-full h-12 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <span>Sortear</span>
        </button>

        <RaffleResults :numbers="drawnNumbers" />

      </div>
    </div>

    <SiteFooter />

  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RaffleRange } from './domain/RaffleRange';
import { RaffleDraw } from './domain/RaffleDraw';
import SiteFooter from './components/SiteFooter.vue';
import RaffleResults from './components/RaffleResults.vue';

const initialNumber = ref(1);
const finalNumber = ref(10);
const quantity = ref(1);
const drawnNumbers = ref<number[]>([]);
const errorMessage = ref('');

const handleDraw = (): void => {
    errorMessage.value = '';
    
    // Limpa a lista antes para forçar a re-execução da animação no Vue
    drawnNumbers.value = [];

    try {
        const range = new RaffleRange(initialNumber.value, finalNumber.value);
        const draw = new RaffleDraw(range, quantity.value);
        
        // Timeout minimo apenas para permitir que o Vue registre o array vazio e ative a animação de entrada
        setTimeout(() => {
            drawnNumbers.value = draw.execute();
        }, 50);

    } catch (error: any) {
        errorMessage.value = error.message;
    }
};
</script>