---
layout: default
background: '#fff'
---

<div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 blur-3xl"></div>

<div class="relative h-screen">
  <!-- Title -->
  <div class="text-center pt-8">
    <h1 class="text-5xl font-bold text-gray-800">Our Team</h1>
  </div>
  <!-- Team Members -->
  <!-- Andrew CEO -->
  <div class="absolute" style="left: 100px; top: 100px;">
    <div class="flex items-start gap-8">
      <img src="/images/Andrew.jpg" class="w-32 h-32 rounded-full object-cover ring-2 ring-green-500/30" alt="Andrew" />
      <div class="space-y-2">
        <div class="text-2xl font-bold text-green-600">Andrew</div>
        <div class="flex items-center gap-2 text-lg text-gray-700">
          CEO
        </div>
        <div class="space-y-1 text-sm text-gray-600 mt-2">
          <div>Startup founder background</div>
          <div>7+ years PM/Product experience</div>
          <div flex items-center gap-2>LvBS Graduate <img src="/images/lvbs.png" class="h-4" alt="LVBS" /></div>
        </div>
      </div>
    </div>
  </div>
  <!-- DopomogAI -->
  <div class="absolute" style="right: 15px; top: 100px;">
    <div class="flex items-start gap-8">
      <img src="/images/dopomogai.gif" class="w-32 h-32 rounded-full object-cover ring-2 ring-blue-500/30" alt="DopomogAI" />
      <div class="space-y-2">
        <div class="text-2xl font-bold text-blue-600">DopomogAI</div>
        <div class="text-lg text-gray-700">AI Team Lead</div>
        <div class="space-y-1 text-sm text-gray-600 mt-2">
          <div>Product Ambassador</div>
          <div>Business Development, Sales and Marketing</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Andrii -->
  <div class="absolute" style="left: 100px; top: 300px;">
    <div class="flex items-start gap-8">
      <img src="/images/AndrewSh.jpg" class="w-32 h-32 rounded-full object-cover ring-2 ring-purple-500/30" alt="Andrii" />
      <div class="space-y-2">
        <div class="text-2xl font-bold text-purple-600">Andrii</div>
        <div class="text-lg text-gray-700">Frontend Lead</div>
        <div class="space-y-1 text-sm text-gray-600 mt-2">
          <div>AI, Social media and Game dev</div>
          <div>9+ years in development</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Max -->
  <div class="absolute" style="right: 105px; top: 300px;">
    <div class="flex items-start gap-8">
      <img src="/images/Max.jpg" class="w-32 h-32 rounded-full object-cover ring-2 ring-purple-500/30" alt="Max" />
      <div class="space-y-2">
        <div class="text-2xl font-bold text-purple-600">Max</div>
        <div class="text-lg text-gray-700">Backend Lead</div>
        <div class="space-y-1 text-sm text-gray-600 mt-2">
          <div>FinTech, AI and bots expertise</div>
          <div>9+ years in development</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Looking for -->
  <div class="absolute bottom-100 right-12 text-gray-500 text-sm">
    Looking for: CTO, CMO, COO
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-white;
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh !important;
  overflow: hidden !important;
}
</style>