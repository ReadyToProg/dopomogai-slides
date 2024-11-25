<template>
  <div class="w-full max-w-5xl mx-auto">
    <!-- Навігація -->
    <div class="flex justify-center gap-4 mb-8">
      <button 
        v-for="(feature, index) in features" 
        :key="index"
        @click="slidev.nav.clicks = index"
        class="px-4 py-2 rounded-lg transition-all duration-300"
        :class="currentSlide === index ? 'bg-[#FF6B00] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
      >
        {{ feature.tab }}
      </button>
    </div>

    <!-- Контент -->
    <div class="relative h-[400px]">
      <div 
        v-for="(feature, index) in features" 
        :key="feature.heading"
        class="absolute w-full transition-all duration-500"
        :class="{
          'opacity-100 translate-x-0': currentSlide === index,
          'opacity-0 translate-x-full': currentSlide < index,
          'opacity-0 -translate-x-full': currentSlide > index
        }"
      >
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="grid grid-cols-2 gap-8 p-8">
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-[#FF6B00]">
                {{ feature.heading }}
              </h3>
              <p class="text-gray-600">
                {{ feature.description }}
              </p>
              <div class="space-y-3">
                <div 
                  v-for="point in feature.points" 
                  :key="point"
                  class="flex items-center gap-3"
                >
                  <div class="w-6 h-6 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                    <span class="text-[#FF6B00]">✓</span>
                  </div>
                  <span class="text-gray-600">{{ point }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <img 
                :src="feature.image" 
                :alt="feature.heading"
                class="max-w-full h-auto rounded-lg shadow-lg"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Отримуємо доступ до Slidev контексту
const slidev = useSlidevContext()
const currentSlide = computed(() => Math.min(slidev?.nav.clicks || 0, features.length - 1))

const features = [
  {
    tab: 'Соціальна мережа',
    heading: 'Соціальна мережа для впливу',
    description: 'Платформа, що об\'єднує волонтерів, донаторів та організації для створення реального соціального впливу',
    points: [
      'Об\'єднує волонтерів, донаторів та організації',
      'Профілі показують реальний вплив кожного',
      'Стрічка релевантних зборів та можливостей',
      'Взаємодія через пости, коментарі, поширення'
    ],
    image: '/images/social.png'
  },
  {
    tab: 'Взаємодія',
    heading: 'Кожна взаємодія створює вплив',
    description: 'Система, де кожна соціальна дія перетворюється на реальну допомогу',
    points: [
      'Лайки перетворюються на реальні донати',
      'Відстеження впливу від поширень',
      'Токени впливу за корисний внесок',
      'Прозора статистика загального впливу'
    ],
    image: '/images/interaction.png'
  },
  {
    tab: 'Маркетплейс',
    heading: 'Маркетплейс донацій',
    description: 'Платформа, де кожна покупка має соціальний вплив',
    points: [
      'Автоматичні донати з покупок',
      'Легка інтеграція для магазинів',
      'Підтримка SDG цілей',
      'Прозоре відстеження впливу'
    ],
    image: '/images/marketplace.png'
  },
  {
    tab: 'AI допомога',
    heading: 'AI оптимізація допомоги',
    description: 'Штучний інтелект для максимальної ефективності благодійності',
    points: [
      'Оптимізація описів та просування',
      'Персоналізовані рекомендації',
      'Автоматизація рутинних процесів',
      'Виявлення шахрайства'
    ],
    image: '/images/ai.png'
  }
]
</script>

<style scoped>
.transition-all {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 