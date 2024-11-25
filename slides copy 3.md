---
theme: apple-basic
background: '#000'
class: 'text-center'
transition: slide-left
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
mdc: true
---

<!-- Головний контейнер -->
<div class="flex h-full bg-black">
  <!-- Ліва колонка -->
  <div class="w-1/2 flex flex-col items-start pl-16 pr-8 relative">
    <!-- Заголовок -->
    <div class="relative z-10 mb-6" v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300, duration: 800 } }">
      <h1 class="text-5xl font-black tracking-tight text-white mb-3">AI-Powered</h1>
      <h2 class="text-4xl font-bold">
        <span class="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Social Impact Ecosystem</span>
      </h2>
    </div>
    <!-- Картки проектів -->
    <div class="relative z-10 space-y-2" v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 800 } }">
      <!-- DopomogAI -->
      <div class="group hover:scale-105 transition-transform duration-300">
        <div class="bg-indigo-300 p-6 rounded-2xl border border-indigo-700 hover:border-indigo-500/50 transition-colors">
          <div class="flex flex-col items-start space-y-1">
            <img src="/images/dopomogai.svg" class="h-12 object-contain" alt="DopomogAI Logo"/>
            <p class="text-black text-base text-center mt-2">Your Impact Partner</p>
          </div>
        </div>
      </div>
      <!-- DopomogaHub -->
      <div class="group hover:scale-105 transition-transform duration-300">
        <div class="bg-purple-300 p-6 rounded-2xl border border-purple-700 hover:border-purple-500/50 transition-colors">
          <div class="flex flex-col items-start space-y-1">
            <img src="/images/dopomogahub.svg" class="h-12 object-contain" alt="DopomogaHub Logo"/>
            <p class="text-black text-base text-left mt-2">Impact-First Social Network</p>
          </div>
        </div>
      </div>
      <!-- Prozbory -->
      <div class="group hover:scale-105 transition-transform duration-300">
        <div class="bg-orange-100 p-6 rounded-2xl border border-orange-700 hover:border-orange-500/50 transition-colors">
          <div class="flex flex-col items-start space-y-1">
            <img src="/images/prozbory1.svg" class="h-12 object-contain" alt="Prozbory Logo"/>
            <p class="text-black text-base text-left mt-2">Smart Giving Platform</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  <!-- Права колонка -->
  <div class="w-1/2 flex items-center justify-end py-12 pr-16">
    <div class="relative w-full max-w-[360px] aspect-[3/4] group cursor-pointer" v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 1200, duration: 800 } }">
      <img src="/images/dopomogai-preview.png" class="w-full h-full object-cover rounded-2xl" alt="Avatar"/>
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-2xl flex items-center justify-center">
        <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
          <div class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"/>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Глобальні стилі -->
