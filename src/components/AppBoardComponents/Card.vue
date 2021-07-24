<template>
  <div class="cardholder">
    <div class="cardholder__button-container">
    <button @click="() => delCard(card)" class="cardholder__remove-btn">
      x
    </button>
    </div>
    <div class="cardholder__text-container">
      <p class="cardholder__id">id: {{ cardSeqNum }}</p>
      <p class="cardholder__text">{{ card.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Card',
  props: ['card'],
  computed: {
    cardSeqNum() {
      return this.card.seq_num;
    },
  },
  methods: {
    ...mapActions(['removeCard']),
    delCard(card) {
      this.removeCard(card);
    },
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
  margin-right: 5px;
  padding: 0;
  margin: 0;
  color: #bfb8b2;
}

.cardholder__button-container {
  height: 20px;
}

.cardholder__text-container {
 word-wrap: break-word;
  overflow: auto;
  padding: 0 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #1b1c1f;
  border: 1px solid #8e8e8e;
  border-radius: 5px;
}

::-webkit-scrollbar {
  border-radius: 5px;
  background-color: #35383f;
  width: 12px;
}

.cardholder {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 10px 5px;
  margin: 10px 10px;
  min-height: 100px;
  background-color: #191a1d;
  transition: all 0.5s ease-out;
}

.cardholder__remove-btn {
  background-color: #2b2d33;
  padding: 5px 10px;
  font-weight: bold;
  color: #b0b1b2;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.5s ease-out;
}

.cardholder__remove-btn:hover {
  cursor: pointer;
  background-color: rgba(104, 4, 4, 0.8);
}

.cardholder:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
}

@media (max-width: 768px) {
  ::-webkit-scrollbar {
  width: 8px;
}
}
</style>
