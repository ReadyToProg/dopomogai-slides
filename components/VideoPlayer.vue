<template>
  <video 
    :src="fullVideoPath"
    class="w-full h-full object-cover"
    controls
  />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// Отримуємо base URL для правильних шляхів
const baseUrl = import.meta.env.BASE_URL

defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})

// Використовуємо computed для формування повного шляху
const fullVideoPath = computed(() => {
  return `${baseUrl}${props.videoSrc.replace(/^\//, '')}`
})
</script> 