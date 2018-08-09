<template>
  <div>
    <expense-input
      @addExpense="addExpense">
    </expense-input>
    <expense-item
      v-for="item in expenseList"
      :key="item.id"
      :item="item"
      @deleteExpense="deleteExpense">
    </expense-item>

  </div>
</template>

<script>
  import ExpenseItem from './ExpenseItem'
  import ExpenseInput from './ExpenseInput'
  import store from '../vuex/store'
export default {
  name: "ExpenseList",
  components: {
    ExpenseItem,
    ExpenseInput
  },
  data() {
    return {
      expenseList: []

      /** comment the default entry */
      /*[{
        id: 1,
        date: '2017-11-01',
        expense: 13
      }]*/
    }
  },
  /** not editing the addExpense and deleteExpense method, or else we can register two
   * actions for different method. For simplification using the one action
   * */
  methods: {
    addExpense: function(payload) {
      this.expenseList.push(payload);
      this.updateList();
    },
    deleteExpense: function(id) {
      let index = this.expenseList.map(function(item) {
        return item.id
      }).indexOf(id);
      this.expenseList.splice(index, 1);
    },
    updateList: function () {
      let accumList = this.expenseList.reduce((count,ele) => {
          count[ele.date] = (count[ele.date] || 0) + parseInt(ele.expense);
          return count},
        {})
      store.commit('updateExpList',accumList)
    }
  }
}
</script>

<style scoped>

</style>
