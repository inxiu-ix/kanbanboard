<template>
  <div class="cardholder">
    <p>{{ card.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:['card']
};
</script>

<style></style>
