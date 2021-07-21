<template>
  <div class="boardholder__row">
    <div class="title">
      {{ `${type} (${totalCard})` }}
      </div>
    <draggable :list="row" group="cards" class="list-group">
      <Card v-for="card in row" :key="card.id" :card="card" />
      <input v-if="visible" v-model="text" />
      <button @click="() => addCard(type)">Add card</button>
    </draggable>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Card from '@/components/AppBoardComponents/Card';
import draggable from 'vuedraggable';

export default {
  name: 'RowCards',
  props: ['row', 'type'],
  components: {
    Card,
    draggable,
  },
  data() {
    return {
      visible: false,
      text: '',
    };
  },
  computed: {
    totalCard() {
      return this.row.length
    }
  },
  methods: {
    ...mapActions(['addCardAction']),

    addCard(type) {
      this.toggleVisibleInput();
      const data = {
        text: this.text,
        row: type,
      };
      this.validateInputValue() && this.addCardAction(data);
      this.clearInput();
    },

    clearInput() {
      this.text = '';
    },

    toggleVisibleInput() {
      this.visible = !this.visible;
    },

    validateInputValue() {
      return !!this.text.trim().length;
    },
  },
};
</script>

<style></style>
