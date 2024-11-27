---
theme: apple-basic
background: '#000'
class: 'text-center'
transition: slide-left
highlighter: shiki
lineNumbers: false
base: '/'
---

<div class="flex w-full h-full items-center justify-between px-16" @click="!hasPlayedVideo && $event.target.tagName !== 'VIDEO' && playVideo()">
  <div class="w-1/2">
    <div class="text-left space-y-6">
      <!-- Лого з анімованим градієнтом -->
      <div class="mt-12 relative w-[300px]" v-motion :initial="{ x: -60, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg blur opacity-25 animate-pulse"/>
        <img src="/images/dopomogai1.svg" alt="DopomogAI" class="relative w-full" />
      </div>  
      <!-- Підзаголовок з градієнтом -->
      <p class="text-xl font-medium tracking-wide bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent" 
         v-motion :initial="{ x: -60, opacity: 0 }" 
         :enter="{ x: 0, opacity: 1, transition: { delay: 500 } }">
        A DEDICATED AI INFLUENCER FOR SOCIAL IMPACT
      </p>
      <!-- Продукти з покращеним дизайном -->
      <div class="space-y-3 pt-3" v-motion :initial="{ y: 40, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 700 } }">
        <!-- DopomogaHub -->
        <div class="group relative">
    <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[24px] blur opacity-0 group-hover:opacity-30 transition duration-700"/>
    <div class="relative bg-black/40 backdrop-blur-sm p-6 rounded-[24px] border border-zinc-800 hover:border-purple-500/40 hover:bg-zinc-950/40 transition-all duration-500">
      <img src="/images/dopomogahub1.svg" alt="DopomogaHub" class="h-11 mb-3 group-hover:scale-105 transition-transform" />
      <p class="text-zinc-400 text-xl font-light group-hover:text-zinc-200 transition-colors">Impact-First Social Network</p>
    </div>
  </div>
  <!-- Prozbory -->
  <div class="group relative">
    <div class="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-[24px] blur opacity-0 group-hover:opacity-30 transition duration-700"/>
    <div class="relative bg-black/40 backdrop-blur-sm p-6 rounded-[24px] border border-zinc-800 hover:border-orange-500/40 hover:bg-zinc-950/40 transition-all duration-500">
      <img src="/images/prozbory1.svg" alt="Prozbory" class="h-11 mb-3 group-hover:scale-105 transition-transform" />
      <p class="text-zinc-400 text-xl font-light group-hover:text-zinc-200 transition-colors">Smart Giving Platform</p>
    </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Права колонка з відео -->
  <div class="w-1/2 ml-12" v-motion :initial="{ scale: 0.9, opacity: 0 }" :enter="{ y: 21, scale: 1, opacity: 1, transition: { delay: 900 } }">
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-transparent rounded-[2rem] blur-xl"/>
      <div class="relative">
        <VideoPlayer 
          ref="videoPlayer"
          video-src="/images/greetings.mp4" 
          @video-played="handleVideoPlayed"
          class="rounded-2xl overflow-hidden border border-zinc-800/50"
        />
      </div>
    </div>
  </div>
</div>


<style>
.slidev-layout {
  @apply bg-black;
  padding: 0 !important; /* Додали !important щоб перевизначити базові стилі */
  margin: 0;
  min-height: 100vh; /* Додали щоб гарантувати повну висоту */
}

