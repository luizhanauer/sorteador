<template>
  <div class="mt-12 flex flex-col items-center text-center space-y-6">
    <div class="space-y-4">
      <p class="text-gray-400 text-sm leading-relaxed">
        Se você gostou do meu trabalho e quer me agradecer,<br> 
        você pode me pagar um café :)
      </p>
      <a 
        href="https://www.paypal.com/donate/?hosted_button_id=SFR785YEYHC4E" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block transition-transform duration-200 hover:scale-105"
      >
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
          alt="Buy Me A Coffee" 
          class="h-12 w-auto rounded-md"
        >
      </a>
    </div>

    <footer class="text-gray-500 text-sm space-y-2 border-t border-gray-800 pt-6 w-full max-w-md">
      <p>Desenvolvido com 💜 por <a href="https://github.com/luizhanauer" target="_blank" class="text-purple-400 hover:text-purple-300 transition-colors">Luiz Hanauer</a></p>
      <p><a href="https://github.com/luizhanauer/proton-manager" target="_blank" class="hover:text-gray-300 transition-colors">Ver código no GitHub</a></p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Componente puramente visual
</script>