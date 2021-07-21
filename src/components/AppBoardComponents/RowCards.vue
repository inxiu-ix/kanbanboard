<template>
  <div class="boardholder__row">
    <div :class="type" class="title">
      {{ `${type} (${totalCard})` }}
    </div>
    <draggable :list="row" group="cards" class="list-group">
      <Card v-for="card in row" :key="card.id" :card="card" />
    </draggable>
    <div class="input-add-container">
      <textarea class="input-add" v-if="visible" v-model="text"></textarea>
      <p class="input-add-btn-container" v-if="visible">
        <button class="input-add-btn" @click="() => addCard(type)">
          Добавить
        </button>
        <button class="input-add-btn" @click="toggleVisibleInput">
          Отмена
        </button>
      </p>
    </div>

    <button v-if="!visible" class="add-card-btn" @click="toggleVisibleInput">
      Добавить карточку
    </button>
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
      return this.row.length;
    },
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

<style>
.title {
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  color: white;
}

.hold {
  background-color: #e96e43;
}

.progress {
  background-color: #5ca3f2;
}

.review {
  background-color: #f0ee4f;
}

.approved {
  background-color: #2ad141;
}

.boardholder__row {
  background-color: #2b2d33;
  box-sizing: border-box;
  width: 300px;
  min-height: 750px;
}

.input-add-btn-container {
  margin: 0;
}

.input-add-btn {
  background-color: #2b2d33;
  border: 0;
  padding: 10px;
  margin-right: 5px;
  font-size: 15px;
  color: #b0b1b2;
  border: 2px solid #2a3744;
  border-radius: 10px;
}

.input-add-btn:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
}

.input-add {
  background-color: rgba(122, 122, 122, 0.2);

  border-radius: 5px;
  border: 2px solid #2a3744;
  padding: 10px 20px;
  color: #b0b1b2;
  width: 233px;
  min-height: 33px;
  min-width: 233px;
  max-width: 233px;
  margin-top: 10px;
}

.input-add:focus {
  outline: none;
  border: 2px solid #3a4d60
}

.add-card-btn {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 15px 20px;
  background-color: #2b2d33;
  border: 0;
  text-align: start;
  font-size: 15px;
  color: #b0b1b2;
}

.add-card-btn:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
}
</style>
