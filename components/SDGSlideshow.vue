<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Goal {
  id: number
  title: string
  icon: string
  staticIcon: string
  color: string
}

const goals: Goal[] = [
  { id: 1, title: "Подолання бідності", icon: "images/E_GIF_01.gif", staticIcon: "images/E_WEB_01.png", color: "#E5243B" },
  { id: 2, title: "Подолання голоду", icon: "images/E_GIF_02.gif", staticIcon: "images/E_WEB_02.png", color: "#DDA63A" },
  { id: 3, title: "Міцне здоров'я", icon: "images/E_GIF_03.gif", staticIcon: "images/E_WEB_03.png", color: "#4C9F38" },
  { id: 4, title: "Якісна освіта", icon: "images/E_GIF_04.gif", staticIcon: "images/E_WEB_04.png", color: "#C5192D" },
  { id: 5, title: "Гендерна рівність", icon: "images/E_GIF_05.gif", staticIcon: "images/E_WEB_05.png", color: "#FF3A21" },
  { id: 6, title: "Чиста вода", icon: "images/E_GIF_06.gif", staticIcon: "images/E_WEB_06.png", color: "#26BDE2" },
  { id: 7, title: "Відновлювана енергія", icon: "images/E_GIF_07.gif", staticIcon: "images/E_WEB_07.png", color: "#FCC30B" },
  { id: 8, title: "Гідна праця", icon: "images/E_GIF_08.gif", staticIcon: "images/E_WEB_08.png", color: "#A21942" },
  { id: 9, title: "Інновації", icon: "images/E_GIF_09.gif", staticIcon: "images/E_WEB_09.png", color: "#FD6925" },
  { id: 10, title: "Скорочення нерівності", icon: "images/E_GIF_10.gif", staticIcon: "images/E_WEB_10.png", color: "#DD1367" },
  { id: 11, title: "Сталі міста", icon: "images/E_GIF_11.gif", staticIcon: "images/E_WEB_11.png", color: "#FD9D24" },
  { id: 12, title: "Відповідальне споживання", icon: "images/E_GIF_12.gif", staticIcon: "images/E_WEB_12.png", color: "#BF8B2E" },
  { id: 13, title: "Боротьба зі зміною клімату", icon: "images/E_GIF_13.gif", staticIcon: "images/E_WEB_13.png", color: "#3F7E44" },
  { id: 14, title: "Збереження морських екосистем", icon: "images/E_GIF_14.gif", staticIcon: "images/E_WEB_14.png", color: "#0A97D9" },
  { id: 15, title: "Збереження екосистем суші", icon: "images/E_GIF_15.gif", staticIcon: "images/E_WEB_15.png", color: "#56C02B" },
  { id: 16, title: "Мир та справедливість", icon: "images/E_GIF_16.gif", staticIcon: "images/E_WEB_16.png", color: "#00689D" },
  { id: 17, title: "Партнерство", icon: "images/E_GIF_17.gif", staticIcon: "images/E_WEB_17.png", color: "#19486A" }
]

const currentIndex = ref(0)
const visibleGoals = ref<Goal[]>([])
const highlightedIndices = ref<number[]>([])
let slideShowIntervalId: number | null = null
let highlightIntervalId: number | null = null

onMounted(() => {
  updateVisibleGoals()
  startSlideshow()
  updateHighlightedCards()
  startHighlightAnimation()
})

onUnmounted(() => {
  if (slideShowIntervalId) clearInterval(slideShowIntervalId)
  if (highlightIntervalId) clearInterval(highlightIntervalId)
})

function startSlideshow() {
  slideShowIntervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % goals.length
    updateVisibleGoals()
  }, 1800)
}

function updateVisibleGoals() {
  visibleGoals.value = Array(6).fill(null).map((_, i) => {
    const index = (currentIndex.value + i) % goals.length
    return goals[index]
  })
}

function getRandomIndices(count: number, max: number): number[] {
  const indices = new Set<number>()
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * max))
  }
  return Array.from(indices)
}

function startHighlightAnimation() {
  highlightIntervalId = setInterval(() => {
    updateHighlightedCards()
  }, 3000)
}

function updateHighlightedCards() {
  highlightedIndices.value = getRandomIndices(3, goals.length)
}
</script>

<template>
  <div class="relative w-full overflow-hidden py-1">
    <div class="flex gap-6 animate-scroll">
      <div 
        v-for="(goal, index) in [...goals, ...goals]" 
        :key="`${goal.id}-${index}`"
        class="goal-card flex-shrink-0 transition-transform duration-300 hover:scale-125 hover:z-10"
        :class="{ 'paused': !highlightedIndices.includes(index % goals.length) }"
      >
        <img 
          :src="highlightedIndices.includes(index % goals.length) 
            ? goal.icon 
            : goal.staticIcon"
          :alt="goal.title"
          class="w-24 h-24 object-contain transition-all duration-300"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.goal-card {
  width: 96px;
  cursor: pointer;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-96px * 17 - 1.5rem * 17));
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
  will-change: transform;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

/* Забезпечуємо плавність при наведенні */
.goal-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Додаємо ефект підняття картки */
.goal-card:hover {
  transform: scale(1.1);
  z-index: 60;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.paused {
  filter: grayscale(100%);
  opacity: 0.6;
}

.paused img {
  animation-play-state: paused !important;
}

.goal-card img {
  transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style> 