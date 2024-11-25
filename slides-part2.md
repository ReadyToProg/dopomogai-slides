---
theme: default
layout: center
background: '#FDFBF7'
---

# Як це працює - Історія користувача

<div class="flex flex-col items-center justify-center h-full">
  <!-- User Journey Flow -->
  <div 
    class="relative w-full max-w-4xl mb-12"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
  >
    <div class="grid grid-cols-3 gap-8">
      <!-- Крок 1: Скролінг -->
      <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
        <div class="text-4xl mb-4">📱</div>
        <div class="text-xl font-bold bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
          Скролінг
        </div>
        <div class="text-gray-600">
          AI аналізує ваші інтереси та пропонує релевантні місії
        </div>
      </div>
<!-- Крок 2: Місії -->
      <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
        <div class="text-4xl mb-4">🎯</div>
        <div class="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Місії
        </div>
        <div class="text-gray-600">
          Від простих репостів до складних волонтерських проєктів
        </div>
      </div>
      <!-- Крок 3: Вплив -->
      <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
        <div class="text-4xl mb-4">💫</div>
        <div class="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-2">
          Реальний вплив
        </div>
        <div class="text-gray-600">
          Кожна дія перетворюється на вимірюваний соціальний вплив
        </div>
      </div>
    </div>
    <!-- Connecting Lines -->
    <div class="absolute top-1/2 left-[33%] w-[30%] h-0.5 bg-gradient-to-r from-indigo-500 to-violet-600"></div>
    <div class="absolute top-1/2 right-[33%] w-[30%] h-0.5 bg-gradient-to-r from-violet-600 to-indigo-500"></div>
  </div>
  

  <!-- Mission Examples -->
  <div 
    class="w-full max-w-4xl grid grid-cols-2 gap-8 mb-8"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
  >
    <div class="space-y-4">
      <div class="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-4">
        Приклади місій
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
          <div class="text-gray-600">Поширити важливу інформацію</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-blue-500"></div>
          <div class="text-gray-600">Допомогти з перекладом</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div class="text-gray-600">Організувати збір коштів</div>
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Токени як винагорода
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-violet-600"></div>
          <div class="text-gray-600">Вимірюваний вплив кожної дії</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-purple-600"></div>
          <div class="text-gray-600">Прозора система винагород</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-violet-500"></div>
          <div class="text-gray-600">Можливість використання в екосистемі</div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
background: '#FDFBF7'
---

# Український феномен у цифрах

<div class="flex flex-col items-center justify-center gap-12">
  <!-- Головна цифра -->
  <div 
    class="text-center"
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1 }"
  >
    <div class="flex items-center justify-center gap-4 mb-2">
      <div class="text-5xl">💰</div>
      <div class="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
        36,7 млрд
      </div>
    </div>
    <div class="text-xl text-gray-600">
      Сума зібраних коштів волонтерами за 2 роки війни
    </div>
  </div>
  <!-- Додаткова статистика -->
  <div 
    class="grid grid-cols-2 gap-16 w-full max-w-4xl"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
  >
    <!-- Банки -->
    <div class="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div class="flex items-center justify-center gap-4 mb-2">
        <div class="text-4xl">🏦</div>
        <div 
          class="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }"
        >
          823,311
        </div>
      </div>
      <div class="text-gray-600">
        Кількість 'банок' за два роки
      </div>
    </div>
    <!-- Власники -->
    <div class="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div class="flex items-center justify-center gap-4 mb-2">
        <div class="text-4xl">👥</div>
        <div 
          class="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }"
        >
          38,963
        </div>
      </div>
      <div class="text-gray-600">
        Власників банок за рік війни
      </div>
    </div>
  </div>
  <!-- Джерело -->
  <div 
    class="text-sm text-gray-500"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 900 } }"
  >
    Джерело: Монобанк
  </div>
</div>