/* Додамо стилі для батьківського контейнера якщо потрібно */
.slidev-page {
  background: black !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>

---
layout: default
background: '#000'
class: 'text-center'
---

<div class="flex flex-col h-full bg-black text-white p-16">
  <!-- Заголовок -->
  <div class="text-center mb-3" v-motion :initial="{ y: -150, opacity: 0 }" :enter="{ y: -50, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-6xl font-extrabold bg-gradient-to-r from-red-500 via-red-500 to-pink-500 bg-clip-text text-transparent shadow-lg animate-pulse">The Challenge</h1>
    <h2 class="text-2xl text-zinc-400">Currently we are on track to achieve only 3/17 SDGs by 2030</h2>
  </div>
  
  <!-- SDG Слайдшоу -->
  <div class="relative" v-motion :initial="{ opacity: 0 }" :enter="{ y: -45, opacity: 1, transition: { delay: 600 } }">
    <SDGSlideshow />
  </div>

  <!-- Funding Gap -->
  <div class="flex justify-between items-center mb-12">
    <div class="w-1/2" v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ y: -30, x: 0, opacity: 1, transition: { delay: 1000 } }">
      <div class="text-8xl font-black text-red-500 mb-4">$4T</div>
      <div class="text-2xl text-zinc-400">annual funding gap</div>
    </div>
    <!-- Corporate Giving Chart -->
    <div class="w-1/2 pl-8" v-motion :initial="{ x: 50, opacity: 0 }" :enter="{ y: -15, x: 0, opacity: 1, transition: { delay: 1200 } }">
      <div class="bg-zinc-900 rounded-xl p-6">
        <div class="text-xl mb-4">Corporate Giving Decline</div>
        <div class="relative h-40">
          <!-- Chart Line -->
          <div class="absolute inset-0 flex items-end">
            <div class="w-full h-[80%] bg-gradient-to-r from-red-500 to-orange-500 opacity-20 rounded-lg"/>
            <div class="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-r from-red-500 to-orange-500 opacity-20 rounded-lg"/>
          </div>
          <!-- Data Points -->
          <div class="absolute top-0 left-4 text-sm text-zinc-400">2.1% (1982)</div>
          <div class="absolute bottom-0 right-4 text-sm text-zinc-400">0.8% (2022)</div>
        </div>
        <div class="text-sm text-zinc-500 mt-4">
          Share of pretax profits | Source: Philanthropy.com
        </div>
        <div class="text-sm text-red-500 mt-2">
          $29.5B in 2022 (-4% adjusted for inflation)
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-black;
  padding: 0;
}
</style>

---
layout: default
background: '#000'
---

<div class="flex flex-col h-full bg-black text-white px-16 py-12">
  <!-- Заголовок -->
  <div class="text-center mb-3" v-motion :initial="{ y: -50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent shadow-lg animate-pulse">Business vs Impact Disconnect</h1>
  </div>
  <div class="flex flex-1 gap-8 mb-10">
    <!-- Ліва колонка - Business Goals -->
    <div class="w-1/2" v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
      <div class="bg-zinc-900/50 rounded-2xl p-8 h-full border border-zinc-800 hover:border-blue-500/50 transition-colors">
        <h2 class="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Business Goals</h2>
        <div class="space-y-8">
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">📈</div>
            <div class="text-xl text-zinc-200">Revenue Growth & Market Share</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">👥</div>
            <div class="text-xl text-zinc-200">Customer Loyalty & Brand Value</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">⚡️</div>
            <div class="text-xl text-zinc-200">Operational Excellence</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Права колонка - CSR Reality -->
    <div class="w-1/2" v-motion :initial="{ x: 50, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
      <div class="bg-zinc-900/50 rounded-2xl p-8 h-full border border-zinc-800 hover:border-red-500/50 transition-colors">
        <h2 class="text-3xl font-bold mb-10 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Current CSR Reality</h2>
        <div class="space-y-8">
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">🏢</div>
            <div class="text-xl text-zinc-200">Isolated from Core Business</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">📊</div>
            <div class="text-xl text-zinc-200">No Clear ROI Measurement</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">💸</div>
            <div class="text-xl text-zinc-200">$1.3B Yearly Spent on Tools</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Нижній текст -->
  <div class="relative py-4" v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1000 } }">
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
    <p class="text-2xl text-center font-medium">
      <span class="text-zinc-400">Social impact treated as</span>
      <span class="text-red-500 font-bold"> cost center</span>
      <span class="text-zinc-400">, not</span>
      <span class="text-blue-500 font-bold"> growth engine</span>
    </p>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-black;
  padding: 0;
}
</style>

---
layout: default
background: '#fff'
---