<style>
.slidev-layout {
  @apply bg-black;
  padding: 0;
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
background: '#000'
---

<div class="flex h-full bg-black text-white px-16 py-8">
  <!-- Заголовок -->
  <div class="absolute top-8 left-16" v-motion :initial="{ y: -50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-6xl font-black tracking-tight bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">Meet Your AI Impact Team</h1>
  </div>
  <div class="flex w-full pt-20">
    <!-- Ліва колонка з Corporin -->
    <div class="w-2/3 pr-3" v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ y: -15, x: 0, opacity: 1, transition: { delay: 400 } }">
      <div class="bg-zinc-900/50 rounded-3xl p-6 border border-zinc-800 hover:border-indigo-500/50 transition-all">
        <!-- Corporin Avatar & Info -->
        <div class="border-2 border-indigo-500 p-4 rounded-3xl">
          <div class="flex items-start gap-8">
            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shrink-0 overflow-hidden">
              <img src="/images/corporin.gif" class="w-full h-full rounded-full object-cover" alt="Corporin"/>
            </div>
            <div>
              <h2 class="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mt-6 mb-2">Corporin</h2>
              <p class="text-xl text-zinc-400">Your Strategic AI Partner</p>
            </div>
          </div>
        </div>
        <!-- Capabilities -->
        <div class="mt-6 grid grid-cols-2 gap-6">
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">🎯</div>
            <div class="text-zinc-200">Corporate social strategy optimization</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">📊</div>
            <div class="text-zinc-200">Smart campaign management</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">✍️</div>
            <div class="text-zinc-200">AI-powered content creation</div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="text-3xl group-hover:scale-125 transition-transform">📈</div>
            <div class="text-zinc-200">Impact analytics with ROI</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Права колонка - Game style -->
    <div class="w-1/3 pl-8 pt-4">
      <!-- Active Character -->
      <div class="relative mb-4">
        <div class="flex items-center bg-gradient-to-r from-blue-500/20 to-transparent p-2 rounded-lg border border-blue-500/30" v-motion :initial="{opacity: 0 }" :enter="{ y: -27, opacity: 1, transition: { delay: 200 } }">
          <img src="/images/dopomogai.gif" class="w-12 h-12 rounded-full border-2 border-blue-500" alt="DopomogAI"/>
          <div class="ml-3">
            <div class="text-lg font-bold text-blue-200">DopomogAI</div>
            <div class="text-xs text-blue-400">AI Team Leader</div>
          </div>
          <div class="ml-auto">
            <div class="px-2 py-0.5 bg-blue-500/20 rounded-full text-[10px] font-medium text-blue-200">ACTIVE</div>
          </div>
        </div>
      </div>
      <!-- Locked Characters -->
      <div class="space-y-2" v-motion :initial="{opacity: 0 }" :enter="{ y: -27, opacity: 1, transition: { delay: 200 } }">
        <!-- Donna -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-900/50 border border-purple-500/20">
            <div class="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center">
              <span class="text-lg opacity-50">🎁</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-400">Donna</div>
              <div class="text-[10px] text-zinc-500">Donor Guide</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-500">LEVEL 1</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Fundessa -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-900/50 border border-blue-500/20">
            <div class="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
              <span class="text-lg opacity-50">💰</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-400">Fundessa</div>
              <div class="text-[10px] text-zinc-500">Nonprofit Expert</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-500">LEVEL 2</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Voluntine -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-900/50 border border-green-500/20">
            <div class="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center">
              <span class="text-lg opacity-50">🤝</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-400">Voluntine</div>
              <div class="text-[10px] text-zinc-500">Volunteer Support</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-500">LEVEL 3</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Influerra -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-900/50 border border-pink-500/20">
            <div class="w-8 h-8 rounded-full bg-pink-900/30 flex items-center justify-center">
              <span class="text-lg opacity-50">🎭</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-400">Influerra</div>
              <div class="text-[10px] text-zinc-500">Influencer's Partner</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-500">LEVEL 4</div>
              <span class="text-xs">🔒</span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity"/>
        </div>
        <!-- Activat -->
        <div class="relative group">
          <div class="flex items-center p-2 rounded bg-zinc-900/50 border border-orange-500/20">
            <div class="w-8 h-8 rounded-full bg-orange-900/30 flex items-center justify-center">
              <span class="text-lg opacity-50">🎯</span>
            </div>
            <div class="ml-3 leading-none">
              <div class="text-sm font-medium text-zinc-400">Activat</div>
              <div class="text-[10px] text-zinc-500">Mission Creator</div>
            </div>
            <div class="ml-auto flex items-center gap-1">
              <div class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-500">LEVEL 5</div>
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
    <div class="bg-zinc-900/80 rounded-2xl p-2.1 border border-zinc-800">
      <div class="flex items-center justify-between">
        <div class="text-sm text-zinc-500">Each Agent's Superpower</div>
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
        <div class="pl-3 text-sm text-zinc-500">& work together</div>
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
layout: center
background: '#000'
---

