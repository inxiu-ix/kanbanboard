<template>
<div class="board-container">
  <div class="boardholder__row">
    <div :class="type" class="title">
      {{ `${type} (${totalCard})` }}
    </div>
    <div class="boardholder__content">
      <draggable
      class="dragholder list-group"
      :list="row"
      @change="(event) => checkMove(event, type)"
      group="cards"
    >
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
      <button v-if="!visible" class="add-card-btn" @click="toggleVisibleInput">
      Добавить карточку
    </button>
    </div>
    </div>
    </div>
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
    ...mapActions(['addCardAction', 'updateCard']),

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
    checkMove(event, type) {
      if (event.added) {
        const card = event.added.element;
        this.updateCard({ card, type });
      }
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

.board-container {
  height: 100%;
}

.boardholder__row {
  background-color: #2b2d33;
  box-sizing: border-box;
  width: 300px;
  max-height: 100%;
}

.boardholder__content {
  height: calc(100vh - 150px);
  overflow: auto;
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
  transition: all 0.5s ease-out;
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
  transition: background-color 0.5s ease-out;
}

.input-add:focus {
  outline: none;
  border: 2px solid #3a4d60;
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
  transition: all 0.5s ease-out;
}

.add-card-btn:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
}

@media (max-width: 768px) {
  .boardholder__row {
    box-sizing: border-box;
    min-width: 200px;
  }
  .input-add {
    width: 140px;
    min-width: 140px;
    max-width: 140px;
  }
}

@media (max-width: 576px) {
  .boardholder__row {
    box-sizing: border-box;
    min-width: 180px;
  }
  .input-add {
    width: 120px;
    min-width: 120px;
    max-width: 120px;
  }
  .add-card-btn {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: #2b2d33;
    border: 0;
    text-align: start;
    font-size: 10px;
    color: #b0b1b2;
    transition: all 0.5s ease-out;
  }

  .input-add-btn {
    padding: 7px;
    margin-right: 5px;
    font-size: 10px;
    color: #b0b1b2;
    border: 1px solid #2a3744;
    border-radius: 10px;
    transition: all 0.5s ease-out;
  }
}
</style>