<div class="flex h-full bg-green-300 text-white px-16 py-8">
  <!-- Заголовок -->
  <div class="absolute top-8 left-16" v-motion :initial="{ y: -50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-6xl font-black tracking-tight bg-gradient-to-r from-black via-green to-zinc-400 bg-clip-text text-transparent">Meet Your AI Impact Team</h1>
  </div>
  <div class="flex w-full pt-20">
    <!-- Ліва колонка з Corporin -->
    <div class="w-2/3 pr-3" v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ y: -15, x: 0, opacity: 1, transition: { delay: 400 } }">
      <div class="bg-blue-300 rounded-3xl p-6 border border-zinc-800 hover:border-indigo-500/50 transition-all">
        <!-- Corporin Avatar & Info -->
        <div class="border-2 border-indigo-500 p-4 rounded-3xl">
          <div class="flex items-start gap-8">
            <div class="w-32 h-32 rounded-full bg-gradient-to-r from-green-900 to-purple-600 p-[2px] shrink-0 overflow-hidden">
              <img src="/images/corporin.gif" class="w-full h-full rounded-full object-cover" alt="Corporin"/>
            </div>
            <div>
              <h2 class="text-3xl font-bold bg-gradient-to-r from-green-900 to-purple-900 bg-clip-text text-transparent mt-6 mb-2">Corporine</h2>
              <p class="text-xl text-green-600">Your Strategic AI Partner</p>
            </div>
          </div>
        </div>
        <!-- Capabilities -->
        <div class="mt-6 grid grid-cols-2 gap-6">
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">🎯</div>
            <div class="text-black">Corporate social strategy optimization</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">📊</div>
            <div class="text-black">Smart campaign management</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">✍️</div>
            <div class="text-black">AI-powered content creation</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">📈</div>
            <div class="text-black">Impact analytics with ROI</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Права колонка - Game style -->
    <div class="w-1/3 pl-8 pt-4">
      <!-- Active Character -->
      <div class="relative mb-4">
        <div class="flex items-center bg-gradient-to-r from-blue-500 to-transparent p-2 rounded-lg border border-blue-900" v-motion :initial="{opacity: 0 }" :enter="{ y: -27, opacity: 1, transition: { delay: 200 } }">
          <img src="/images/dopomogai.gif" class="w-12 h-12 rounded-full border-2 border-blue-500" alt="DopomogAI"/>
          <div class="ml-3">
            <div class="text-lg font-bold text-blue-200">DopomogAI</div>
            <div class="text-xs text-black">AI Team Leader</div>
          </div>
          <div class="ml-auto">
            <div class="px-2 py-0.5 bg-green-600 rounded-full text-[10px] font-medium text-blue-200">ACTIVE</div>
          </div>
        </div>
      </div>
      <!-- Locked Characters -->
      <div class="space-y-2" v-motion :initial="{opacity: 0 }" :enter="{ y: -27, opacity: 1, transition: { delay: 200 } }">
        <!-- Donna -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-400 border border-purple-500/20">
            <div class="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center">
              <span class="text-lg opacity-50">🎁</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-100">Donna</div>
              <div class="text-[10px] text-zinc-300">Donor Guide</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-green-800 rounded text-[10px] text-zinc-500">LEVEL 1</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Fundessa -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-400 border border-blue-500/20">
            <div class="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
              <span class="text-lg opacity-50">💰</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-100">Fundessa</div>
              <div class="text-[10px] text-zinc-300">Nonprofit Expert</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-green-800 rounded text-[10px] text-zinc-500">LEVEL 2</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Voluntine -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-400 border border-green-500/20">
            <div class="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
              <span class="text-lg opacity-50">🤝</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-100">Voluntine</div>
              <div class="text-[10px] text-zinc-300">Volunteer Support</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-green-800 rounded text-[10px] text-zinc-500">LEVEL 3</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Influerra -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-400 border border-pink-500/20">
            <div class="w-8 h-8 rounded-full bg-pink-900 flex items-center justify-center">
              <span class="text-lg opacity-50">🎭</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-100">Influerra</div>
              <div class="text-[10px] text-zinc-300">Influencer's Partner</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-green-800 rounded text-[10px] text-zinc-500">LEVEL 4</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Activat -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-400 border border-orange-500/20">
            <div class="w-8 h-8 rounded-full bg-orange-900 flex items-center justify-center">
              <span class="text-lg opacity-50">🎯</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-100">Activat</div>
              <div class="text-[10px] text-zinc-300">Mission Creator</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-green-800 rounded text-[10px] text-zinc-500">LEVEL 5</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
      </div>
    </div>
  </div>
  <!-- Features Footer -->
  <div class="absolute bottom-8 left-8 right-8" v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 30, opacity: 1, transition: { delay: 800 } }">
    <div class="bg-blue-300 rounded-2xl p-2.1 border border-zinc-800">
      <div class="flex items-center justify-between">
        <div class="text-sm text-black-500">Each Agent's Superpower</div>
        <div class="flex gap-4">
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50">
            <span class="text-xl">🧠</span>
            <span class="text-sm text-zinc-300">Smart Memory System</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50">
            <span class="text-xl">🔄</span>
            <span class="text-sm text-zinc-300">Tools Integration</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50">
            <span class="text-xl">🌐</span>
            <span class="text-sm text-zinc-300">Cross-platform Presence</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50">
            <span class="text-xl">⚡️</span>
            <span class="text-sm text-zinc-300">24/7 Optimization</span>
          </div>
        </div>
        <div class="pl-3 text-sm text-black-500">& work together</div>
      </div>
    </div>
  </div>
