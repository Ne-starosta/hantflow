<template>
  <div class="wrapper">
    <div class="img">
      <img alt="BackGround Icon" src="../assets/login.jpg">
    </div>
    <div>
      <Login @toggleShow="toggleShowLogin" v-if="isShowLogin"/>
      <Signup @toggleShow="toggleShowLogin" v-else/>
    </div>
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
  max-width: 2000px;
}

.img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
}

.img img {
  width: 100%;
}

</style>