<div class="relative w-full h-full flex items-center justify-center">
  <div class="relative w-[960px] aspect-video rounded-2xl overflow-hidden group cursor-pointer">
    <img src="/images/dopomogai.gif" class="w-full h-full object-cover" alt="Video Preview"/>
    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
      <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"/>
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

 <div class="flex flex-row h-full bg-black text-white px-16 py-12">
   <!-- Ліва колонка (2/3) -->
   <div class="w-2/3 pr-12">
     <!-- Заголовок -->
     <div class="mb-8" v-motion :initial="{ y: -50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
       <h1 class="text-6xl font-black tracking-tight bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent mb-2">Transform Giving into Growth</h1>
     </div>
     <!-- Impact Cofounder Card -->
     <div class="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 border border-indigo-500/30" 
       v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
       <div class="flex justify-between items-start mb-6">
         <div>
           <h2 class="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Impact Cofounder</h2>
           <div class="text-zinc-400 mt-1">Only 3 seats available</div>
         </div>
         <div class="text-right">
           <div class="text-3xl font-bold text-white">$4,500<span class="text-lg font-normal">/month</span></div>
           <div class="text-zinc-400">or $36,000/year (33% off)</div>
         </div>
       </div>
       <!-- Features Grid -->
       <div class="grid grid-cols-3 gap-6">
         <!-- Dedicated Team -->
         <div class="space-y-3">
           <h3 class="text-lg font-semibold text-indigo-300">Dedicated Human & AI Team</h3>
           <div class="space-y-2 text-sm text-zinc-400">
             <div class="flex items-center gap-2">
               <span class="text-indigo-500">✓</span>
               Maximum Impact Visibility
             </div>
             <div class="flex items-center gap-2">
               <span class="text-indigo-500">✓</span>
               Featured success stories
             </div>
             <div class="flex items-center gap-2">
               <span class="text-indigo-500">✓</span>
               Priority media coverage
             </div>
           </div>
         </div>
         <!-- Strategic Partnership -->
         <div class="space-y-3">
           <h3 class="text-lg font-semibold text-purple-300">Strategic Partnership</h3>
           <div class="space-y-2 text-sm text-zinc-400">
             <div class="flex items-center gap-2">
               <span class="text-purple-500">✓</span>
               Co-founder recognition
             </div>
             <div class="flex items-center gap-2">
               <span class="text-purple-500">✓</span>
               Custom impact programs
             </div>
             <div class="flex items-center gap-2">
               <span class="text-purple-500">✓</span>
               Product development input
             </div>
           </div>
         </div>
         <!-- Business Growth -->
         <div class="space-y-3">
           <h3 class="text-lg font-semibold text-blue-300">Business Growth</h3>
           <div class="space-y-2 text-sm text-zinc-400">
             <div class="flex items-center gap-2">
               <span class="text-blue-500">✓</span>
               Maximum brand exposure
             </div>
             <div class="flex items-center gap-2">
               <span class="text-blue-500">✓</span>
               Network effect benefits
             </div>
             <div class="flex items-center gap-2">
               <span class="text-blue-500">✓</span>
               Deep impact analytics
             </div>
           </div>
         </div>
       </div>
     </div>
     <!-- Bottom Banner -->
     <div class="mt-3 text-center text-m text-zinc-400" v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 800 } }">
       Shape the future of social impact as 1/3 co-founding partners
     </div>
   </div>
   <!-- Права колонка (1/3) -->
   <div class="w-1/3 pl-12 space-y-6" v-motion :initial="{ x: 50, opacity: 0 }" :enter="{ y: -33, x: 0, opacity: 1, transition: { delay: 600 } }">
     <div class="text-2xl font-bold mb-3">Coming Soon:</div>
     <!-- Free Tier -->
     <div class="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
       <h3 class="text-xl font-bold mb-3">Free Tier</h3>
       <div class="space-y-2 text-sm text-zinc-400">
         <div>✓ Public Company Profile</div>
         <div>✓ Basic impact tracking</div>
         <div>✓ Impact Programs access</div>
       </div>
       <div class="mt-3 text-xs text-zinc-500">Pay for your growth</div>
     </div>
     <!-- Impact Partner -->
     <div class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30">
       <div class="flex justify-between items-start mb-4">
         <h3 class="text-xl font-bold">Impact Partner</h3>
         <div class="text-xl font-bold">$699<span class="text-sm font-normal">/month</span></div>
       </div>
       <div class="space-y-2 text-sm text-zinc-300">
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
  padding: 0;
}
</style>

---
layout: default
background: '#000'
---

