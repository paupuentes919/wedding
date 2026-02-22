<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Wedding</h1>
      <p class="text-gray-600 mb-6">Starter Vue 3 + Vite project with vue-router and Tailwind CSS.</p>
      <div class="flex gap-4">
        <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
          Explore
        </button>
        <button class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition">
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
