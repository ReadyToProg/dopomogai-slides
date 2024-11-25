<template>
  <div class="w-full max-w-6xl mx-auto">
    <!-- Навігація -->
    <div class="flex justify-center gap-12 mb-12">
      <button 
        v-for="(item, index) in features" 
        :key="index"
        @click="slidev.nav.clicks = index"
        class="flex flex-col items-center gap-2"
      >
        <div 
          class="w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-[#FF6B00]/10 scale-110' : 'bg-gray-100 opacity-50 hover:opacity-75'"
        >
          <span class="text-2xl">{{ item.icon }}</span>
        </div>
        <span 
          class="text-sm"
          :class="currentSlide === index ? 'text-[#FF6B00]' : 'text-gray-400'"
        >
          {{ item.title }}
        </span>
      </button>
    </div>

    <!-- Контент -->
    <div class="relative h-[400px]">
      <div 
        v-for="(item, index) in features" 
        :key="index"
        class="absolute inset-0 w-full transition-all duration-500"
        :class="{
          'opacity-100 translate-x-0': currentSlide === index,
          'opacity-0 translate-x-full': currentSlide < index,
          'opacity-0 -translate-x-full': currentSlide > index
        }"
      >
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <!-- Заголовок -->
          <div class="bg-[#FF6B00]/5 p-8 border-b border-[#FF6B00]/10">
            <div class="flex items-center gap-6">
              <div class="bg-[#FF6B00]/10 w-16 h-16 rounded-full flex items-center justify-center">
                <span class="text-2xl">{{ item.icon }}</span>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#FF6B00]">{{ item.heading }}</div>
                <div class="text-gray-500 mt-1">{{ item.description }}</div>
              </div>
            </div>
          </div>

          <!-- Фічі -->
          <div class="p-8">
            <div class="grid grid-cols-3 gap-8">
              <div 
                v-for="(feature, featureIndex) in item.features" 
                :key="featureIndex"
                class="bg-[#FF6B00]/5 p-6 rounded-xl"
              >
                <div class="text-lg font-semibold text-[#FF6B00] mb-3">{{ feature.title }}</div>
                <div class="text-gray-600">{{ feature.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const features = [
  {
    icon: '🌐',
    title: 'Мережа',
    heading: 'Соціальна Мережа Впливу',
    description: 'Обєднуємо людей заради добрих справ',
    features: [
      {
        title: 'Профілі впливу',
        text: 'Показують реальний соціальний вплив кожного користувача'
      },
      {
        title: 'Розумна стрічка',
        text: 'Релевантні збори та можливості допомогти'
      },
      {
        title: 'Взаємодія',
        text: 'Лайки та коментарі створюють реальний вплив'
      }
    ]
  },
  {
    icon: '🛍️',
    title: 'Маркетплейс',
    heading: 'Маркетплейс Донацій',
    description: 'Кожна покупка має соціальний вплив',
    features: [
      {
        title: 'Автоматичні донати',
        text: 'Частина коштів з покупок йде на обрані цілі'
      },
      {
        title: 'Легка інтеграція',
        text: 'Для онлайн та офлайн магазинів'
      },
      {
        title: 'SDG цілі',
        text: 'Кожна транзакція наближає їх досягнення'
      }
    ]
  },
  {
    icon: '💝',
    title: 'Токени',
    heading: 'Токенізація Впливу',
    description: 'Винагорода за кожну корисну дію',
    features: [
      {
        title: 'Токени впливу',
        text: 'Винагорода за кожну корисну дію'
      },
      {
        title: 'Прозорість',
        text: 'Відстеження внеску кожного учасника'
      },
      {
        title: 'Гейміфікація',
        text: 'Система рейтингів та досягнень'
      }
    ]
  },
  {
    icon: '🤖',
    title: 'AI',
    heading: 'AI Оптимізація',
    description: 'Розумні рішення для максимального впливу',
    features: [
      {
        title: 'Розумне просування',
        text: 'Збори знаходять свою аудиторію'
      },
      {
        title: 'Персоналізація',
        text: 'Рекомендації на основі інтересів'
      },
      {
        title: 'Безпека',
        text: 'Автоматичне виявлення шахрайства'
      }
    ]
  }
]

// Отримуємо доступ до Slidev контексту
const slidev = useSlidevContext()
const currentSlide = computed(() => Math.min(slidev?.nav.clicks || 0, features.length - 1))
</script>

<style scoped>
.transition-all {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
