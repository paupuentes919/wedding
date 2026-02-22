<template>
  <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
    <div class="top-pill shadow-sm text-sm">
      <span class="seal-dot"></span>
      <div class="flex items-center gap-2">
        <span class="font-semibold">{{ copy.topBrand }}</span>
        <span class="text-xs">🇦🇷✈️🇺🇸</span>
      </div>
    </div>

    <div class="status-pill">
      <span v-html="statusPill"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  copy: { type: Object, required: true },
  statusPill: { type: String, required: true },
});
</script>
