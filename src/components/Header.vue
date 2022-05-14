<template>
  <div class="wrapper">
    <div id="nav">
      <div class="logo">
        MATRIX
      </div>
      <router-link to="/vacancies">Вакансии</router-link>
      <router-link to="/candidates">Кандидаты</router-link>
      <router-link to="/logs">Логи</router-link>
    </div>
    <div>
      {{$store.getters.getEmail}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  border-bottom: 2px solid #8E44AD;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  font-size: 24px;
  color: #8E44AD;
  font-weight: bolder;
  margin-right: 25px;
}

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #8E44AD;
}

</style>
