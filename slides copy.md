---
theme: default
layout: cover
background: '#FDFBF7'
class: text-center
transition: slide-left
---

# Критичний Момент для Людства
<div 
  class="text-lg text-gray-500 mb-2 tracking-wide"
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0 }"
>
  Звіт ООН про Цілі Сталого Розвитку 2024
</div>

<div 
  class="grid grid-cols-3 gap-4"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
>
  <div class="relative p-3 bg-white rounded-lg border border-gray-200 shadow-sm transform transition-all duration-500 hover:shadow-md hover:scale-105">
    <div class="relative">
      <div class="text-5xl font-bold text-[#FF6B00] mb-3 font-mono">
        17<span class="text-3xl">%</span>
      </div>
      <div class="h-0.5 w-12 bg-[#FF6B00] mx-auto mb-3"></div>
      <div class="text-gray-600 text-base">
        цілей на шляху<br>до досягнення
      </div>
    </div>
  </div>

  <div class="relative p-3 bg-white rounded-lg border border-gray-200 shadow-sm transform transition-all duration-500 hover:shadow-md hover:scale-105">
    <div class="relative">
      <div class="text-5xl font-bold text-[#FF6B00] mb-3 font-mono">
        17<span class="text-3xl">%</span>
      </div>
      <div class="h-0.5 w-12 bg-[#FF6B00] mx-auto mb-3"></div>
      <div class="text-gray-600 text-base">
        показників гірші<br>ніж у 2015
      </div>
    </div>
  </div>

  <div class="relative p-3 bg-white rounded-lg border border-gray-200 shadow-sm transform transition-all duration-500 hover:shadow-md hover:scale-105">
    <div class="relative">
      <div class="text-5xl font-bold text-[#FF6B00] mb-3 font-mono">
        $4T
      </div>
      <div class="h-0.5 w-12 bg-[#FF6B00] mx-auto mb-3"></div>
      <div class="text-gray-600 text-base">
        щорічний дефіцит<br>фінансування
      </div>
    </div>
  </div>
</div>

<div 
  class="grid grid-cols-1 gap-4 mt-6"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
>
  <div class="text-xl text-[#FF6B00] font-semibold mb-1">
    Зараз з 17 цілей сталого розвитку ми встигаємо досягти лише 3.<br>
  </div>
  <SDGSlideshow />
</div>

<style>
.slidev-layout h1 {
  color: #1A1A1A;
  font-size: 2.2em;
  font-weight: 600;
  margin-bottom: 0.5em;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

* {
  transition: all 0.5s ease;
}
</style>

---
layout: center
background: '#FDFBF7'
class: text-center
transition: slide-left
---

<div class="flex flex-col items-center justify-center h-full">
  <div 
    class="transform transition-all duration-500"
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
  >
    <div 
      class="text-xl text-gray-600 mb-4"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
    >
      Для досягнення цілей сталого розвитку благодійність має вирости в
    </div>
    <div 
      class="relative inline-block mb-4"
      v-motion
      :initial="{ opacity: 0, scale: 0.5 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 800 } }"
    >
      <div class="text-8xl font-bold text-[#FF6B00] animate-pulse">
        6 разів
      </div>
    </div>
    <div class="text-xl text-gray-600 mb-8">
      за наступні <span class="font-bold">3</span> роки
    </div>
    <div 
      class="text-center"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }"
    >
      <div class="inline-block bg-white rounded-lg px-8 py-3 border border-gray-200 shadow-sm transform hover:shadow-md transition-all duration-300 hover:scale-105">
        <span class="text-gray-500">Це не амбіція</span>
        <span class="text-[#FF6B00] font-bold ml-2">— це необхідність!</span>
      </div>
    </div>
  </div>
</div>

---
layout: center
background: '#FDFBF7'
---

# Парадокс Сучасності

