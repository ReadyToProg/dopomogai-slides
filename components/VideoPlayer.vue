<template>
  <div class="relative group cursor-pointer">
    <video 
      ref="video"
      class="w-full rounded-xl" 
      playsinline
      @ended="handleVideoEnd"
      :src="videoUrl"
      preload="metadata"
      controls
    ></video>
    
    <div 
      v-if="!isPlaying"
      @click.stop="playVideo"
      class="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center group-hover:bg-black/30 transition-all"
    >
      <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['videoPlayed'])

const video = ref(null)
const isPlaying = ref(false)
const hasBeenPlayed = ref(false)

const videoUrl = computed(() => {
  // Перевіряємо чи це пряме посилання на відео файл
  if (props.videoSrc.match(/\.(mp4|webm|ogg)$/i)) {
    return props.videoSrc
  }
  
  // Якщо це YouTube
  if (props.videoSrc.includes('youtube.com') || props.videoSrc.includes('youtu.be')) {
    const videoId = props.videoSrc.split('v=')[1] || props.videoSrc.split('/').pop()
    // Використовуємо проксі-сервіс або API для отримання прямого посилання
    return `https://your-proxy-service.com/youtube/${videoId}`
  }
  
  // Якщо це Vimeo
  if (props.videoSrc.includes('vimeo.com')) {
    const videoId = props.videoSrc.split('/').pop()
    // Використовуємо Vimeo API для отримання прямого посилання
    return `https://your-proxy-service.com/vimeo/${videoId}`
  }
  
  return props.videoSrc
})

const playVideo = () => {
  if (video.value) {
    video.value.play()
    isPlaying.value = true
    if (!hasBeenPlayed.value) {
      hasBeenPlayed.value = true
      emit('videoPlayed')
    }
  }
}

const handleVideoEnd = () => {
  isPlaying.value = false
}

onMounted(() => {
  if (video.value) {
    video.value.addEventListener('pause', () => {
      isPlaying.value = false
    })
  }
})
</script>