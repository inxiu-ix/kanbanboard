<template>
  <form @submit.prevent="signIn">
    <p>
      <label for="login">Логин: </label>
      <input id="login" type="text" v-model="user.username" />
    </p>
    <p>
      <label for="password">Пароль: </label>
      <input id="password" type="password" v-model="user.password" />
    </p>
    <button type="submit">Войти</button>
  </form>
</template>

<script>
import httpClient from '@/api/httpClient'
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      httpClient
        .post(
          'api/v1/users/login/',
          {
            username: this.user.username,
            password: this.user.password,
          }
        )
        .then((response) => {
          console.log(response);
          this.setLogined(response.data.token)
        }).then(() => {
          this.$router.push('/board')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setLogined(token) {
      console.log(token);
      localStorage.setItem('token', token)
    }
  },
};
</script>