<div class="flex flex-col items-center justify-center h-full">
  <!-- Головний контраст -->
  <div 
    class="grid grid-cols-2 gap-16 mb-8"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
  >
    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div class="text-[#FF6B00] text-2xl font-bold mb-6">Маємо Все Необхідне</div>
      <ul class="space-y-4">
        <li class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">🔧</div>
          </div>
          <div>
            <div class="font-semibold text-black">Технології</div>
            <div class="text-sm text-gray-600">ШІ, блокчейн, соц мережі</div>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">💰</div>
          </div>
          <div>
            <div class="font-semibold text-black">Ресурси</div>
            <div class="text-sm text-gray-600">ВНД США $26.9T (+5.36%)</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div class="text-[#FF6B00] text-2xl font-bold mb-6">Але Благодійність Стагнує</div>
      <ul class="space-y-4">
        <li class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">📉</div>
          </div>
          <div>
            <div class="font-semibold text-black">Негативна динаміка</div>
            <div class="text-sm text-gray-600">-2.1% падіння донацій за рік</div>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">💸</div>
          </div>
          <div>
            <div class="font-semibold text-black">Мізерна частка</div>
            <div class="text-sm text-gray-600">Лише 0.23% від ВНД</div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- Підсумковий меседж -->
  <div 
    class="text-center"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 800 } }"
  >
    <div class="inline-block bg-gradient-to-r from-[#FF6B00]/10 to-[#FF8A3D]/10 rounded-lg px-10 py-4 transform hover:scale-105 transition-all duration-300">
      <span class="text-2xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-transparent">
        Технології без трансформації свідомості не вирішать проблему
      </span>
    </div>
  </div>
</div>

<style>
.slidev-layout h1 {
  background: linear-gradient(45deg, #FF6B00, #FF8A3D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>

---
layout: center
background: '#FDFBF7'
---

# 🇺🇦 Український Феномен

<div class="flex flex-col items-center justify-center h-full">
  <!-- Головний показник -->
  <div 
    class="mb-8"
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
  >
    <div class="text-center mb-2 text-gray-600">
      За 4 роки Україна піднялася з
    </div>
    <div class="text-8xl font-bold text-center mb-2">
      <span class="text-gray-400">101</span>
      <span class="text-[#FF6B00] mx-4">→</span>
      <span class="text-[#FF6B00]">2</span>
    </div>
    <div class="text-center text-gray-600">
      місця у світовому рейтингу благодійності
    </div>
  </div>

  <!-- Два ключові показники -->
  <div 
    class="grid grid-cols-2 gap-16 mb-8"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
  >
    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div class="text-5xl font-bold text-[#FF6B00] mb-2 animate-pulse">300×</div>
      <div class="text-gray-600">
        зростання благодійних<br>внесків за рік
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div class="text-5xl font-bold text-[#FF6B00] mb-2 animate-pulse">2×</div>
      <div class="text-gray-600">
        більше зібрали волонтери<br>ніж професійні фонди
      </div>
    </div>
  </div>

  <!-- Підсумковий меседж -->
  <div 
    class="text-center"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 800 } }"
  >
    <div 
      class="inline-block bg-gradient-to-r from-[#FF6B00]/10 to-[#FF8A3D]/10 rounded-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
    >
      <span class="text-2xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-transparent">
        Сила спільної мети трансформувала наше суспільство
      </span>
    </div>
  </div>
</div>

