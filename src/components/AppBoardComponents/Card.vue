<template>
  <div class="cardholder">
    <p class="cardholder__id">id: {{cardSeqNum}}</p>
    <p class="cardholder__text">{{ card.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  computed: {
    cardSeqNum() {
      return this.card.seq_num
    }
  },
  
};
</script>

<style>
.cardholder__id {
  text-align: start;
  font-size: 13px;
  color: white;
}
.cardholder__text {
  font-size: 14px;
  text-align: start;
  padding: 0;
  margin: 0;
  color: #bfb8b2;
}
.cardholder {
  box-sizing: border-box;
  margin: 0;
  padding: 10px 15px;
  margin: 10px 10px;
  min-height: 100px;
  background-color: #191a1d;
}

.cardholder:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
}
</style>
