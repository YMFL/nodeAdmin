<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>

import { getTest } from '@/api/user'

export default {
  name: 'Dashboard',
  data(){
    return {
      name:''
    }
  },
  computed: {
  },
  mounted() {
    this.getTest()
  },
  methods: {
    async getTest() {
      let res = await getTest()
      if(res.code===1){
        this.name=res.data.userInfo.username
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
