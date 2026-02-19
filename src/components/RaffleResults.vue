<template>
  <div v-if="numbers.length > 0" class="w-full space-y-4 pt-6 border-t border-gray-700 mt-6">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-medium text-gray-300">Números Sorteados:</h2>
      
      <button 
        @click="copyToClipboard" 
        class="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <span v-show="!copySuccess">Copiar Todos</span>
        <span v-show="copySuccess" class="text-green-400">Copiado!</span>
      </button>
    </div>

    <transition-group 
      name="list" 
      tag="div" 
      class="flex flex-wrap gap-4 justify-center"
    >
      <div 
        v-for="(num, index) in numbers" 
        :key="`${num}-${index}`"
        class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-lg border border-purple-400/30 text-2xl font-bold text-white transform transition-transform hover:scale-110"
      >
        {{ num }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    numbers: number[]
}>();

const copySuccess = ref(false);

const copyToClipboard = async (): Promise<void> => {
    if (props.numbers.length === 0) return;

    try {
        const textToCopy = props.numbers.join(', ');
        await navigator.clipboard.writeText(textToCopy);
        
        copySuccess.value = true;
        setTimeout(() => {
            copySuccess.value = false;
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar para a área de transferência', err);
    }
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>