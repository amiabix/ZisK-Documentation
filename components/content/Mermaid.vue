<template>
  <div ref="container" class="mermaid-diagram" />
</template>

<script setup>
const props = defineProps({
  graph: {
    type: String,
    required: true,
  },
})

const container = ref(null)

onMounted(async () => {
  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    flowchart: { useMaxWidth: true },
  })
  const id = 'mermaid-' + Math.random().toString(36).slice(2, 11)
  const { svg } = await mermaid.render(id, props.graph)
  container.value.innerHTML = svg
})
</script>

<style scoped>
.mermaid-diagram {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}
</style>
