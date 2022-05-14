<template>
  <div class="container">
    <div class="wrapper">
      <div class="label">Регистрация</div>
      <b-form-input v-model="email" type="text" placeholder="Введите почту"></b-form-input>
      <b-form-input v-model="password" type="password" placeholder="Введите пароль"></b-form-input>
      <b-form-input v-model="password2" type="password" placeholder="Повторите пароль"></b-form-input>
      <div class="buttons">
        <b-button class="login"  @click="signup" variant="success">Зарегестрироваться</b-button>
        <b-button @click="() => this.$emit('toggleShow')">Войти</b-button>
      </div>
    </div>
    <b-alert :show="isError" class="alert" variant="danger">Ошибка авторизации</b-alert>
  </div>
</template>

<script>
import { logger } from '@/helpers/logger'

export default {
  name: 'Signup',
  props: {
    msg: String
  },
  data: () => ({
    email: '',
    password: '',
    password2: '',
    isError: false
  }),
  methods: {
    async signup () {
      if (this.password !== this.password2) {
        this.showAlert()
      }

      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('signup', formData)
        this.$router.push('/')
        logger(this.$store.getters.getEmail, 'Регистрация', this.$store.getters.getEmail)
      } catch (e) {
        this.showAlert()
      }
    },
    showAlert () {
      this.isError = true
      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.isError = false, 2000)
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.wrapper {
  height: calc(100vh - 100px);
  background-color: #AF7AC4;
  display: flex;
  gap: 24px;
  box-sizing: border-box;
  padding: 24px 70px;
  flex-direction: column;
  align-items: center;
}
.label {
  width: 100%;
  font-size: 22px;
  font-weight: bolder;
  color: black;
  margin-top: 50px;
}

.buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.login {
  background-color: #8E44AD;
  border: none;
  outline: none;
}

.login:hover, .login:focus {
  background-color: #9a3fbe;
}

.login:focus {
  background-color: #9a3fbe;
}

.alert {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
}

</style>
