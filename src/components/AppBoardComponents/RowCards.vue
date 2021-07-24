<template>
  <div class="boardholder__column">
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
        <button
          v-if="!visible"
          class="add-card-btn"
          @click="toggleVisibleInput"
        >
          Добавить карточку
        </button>
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

.boardholder__column {
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  background-color: #2b2d33;
  overflow: hidden;
}

.boardholder__content {
  height: calc(100% - 60px);
  overflow: auto;
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


 ::-webkit-scrollbar-thumb {
  background-color: #1b1c1f;
  border: 1px solid #8e8e8e;
  border-radius: 5px;
}

::-webkit-scrollbar {
  border-radius: 5px;
  background-color: #35383f;
  width: 8px;
}

.title {
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  color: white;
  text-align: center;
  font-weight: bold;
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

.input-add {
  background-color: rgba(122, 122, 122, 0.2);

  border-radius: 5px;
  border: 2px solid #2a3744;
  padding: 10px 20px;
  color: #b0b1b2;
  width: 260px;
  min-height: 33px;
  min-width: 260px;
  max-width: 260px;
  margin-top: 10px;
  margin-left: 3px;
  transition: background-color 0.5s ease-out;
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


@media(min-width: 1200px) {
.input-add-btn:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
}



.input-add:focus {
  outline: none;
  border: 2px solid #3a4d60;
}



.add-card-btn:hover {
  cursor: pointer;
  background-color: rgba(122, 122, 122, 0.2);
} 

.boardholder__column {
  margin: 0 55px;
}
.board-container {
  padding-top: 30px;
}

}

</style>
