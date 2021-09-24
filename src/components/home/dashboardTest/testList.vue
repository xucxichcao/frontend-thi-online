<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Nội dung</h2></span>
    </div>
    <div class="h-panel-body">
      <router-link tag="a" :to="{ name: 'Test detail', params: { testId: 1 } }"
        >Test detail</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
