<template>
  <div class="mt-6 max-w-3xl mx-auto">
    <div class="flex items-center justify-end gap-3 mb-3">
      <button @click="$emit('load')" class="btn-ghost">
        Ver últimos invitados
      </button>
    </div>
    <div v-if="loadingGuests" class="text-sm text-teal-700">
      Cargando invitados…
    </div>
    <div v-else class="grid gap-2">
      <template v-for="g in guests" :key="g.id">
        <div
          class="text-sm bg-white/60 border border-teal-100 rounded p-2 text-teal-800"
        >
          {{ g.created_at }} — <b>{{ g.first_name }} {{ g.last_name }}</b> —
          {{ g.email || "—" }} — {{ g.attendance }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  guests: { type: Array, required: true },
  loadingGuests: { type: Boolean, required: true },
});
</script>