</div>


<style>
.slidev-layout {
  @apply bg-white;
  padding: 0;
}

.slidev-layout.default {
  background: white !important;
  margin: 0 !important;
  padding: 0 !important;
}

#slide-content {
  background: white !important;
}

.slidev-page, 
.slidev-layout .slidev-page,
.slidev-layout.default .slidev-page {
  background: white !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>

---
layout: center
background: '#000'
---
    <iframe
      src="https://demo.arcade.software/HQGS3M1pruYg8YiFtpGs?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
      title="Corporine AI Assistant"
      frameborder="0"
      loading="lazy"
      allowfullscreen
      allow="clipboard-write"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light"
    />

<style>
.slidev-layout {
  @apply bg-black;
  padding: 0;
}
</style>

---
layout: default
background: '#fff'
---
<div class="flex flex-row h-full bg-sky-50 text-gray-800 px-16 py-12">
  <!-- Ліва колонка (2/3) -->
  <div class="w-2/3 pr-12">
    <!-- Заголовок -->
    <div class="mb-8" v-motion :initial="{ y: -50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
      <h1 class="text-6xl font-black tracking-tight bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-2">Transform Giving into Growth</h1>
    </div>
    <!-- Impact Cofounder Card -->
    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-200" 
      v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
      <div class="flex justify-between items-start mb-6">
        <div>
          <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Impact Cofounder</h2>
          <div class="text-gray-600 mt-1">Only 3 seats available</div>
        </div>
        <div class="text-right">
          <div class="text-3xl font-bold text-gray-800">$4,500<span class="text-lg font-normal">/month</span></div>
          <div class="text-gray-600">or $36,000/year (33% off)</div>
        </div>
      </div>
      <!-- Features Grid -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Dedicated Team -->
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-purple-600">Dedicated Human & AI Team</h4>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <span class="text-blue-600">✓</span>
              Maximum Impact Visibility
            </div>
            <div class="flex items-center gap-2">
              <span class="text-blue-600">✓</span>
              Featured success stories
            </div>
            <div class="flex items-center gap-2">
              <span class="text-blue-600">✓</span>
              Priority media coverage
            </div>
          </div>
        </div>
        <!-- Strategic Partnership -->
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-indigo-800">Strategic Partnership</h4>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <span class="text-indigo-600">✓</span>
              Co-founder recognition
            </div>
            <div class="flex items-center gap-2">
              <span class="text-indigo-600">✓</span>
              Custom impact programs
            </div>
            <div class="flex items-center gap-2">
              <span class="text-indigo-600">✓</span>
              Product development input
            </div>
          </div>
        </div>
        <!-- Business Growth -->
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-sky-800">Business Growth</h4>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <span class="text-sky-600">✓</span>
              Maximum brand exposure
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sky-600">✓</span>
              Network effect benefits
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sky-600">✓</span>
              Deep impact analytics
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Banner -->
    <div class="mt-3 text-center text-m text-gray-600" v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 800 } }">
      Shape the future of social impact as 1/3 co-founding partners
    </div>
  </div>
  <!-- Права колонка (1/3) -->
  <div class="w-1/3 pl-12 space-y-6" v-motion :initial="{ x: 50, opacity: 0 }" :enter="{ y: -33, x: 0, opacity: 1, transition: { delay: 600 } }">
    <div class="text-2xl font-bold mb-3 text-gray-800">Coming Soon:</div>
    <!-- Free Tier -->
    <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h4 class="text-xl font-bold text-blue-600">Free Tier</h4>
      <div class="space-y-2 text-sm text-gray-600">
        <div>✓ Public Company Profile</div>
        <div>✓ Basic impact tracking</div>
        <div>✓ Impact Programs access</div>
      </div>
      <div class="mt-3 text-xs text-gray-500">Pay for your impact growth</div>
    </div>
    <!-- Impact Partner -->
    <div class="bg-gradient-to-br from-blue-200 to-sky-200 rounded-xl p-6 border border-blue-300 shadow-sm">
      <div class="flex justify-between items-start mb-4">
        <h4 class="text-xl font-bold text-blue-800">Impact Partner</h4>
        <div class="text-xl font-bold text-gray-800">$699<span class="text-sm font-normal">/month</span></div>
      </div>
      <div class="space-y-2 text-sm text-gray-700">
        <div>✓ Full AI team access</div>
        <div>✓ Smart campaign management</div>
        <div>✓ Automated marketing and Impact storytelling</div>
        <div>✓ Analytics & reporting</div>
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-black;
  padding: 0 !important; /* Додали !important щоб перевизначити базові стилі */
  margin: 0;
}
/* Додамо стилі для батьківського контейнера якщо потрібно */
.slidev-page {
  background: black !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>

---
layout: default
background: '#fff'
---

<div class="flex flex-col h-full bg-white text-gray-800 px-12 py-8">
  <!-- Компактний заголовок -->
  <div class="mb-6" v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-800 to-gray-800 bg-clip-text text-transparent mb-1">New Category - AI-Powered Impact Ecosystem</h1>
    <div class="text-lg text-blue-600">We aim to become a leader on estimated market of $410.1B CSR software by 2032</div>
  </div>
  <div class="flex flex-1 gap-6">
    <!-- Current Solutions -->
    <div class="w-1/2 space-y-3" v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
      <!-- Benevity -->
      <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-3">
          <img src="/images/benevity.png" class="w-24 h-6 object-contain" alt="Benevity"/>
          <div class="text-sm font-medium text-gray-600">CSR Platform</div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              Enterprise-only ($100k+)
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              Complex implementation
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              3-4 months donation delays
            </div>
          </div>
          <div class="space-y-1 flex flex-col justify-between h-full text-right">
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>68.81% market share</span>
              <span>📈</span>
            </div>
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>$133M revenue</span>
              <span>💰</span>
            </div>
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>CSR Industry leader</span>
              <span>🏆</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Meta -->
      <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-3">
          <img src="/images/meta.svg" class="w-24 h-6 object-contain" alt="Meta"/>
          <div class="text-sm font-medium text-gray-600">General Social Media</div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              Not specialized for impact
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              No social impact optimization
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              High marketing costs
            </div>
          </div>
          <div class="space-y-1 flex flex-col justify-between h-full text-right">
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>98% NGO presence</span>
              <span>📈</span>
            </div>
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>$6B ads spend by non-profits</span>
              <span>💰</span>
            </div>
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>Largest reach</span>
              <span>🌎</span>
            </div>
          </div>
        </div>
      </div>
      <!-- GoFundMe -->
      <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-3">
          <img src="/images/gofundme.png" class="w-24 h-6 object-contain" alt="GoFundMe"/>
          <div class="text-sm font-medium text-gray-600">Fundraising Platform</div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              Limited fundraisers featured
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              Limited impact tracking
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="text-amber-500">⚠️</span>
              Transaction fees (2.9%)
            </div>
          </div>
          <div class="space-y-1 flex flex-col justify-between h-full text-right">
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>47% market share</span>
              <span>📈</span>
            </div>
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>$55M revenue</span>
              <span>💰</span>
            </div>
            <div class="flex items-center gap-2 text-green-600 justify-end">
              <span>Fundraising industry leader</span>
              <span>🏆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Our Ecosystem -->
    <div class="w-1/2 space-y-3" v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
      <!-- DopomogAI -->
      <div class="bg-gradient-to-br from-blue-100 to-white rounded-lg p-4 border border-blue-200 shadow-sm">
        <div class="flex items-center gap-3 mb-1">
          <img src="/images/dopomogai.svg" class="w-50" alt="DopomogAI"/>
          <div class="text-sm font-medium text-blue-600">Your AI Impact Partner</div>
        </div>
        <div class="grid grid-cols-[1fr] gap-2 text-xs text-gray-600">
          <div class="space-y-1">
            <div>✅ Start from free tier available for everyone</div>
            <div>✅ AI-Automated implementation & processes</div>
            <div>✅ Real-time ROI tracking & instant donations</div>
          </div>
        </div>
      </div>
      <!-- DopomogaHub -->
      <div class="bg-gradient-to-br from-purple-100 to-white rounded-lg p-4 border border-purple-200 shadow-sm">
        <div class="flex items-center gap-3 mb-1">
          <img src="/images/dopomogahub.svg" class="w-50" alt="DopomogaHub"/>
          <div class="text-sm font-medium text-purple-600">Impact-First Social Network</div>
        </div>
        <div class="grid grid-cols-[1fr] gap-2 text-xs text-gray-600">
          <div class="space-y-1">
            <div>✅ Specialized impact platform</div>
            <div>✅ Automated impact optimization & tracking</div>
            <div>✅ AI-powered community & cost-effective marketing</div>
          </div>
        </div>
      </div>
      <!-- Prozbory -->
      <div class="bg-gradient-to-br from-orange-100 to-white rounded-lg p-4 border border-orange-200 shadow-sm">
        <div class="flex items-center gap-3 mb-1">
          <img src="/images/prozbory1.svg" class="w-50" alt="Prozbory"/>
          <div class="text-sm font-medium text-orange-600">Smart Giving Platform</div>
        </div>
        <div class="grid grid-cols-[1fr] gap-2 text-xs text-gray-600">
          <div class="space-y-1">
            <div>✅ Fundraisers and non-profits aggregation</div>
            <div>✅ Smart campaign distribution & analytics</div>
            <div>✅ Zero-fee donations</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-black;
  padding: 0;
}
</style>

