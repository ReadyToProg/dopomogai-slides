<template>
  <div class="relative group cursor-pointer">
    <video 
      ref="video"
      class="w-full rounded-xl" 
      playsinline
      @ended="handleVideoEnd"
    >
      <source :src="videoSrc" type="video/mp4">
    </video>
    
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
import { ref, onMounted } from 'vue'

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