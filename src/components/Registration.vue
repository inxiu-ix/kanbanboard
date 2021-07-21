<template>
  <form @submit.prevent="signUp">
    <p>
      <label for="login">Логин: </label>
      <input id="login" type="text" v-model="user.username" />
    </p>
    <p>
      <label for="email">e-mail: </label>
      <input id="email" type="email" v-model="user.email" />
    </p>
    <p>
      <label for="password">Пароль: </label>
      <input id="password" type="password" v-model="user.password" />
    </p>
    <p>
      <label for="password-repeat">Повторите пароль: </label>
      <input id="password-repeat" type="password" v-model="user.password" />
    </p>
    <button type="submit">Зарегистрироваться</button>
  </form>
</template>

<script>
import httpClient from '@/api/httpClient'
export default {
  components: {
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signUp() {
      httpClient.post(
          'api/v1/users/create/',
          {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
          },
          { headers: { 'Content-type': 'application/json' } }
        )
        .then((response) => {
          console.log(response);
          this.$router.push('/auth')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
