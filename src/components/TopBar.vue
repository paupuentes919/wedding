<template>
  <div class="flex items-center justify-between mb-4 flex-wrap gap-3 pt-6">
    <div class="top-pill shadow-sm text-sm">
      <span class="seal-dot"></span>
      <div class="flex items-center gap-2">
        <span class="font-semibold">{{ copy.topBrand }}</span>
        <span class="text-xs">ARG ✈️ USA</span>
      </div>
    </div>

    <span class="top-pill status-pill" v-html="statusPill"></span>
  </div>
</template>

<script setup>
defineProps({
  copy: { type: Object, required: true },
  statusPill: { type: String, required: true },
});
</script>
