<template>
  <div class="auth-container">
    <div class="form-container">
      <form class="auth-form" @submit.prevent="signIn">
      <h1 class="auth-form__title">Авторизация</h1>
      <p class="auth-form__item">
        <label for="login">Логин: </label>
        <input
          class="auth-form__input"
          id="login"
          type="text"
          v-model="user.username"
        />
      </p>
      <p class="auth-form__item">
        <label for="password">Пароль: </label>
        <input
          class="auth-form__input"
          id="password"
          type="password"
          v-model="user.password"
        />
      </p>
      <button class="auth-form__btn" type="submit">Войти</button>
    </form>
    <router-link class="registration-text" to="/registration">
      <p class="registration-text">Нет аккаунта? Зарегистрируйтесь.</p>
    </router-link>
    </div>
    
  </div>
</template>

<script>
import httpClient from '@/api/httpClient';
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
        .post('api/v1/users/login/', {
          username: this.user.username,
          password: this.user.password,
        })
        .then((response) => {
          this.setLogined(response.data.token);
        })
        .then(() => {
          this.$router.push('/board');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setLogined(token) {
      localStorage.setItem('token', token);
    },
  },
};
</script>

<style>

  .auth-container {
  background-image: url('../assets/5d37b4b4335b7500992213.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  color: white;
  flex-grow: 1;
}

.auth-form__input {
  transition: background-color 0.5s ease-out;
  padding: 5px 10px;
  min-height: 25px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  font-size: 15px;
}

.auth-form__item {
  font-size: 25px;
  margin: 0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.registration-text {
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

.registration-text:hover {
  color: #898a8a;
}

.auth-form__btn {
  color: white;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  padding: 10px 50px;
  margin-top: 20px;
  background: linear-gradient(-20deg, #ff8c46, #fd6a77);
  border: 1px solid black;
  border-radius: 20px;
  transition: background-color 0.5s ease-out;
}

.auth-form__input:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.auth-form__input:focus {
  outline: none;
  border: 1px solid white;
}



.auth-form__btn:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
}


</style>
