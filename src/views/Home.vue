<template>
  <div class="wrapper">
    <div class="img">
      <img alt="BackGround Icon" src="../assets/login.jpg">
    </div>
    <Login @toggleShow="toggleShowLogin" v-if="isShowLogin"/>
    <Signup @toggleShow="toggleShowLogin" v-else/>
  </div>
</template>

<script>
// @ is an alias to /src

import Login from '@/components/Login'
import Signup from '@/components/Signup'

export default {
  name: 'Home',
  components: {
    Login,
    Signup
  },
  data: () => ({
    isShowLogin: true
  }),
  methods: {
    toggleShowLogin () {
      this.isShowLogin = !this.isShowLogin
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  height: calc(100vh - 100px);
}

.img {
  margin-top: 50px;
}

</style>
