<script setup lang="ts">
import "@picocss/pico"

const messages = ref<string[]>([])

onMounted(() => {
  const es = new EventSource("http://localhost:3000/api/sse")

  es.onmessage = (event) => {
    messages.value.push(JSON.parse(event.data))
  }
})

const handleClick = () => {
  $fetch("/api/broadcast")
}
</script>

<template>
  <div>
    <div>
      <ul>
        <li v-for="message in messages" :key="message">
          {{ message }}
        </li>
      </ul>
    </div>

    <div style="position: fixed; bottom: 0; width: 100%">
      <button @click="handleClick">New</button>
    </div>
  </div>
</template>
