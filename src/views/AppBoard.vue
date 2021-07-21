<template>
  <div class="boardholder">
    <RowCards 
    v-for="(row, index) in allRows" 
    :key="index"
    :row="row"
    :type="index"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RowCards from '@/components/AppBoardComponents/RowCards'

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
.boardholder {
  box-sizing: border-box;
  padding: 50px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .boardholder {
    padding: 0;
    max-width: 768;
  }
}
</style>