---
src: ./pages/growth-path.md
---

---
src: ./pages/team.md
---

---
layout: default
background: '#000'
---
<div class="relative h-full bg-white text-gray-800 overflow-hidden">
  <!-- Фоновий градієнт -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent"/>
  
  <!-- Основний контент -->
  <div class="relative h-full flex flex-col px-24 py-1">
    <!-- Заголовок -->
    <div class="mb-16" v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1 }">
      <h1 class="text-[8rem] font-black leading-none tracking-tight">
        <span class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1.5">Ready for Global Impact</span>
      </h1>
    </div>
    <!-- Сітка -->
    <div class="grid grid-cols-12 gap-8 flex-1">
      <!-- Why Now -->
      <div class="col-span-4 space-y-6" v-motion :initial="{ x: -40, opacity: 0 }" :enter="{y:-30, x: 0, opacity: 1, delay: 200 }">
        <div class="text-xs font-medium tracking-widest text-blue-600 uppercase">Why Now</div>
        <div class="space-y-6">
          <div class="group">
            <div class="text-5xl mb-3 opacity-40 group-hover:opacity-100 transition-opacity">🚀</div>
            <div class="text-xl font-medium text-gray-800">Working MVP</div>
            <div class="text-gray-600">Prozbory & DopomogAI live</div>
          </div>
          <div class="group">
            <div class="text-5xl mb-3 opacity-40 group-hover:opacity-100 transition-opacity">📈</div>
            <div class="text-xl font-medium text-gray-800">Proven Demand</div>
            <div class="text-gray-600">Growing user traction</div>
          </div>
          <div class="group">
            <div class="text-5xl mb-3 opacity-40 group-hover:opacity-100 transition-opacity">⚡️</div>
            <div class="text-xl font-medium text-gray-800">Tech Ready</div>
            <div class="text-gray-600">AI & blockchain maturity</div>
          </div>
        </div>
      </div>
      <!-- What We Need -->
      <div class="col-span-4 space-y-6" v-motion :initial="{ y: 40, opacity: 0 }" :enter="{ y: -30, opacity: 1, delay: 400 }">
        <div class="text-xs font-medium tracking-widest text-purple-600 uppercase">What We Need</div>
        <div class="space-y-8">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
            <div class="relative p-6 bg-white/90 rounded-lg shadow-sm">
              <div class="text-xl font-medium text-gray-800">Technical Expertise</div>
              <div class="text-gray-600 mt-2">AI development insights</div>
            </div>
          </div>
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
            <div class="relative p-6 bg-white/90 rounded-lg shadow-sm">
              <div class="text-xl font-medium text-gray-800">Network Access</div>
              <div class="text-gray-600 mt-2">Strategic partnership</div>
            </div>
          </div>
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
            <div class="relative p-6 bg-white/90 rounded-lg shadow-sm">
              <div class="text-xl font-medium text-gray-800">Investment Ready</div>
              <div class="text-gray-600 mt-2">Preparation for funding</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Together We Can -->
      <div class="col-span-4 flex flex-col" v-motion :initial="{ x: 40, opacity: 0 }" :enter="{ y:-30, x: 0, opacity: 1, delay: 600 }">
        <div class="text-xs font-medium tracking-widest text-blue-600 uppercase mb-6">Together We Can</div>
        <div class="flex-1 relative">
          <div class="absolute inset-0 bg-white/90 rounded-2xl shadow-sm overflow-hidden">
            <div class="h-full flex flex-col justify-between p-6">
              <div class="space-y-6">
                <div class="flex items-center gap-4 text-gray-600 hover:text-gray-800 transition-colors">
                  <span class="text-4xl">🎯</span>
                  <span class="text-xl">Perfect AI capabilities</span>
                </div>
                <div class="flex items-center gap-4 text-gray-600 hover:text-gray-800 transition-colors">
                  <span class="text-4xl">🇺🇦</span>
                  <span class="text-xl">Scale nationally</span>
                </div>
                <div class="flex items-center gap-4 text-gray-600 hover:text-gray-800 transition-colors">
                  <span class="text-4xl">🇪🇺</span>
                  <span class="text-xl">Enter EU market</span>
                </div>
                <div class="flex items-center gap-4 text-gray-600 hover:text-gray-800 transition-colors">
                  <span class="text-4xl">🌍</span>
                  <span class="text-xl">Transform giving globally</span>
                </div>
              </div>
              <div class="text-sm text-gray-500 italic">The future of social impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Декоративні елементи -->
  <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"/>
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"/>
</div>

<style>
.slidev-layout {
  @apply bg-white;
  padding: 0;
}
</style>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoPlayer = ref(null)
const hasPlayedVideo = ref(false)

const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.playVideo()
  }
}

const handleVideoPlayed = () => {
  hasPlayedVideo.value = true
}

// Блокуємо навігацію слайдів
if (typeof document !== 'undefined') {
  const handleKeydown = (e) => {
    if (!hasPlayedVideo.value && (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      playVideo()
    }
  }
  
  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
}
</script>