<style>
.slidev-layout h1 {
  background: linear-gradient(45deg, #FF6B00, #FF8A3D);
  -webkit-background-clip: text;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}
</style>

---
layout: center
background: '#FDFBF7'
---
<div class="flex flex-col items-center justify-center h-full">
  <!-- раматичний вступ -->
  <div 
    class="text-center mb-12"
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0 }"
  >
    <div class="text-xl text-gray-600">
      Формула Української Трансформації
    </div>
  </div>
  <!-- Три ключові фактори з покращеною анімацією -->
  <div class="grid grid-cols-3 gap-12 mb-16">
    <div 
      class="relative"
      v-motion
      :initial="{ opacity: 0, x: -50 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }"
    >
      <div class="absolute -top-6 -left-6 text-8xl text-gray-100 font-bold animate-pulse">1</div>
      <div class="bg-[#FF6B00]/5 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 relative z-10 hover:scale-105 hover:bg-white">
        <div class="text-4xl mb-4">🎯</div>
        <div class="text-xl text-[#FF6B00] font-bold mb-3">
          Критичний Момент
        </div>
        <div class="text-gray-600">
          Коли кожен розуміє важливість моменту, неможливе стає можливим
        </div>
      </div>
    </div>
    <div 
      class="relative"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
    >
      <div class="absolute -top-6 -left-6 text-8xl text-gray-100 font-bold animate-pulse">2</div>
      <div class="bg-[#FF6B00]/5 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 relative z-10 hover:scale-105 hover:bg-white">
        <div class="text-4xl mb-4">🤝</div>
        <div class="text-xl text-[#FF6B00] font-bold mb-3">
          Спільна Мета
        </div>
        <div class="text-gray-600">
          Мільйони людей об'єднуються навколо зрозумілої цілі
        </div>
      </div>
    </div>
    <div 
      class="relative"
      v-motion
      :initial="{ opacity: 0, x: 50 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: 700 } }"
    >
      <div class="absolute -top-6 -left-6 text-8xl text-gray-100 font-bold animate-pulse">3</div>
      <div class="bg-[#FF6B00]/5 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 relative z-10 hover:scale-105 hover:bg-white">
        <div class="text-4xl mb-4">♾️</div>
        <div class="text-xl text-[#FF6B00] font-bold mb-3">
          Нова Культура
        </div>
        <div class="text-gray-600">
          Благодійність стає природною частиною життя кожного
        </div>
      </div>
    </div>
  </div>
  <!-- Потужний фінальний меседж -->
  <div 
    class="text-center max-w-4xl"
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: 1000 } }"
  >
    <div class="inline-block bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] p-0.5 rounded-xl">
      <div class="bg-white px-9 py-6 rounded-xl">
        <div class="text-xl mb-2 text-gray-600">
          Світ має всі необхідні ресурси та технології
        </div>
        <div class="text-2xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-gray-800">
          🦸 Потрібен лише лідер для трансформації свідомості
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout h1 {
  background: linear-gradient(45deg, #FF6B00, #FF8A3D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

---
layout: center
background: '#FDFBF7'
---

# Трансформація Благодійності<br>через Соціальну Мережу

<div class="flex flex-col items-center justify-center h-full">
  <!-- Візуальне порівняння -->
  <div 
    class="grid grid-cols-2 gap-16 mb-6 w-full max-w-6xl"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0 }"
  >
    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div class="flex items-center mb-6">
        <img src="/images/linkedin.png" class="h-8 mr-4" alt="LinkedIn">
      </div>
      <div class="space-y-4">
        <div class="flex items-center">
          <div class="bg-[#0A66C2]/10 p-3 rounded-lg mr-4">
            <div class="text-[#0A66C2] text-xl">👥</div>
          </div>
          <div class="text-gray-600">
            Об'єднує професіоналів та компанії
          </div>
        </div>
        <div class="flex items-center">
          <div class="bg-[#0A66C2]/10 p-3 rounded-lg mr-4">
            <div class="text-[#0A66C2] text-xl">🌐</div>
          </div>
          <div class="text-gray-600">
            Створює глобальну мережу
          </div>
        </div>
        <div class="flex items-center">
          <div class="bg-[#0A66C2]/10 p-3 rounded-lg mr-4">
            <div class="text-[#0A66C2] text-xl">💼</div>
          </div>
          <div class="text-gray-600">
            Трансформує ринок праці
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div class="flex items-center mb-6">
        <div class="text-2xl font-bold text-[#FF6B00]">Dopomoga</div>
      </div>
      <div class="space-y-4">
        <div class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">🤝</div>
          </div>
          <div class="text-gray-600">
            Об'єднує волонтерів, компанії та донаторів
          </div>
        </div>
        <div class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">🌍</div>
          </div>
          <div class="text-gray-600">
            Створює мережу соціального впливу
          </div>
        </div>
        <div class="flex items-center">
          <div class="bg-[#FF6B00]/10 p-3 rounded-lg mr-4">
            <div class="text-[#FF6B00] text-xl">❤️</div>
          </div>
          <div class="text-gray-600">
            Трансформує благодійність
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Фінальний меседж -->
  <div 
    class="text-center max-w-4xl"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
  >
    <div class="inline-block bg-gradient-to-r from-[#FF6B00]/10 to-[#FF8A3D]/10 rounded-xl px-12 py-6">
      <div class="text-2xl text-gray-600">
        Як <span class="text-[#0A66C2] font-bold">LinkedIn</span> трансформував професійн зв'язки,<br>
        так <span class="text-[#FF6B00] font-bold">Dopomoga</span> трансформує благодійність
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout h1 {
  background: linear-gradient(45deg, #FF6B00, #FF8A3D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.2;
}

.hover\:shadow-xl:hover {
  transform: translateY(-5px);
}
</style>

---
src: ./slides-part2.md
hide: false
---