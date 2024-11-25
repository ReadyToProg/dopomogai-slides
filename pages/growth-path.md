---
layout: default
background: '#000'
---

<div class="flex flex-col h-full bg-black text-white px-12 py-8">
  <!-- Заголовок -->
  <div class="mb-8" v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">Growth Path</h1>
  </div>
  <div class="grid grid-cols-3 gap-6 flex-1">
    <!-- Current Status -->
    <div class="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-5 border border-green-500/30">
      <h2 class="text-2xl font-bold text-green-400 mb-4">Current Status</h2>
      <!-- Prozbory Stats -->
      <div class="mb-5">
        <div class="flex items-center mb-2">
          <div class="text-zinc-300">Metrics</div>
          <img src="/images/prozbory1.svg" class="h-6" alt="Prozbory"/>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="bg-green-500/10 rounded-lg p-2 text-center">
            <div class="text-xl font-bold text-green-400">119</div>
            <div class="text-xs text-zinc-500">Fundraisers</div>
          </div>
          <div class="bg-green-500/10 rounded-lg p-2 text-center">
            <div class="text-xl font-bold text-green-400">21</div>
            <div class="text-xs text-zinc-500">Volunteers</div>
          </div>
          <div class="bg-green-500/10 rounded-lg p-2 text-center">
            <div class="text-xl font-bold text-green-400">7.5M+</div>
            <div class="text-xs text-zinc-500">UAH</div>
          </div>
        </div>
      </div>
      <!-- DopomogAI -->
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-2">
          <div class="text-zinc-300">Features</div>
          <img src="/images/dopomogai1.svg" class="h-6" alt="DopomogAI"/>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-1.5 text-sm">
            <span class="text-green-500">✓</span>
            <span class="text-zinc-400">Live Avatar Interactions</span>
          </div>
          <div class="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-1.5 text-sm">
            <span class="text-green-500">✓</span>
            <span class="text-zinc-400">Real-time Conversations</span>
          </div>
          <div class="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-1.5 text-sm">
            <span class="text-green-500">✓</span>
            <span class="text-zinc-400">Social Media Presence</span>
          </div>
        </div>
      </div>
      <!-- Grant Info -->
      <div class="bg-green-500/10 rounded-lg px-3 py-2 text-center">
        <div class="text-sm text-green-300">$20K Grant Secured</div>
      </div>
    </div>
    <!-- In Development & 6-Month Goals -->
    <div class="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-5 border border-blue-500/30">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-blue-400">6-Month Goals</h2>
        <div class="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">$81K</div>
      </div>
      <div class="space-y-3">
        <div class="bg-blue-500/10 rounded-lg p-3">
          <div class="text-zinc-300 font-medium">🇺🇦 National Coverage</div>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2 bg-blue-500/10 rounded-lg px-3 py-2 text-sm">
            <span class="text-blue-500">→</span>
            <span class="text-zinc-400">Majority UA fundraisers and non-profits</span>
          </div>
          <div class="flex items-center gap-2 bg-blue-500/10 rounded-lg px-3 py-2 text-sm">
            <span class="text-blue-500">→</span>
            <span class="text-zinc-400">30+ impact partners</span>
          </div>
          <div class="flex items-center gap-2 bg-blue-500/10 rounded-lg px-3 py-2 text-sm">
            <span class="text-blue-500">→</span>
            <span class="text-zinc-400">1.5B+ Impact Points</span>
          </div>
        </div>
        <div class="bg-blue-500/10 rounded-lg p-3">
          <div class="text-zinc-300 font-medium mb-3">Full suit development</div>
          <div class="flex">
            <img src="/images/dopomogahub1.svg" class="h-6" />
            <img src="/images/dopomogai1.svg" class="h-6" />
          </div>
        </div>
      </div>
    </div>
    <!-- European Expansion -->
    <div class="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-5 border border-purple-500/30">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-purple-400">European Expansion</h2>
        <div class="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">2025</div>
      </div>
      <div class="text-3xl font-bold text-white">$900K</div>
      <div class="text-sm text-white mb-4">investment needed</div>
      <div class="space-y-2">
        <div class="bg-purple-500/10 rounded-lg p-3 text-center">
          <div class="text-zinc-300 text-xl">🎯 Market Entry</div>
        </div>
        <div class="bg-purple-500/10 rounded-lg p-3 text-center">
          <div class="text-zinc-300 text-xl">👥 Team Scaling</div>
        </div>
        <div class="bg-purple-500/10 rounded-lg p-3 text-center">
          <div class="text-zinc-300 text-xl">🌍 EU Presence</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-black;
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
}
.slidev-page {
  background: black !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style> 