<div class="flex flex-col h-full bg-black text-white px-12 py-8">
  <!-- Компактний заголовок -->
  <div class="mb-6" v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent mb-1">New Category - AI-Powered Impact Ecosystem</h1>
    <div class="text-lg text-blue-400">We aim to become a leader on estimated market of $410.1B CSR software by 2032</div>
  </div>
  <div class="flex flex-1 gap-6">
    <!-- Current Solutions -->
    <div class="w-1/2 space-y-3" v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
      <!-- Benevity -->
      <div class="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
        <div class="flex items-center justify-between gap-3 mb-3">
          <img src="/images/benevity.png" class="w-24 h-6 object-contain" alt="Benevity"/>
          <div class="text-sm font-medium text-zinc-300">CSR Platform</div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              Enterprise-only ($100k+)
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              Complex implementation
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              3-4 months donation delays
            </div>
          </div>
          <div class="space-y-1 flex flex-col justify-between h-full text-right">
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>68.81% market share</span>
              <span>📈</span>
            </div>
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>$133M revenue</span>
              <span>💰</span>
            </div>
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>CSR Industry leader</span>
              <span>🏆</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Meta -->
      <div class="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
        <div class="flex items-center justify-between gap-3 mb-3">
          <img src="/images/meta.svg" class="w-24 h-6 object-contain" alt="Meta"/>
          <div class="text-sm font-medium text-zinc-300">General Social Media</div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              Not specialized for impact
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              No social impact optimization
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              High marketing costs
            </div>
          </div>
          <div class="space-y-1 flex flex-col justify-between h-full text-right">
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>98% NGO presence</span>
              <span>📈</span>
            </div>
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>$6B ads spend by non-profits</span>
              <span>💰</span>
            </div>
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>Largest reach</span>
              <span>🌎</span>
            </div>
          </div>
        </div>
      </div>
      <!-- GoFundMe -->
      <div class="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
        <div class="flex items-center justify-between gap-3 mb-3">
          <img src="/images/gofundme.png" class="w-24 h-6 object-contain" alt="GoFundMe"/>
          <div class="text-sm font-medium text-zinc-300">Fundraising Platform</div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              Limited fundraisers featured
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              Limited impact tracking
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
              <span class="text-amber-500">⚠️</span>
              Transaction fees (2.9%)
            </div>
          </div>
          <div class="space-y-1 flex flex-col justify-between h-full text-right">
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>47% market share</span>
              <span>📈</span>
            </div>
            <div class="flex items-center gap-2 text-green-400 justify-end">
              <span>$55M revenue</span>
              <span>💰</span>
            </div>
            <div class="flex items-center gap-2 text-green-400 justify-end">
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
      <div class="bg-gradient-to-br from-blue-200 to-transparent rounded-lg p-4 border border-blue-500/30">
        <div class="flex items-center gap-3 mb-1">
          <img src="/images/dopomogai.svg" class="w-50" alt="DopomogAI"/>
          <div class="text-sm font-medium text-blue-300">Your AI Impact Partner</div>
        </div>
        <div class="grid grid-cols-[1fr] gap-2 text-xs text-zinc-300">
          <div class="space-y-1">
            <div>✅ Start from free tier available for everyone</div>
            <div>✅ AI-Automated implementation & processes</div>
            <div>✅ Real-time ROI tracking & instant donations</div>
          </div>
        </div>
      </div>
      <!-- DopomogaHub -->
      <div class="bg-gradient-to-br from-purple-300 to-transparent rounded-lg p-4 border border-purple-500/30">
        <div class="flex items-center gap-3 mb-1">
          <img src="/images/dopomogahub.svg" class="w-50" alt="DopomogaHub"/>
          <div class="text-sm font-medium text-purple-300">Impact-First Social Network</div>
        </div>
        <div class="grid grid-cols-[1fr] gap-2 text-xs text-zinc-300">
          <div class="space-y-1">
            <div>✅ Specialized impact platform</div>
            <div>✅ Automated impact optimization & tracking</div>
            <div>✅ AI-powered community & cost-effective marketing</div>
          </div>
        </div>
      </div>
      <!-- Prozbory -->
      <div class="bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg p-4 border border-orange-500/30">
        <div class="flex items-center gap-3 mb-1">
          <img src="/images/prozbory.svg" class="w-50" alt="Prozbory"/>
          <div class="text-sm font-medium text-orange-300">Smart Giving Platform</div>
        </div>
        <div class="grid grid-cols-[1fr] gap-2 text-xs text-zinc-300">
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