<template>
  <div class="board-container">
    <div class="boardholder">
      <RowCards
        v-for="(row, index) in allRows"
        :key="index"
        :row="row"
        :type="index"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RowCards from '@/components/AppBoardComponents/RowCards';

export default {
  name: 'AppBoard',
  components: {
    RowCards,
  },

  computed: {
    ...mapGetters(['allRows']),
  },
  mounted() {
    this.getCards();
  },

  methods: {
    ...mapActions(['getCards']),
  },
};
</script>

<style scoped>
.board-container {
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.boardholder {
  height: 100%;
  flex-grow: 1;
}

::-webkit-scrollbar-thumb {
  background-color: #1b1c1f;
  border: 1px solid #8e8e8e;
  border-radius: 5px;
}

::-webkit-scrollbar {
  border-radius: 5px;
  background-color: #35383f;
  width: 5px;
  height: 5px;
}
</style>
