---
layout: default
background: '#fff'
---

<div class="flex flex-col h-full bg-white text-gray-800 px-12 py-8">
  <!-- Заголовок -->
  <div class="mb-8" v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }">
    <h1 class="text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">Growth Path</h1>
  </div>
  <div class="grid grid-cols-3 gap-6 flex-1">
    <!-- Current Status -->
    <div class="bg-gradient-to-br from-green-100 to-transparent rounded-xl p-5 border border-green-200">
      <h2 class="text-2xl font-bold text-green-600 mb-4">Current Status</h2>
      <!-- Prozbory Stats -->
      <div class="mb-5">
        <div class="flex items-center mb-2">
          <div class="text-gray-600">Metrics</div>
          <img src="/images/prozbory1.svg" class="h-6" alt="Prozbory"/>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="bg-green-50 rounded-lg p-2 text-center">
            <div class="text-xl font-bold text-green-600">119</div>
            <div class="text-xs text-gray-500">Fundraisers</div>
          </div>
          <div class="bg-green-50 rounded-lg p-2 text-center">
            <div class="text-xl font-bold text-green-600">21</div>
            <div class="text-xs text-gray-500">Volunteers</div>
          </div>
          <div class="bg-green-50 rounded-lg p-2 text-center">
            <div class="text-xl font-bold text-green-600">7.5M+</div>
            <div class="text-xs text-gray-500">UAH</div>
          </div>
        </div>
      </div>
      <!-- DopomogAI -->
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-2">
          <div class="text-gray-600">Features</div>
          <img src="/images/dopomogai2.svg" class="h-6" alt="DopomogAI"/>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1.5 text-sm">
            <span class="text-green-500">✓</span>
            <span class="text-gray-600">Live Avatar Interactions</span>
          </div>
          <div class="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1.5 text-sm">
            <span class="text-green-500">✓</span>
            <span class="text-gray-600">Real-time Conversations</span>
          </div>
          <div class="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1.5 text-sm">
            <span class="text-green-500">✓</span>
            <span class="text-gray-600">Social Media Presence</span>
          </div>
        </div>
      </div>
      <!-- Grant Info -->
      <div class="bg-green-50 rounded-lg px-3 py-2 text-center">
        <div class="text-sm text-green-600">$20K Grant Secured</div>
      </div>
    </div>
    <!-- In Development & 6-Month Goals -->
    <div class="bg-gradient-to-br from-blue-100 to-transparent rounded-xl p-5 border border-blue-200">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-blue-600">6-Month Goals</h2>
        <div class="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-600">$81K</div>
      </div>
      <div class="space-y-3">
        <div class="bg-blue-50 rounded-lg p-3">
          <div class="text-gray-700 font-medium">🇺🇦 National Coverage</div>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 text-sm">
            <span class="text-blue-500">→</span>
            <span class="text-gray-600">Majority UA fundraisers and non-profits</span>
          </div>
          <div class="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 text-sm">
            <span class="text-blue-500">→</span>
            <span class="text-gray-600">30+ impact partners</span>
          </div>
          <div class="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 text-sm">
            <span class="text-blue-500">→</span>
            <span class="text-gray-600">1.5B+ Impact Points</span>
          </div>
        </div>
        <div class="bg-blue-50 rounded-lg p-3">
          <div class="text-gray-700 font-medium mb-3">Full suit development</div>
          <div class="flex">
            <img src="/images/dopomogahub2.svg" class="h-6" />
            <img src="/images/dopomogai2.svg" class="h-6" />
          </div>
        </div>
      </div>
    </div>
    <!-- European Expansion -->
    <div class="bg-gradient-to-br from-purple-100 to-transparent rounded-xl p-5 border border-purple-200">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-purple-600">European Expansion</h2>
        <div class="px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-600">2025</div>
      </div>
      <div class="text-3xl font-bold text-gray-800">$900K</div>
      <div class="text-sm text-gray-600 mb-4">investment needed</div>
      <div class="space-y-2">
        <div class="bg-purple-50 rounded-lg p-3 text-center">
          <div class="text-gray-700 text-xl">🎯 Market Entry</div>
        </div>
        <div class="bg-purple-50 rounded-lg p-3 text-center">
          <div class="text-gray-700 text-xl">👥 Team Scaling</div>
        </div>
        <div class="bg-purple-50 rounded-lg p-3 text-center">
          <div class="text-gray-700 text-xl">🌍 EU Presence</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-white;
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
}
.slidev-page {
  background: white !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
