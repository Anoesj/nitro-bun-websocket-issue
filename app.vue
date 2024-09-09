<template>
  <p>Current status: <strong>{{ status }}</strong></p>
  <p>History:</p>
  <pre>{{ statusHistoryStr }}</pre>
</template>

<script setup lang="ts">
import { useWebSocket, type WebSocketStatus } from '@vueuse/core';

const statusHistory = ref<Array<{
  timestamp: Date;
  status: WebSocketStatus;
}>>([]);

const statusHistoryStr = computed(() => Object.values(statusHistory.value)
  .map((entry) => `${entry.timestamp.toISOString()}: ${entry.status}`)
  .join('\n'));

const { status } = useWebSocket(`ws://${location.host}/api/ws`);

watch(status, (value) => {
  statusHistory.value.push({
    timestamp: new Date,
    status: value,
  });
}, { immediate: true });
</script>

<style>
html, body {
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#__nuxt {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 40px;
  font-size: 1.3rem;
  font-family: system-ui;
}
</style>
