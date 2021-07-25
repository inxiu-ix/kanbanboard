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
            v-model.trim="username"
            :class="{
              invalid:
                ($v.username.$dirty && !$v.username.required) ||
                ($v.username.$dirty && !$v.username.minLength),
            }"
          />
          <small
            class="helper-text invalid"
            v-if="$v.username.$dirty && !$v.username.required"
            >Поле «Логин» не должно быть пустым</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.username.$dirty && !$v.username.minLength"
            >Логин должен быть не менее
            {{ $v.username.$params.minLength.min }} символов</small
          >
          <small class="helper-text invalid" v-if="errors"
            >Неверный логин или пароль</small
          >
        </p>
        <p class="auth-form__item">
          <label for="password">Пароль: </label>
          <input
            class="auth-form__input"
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength),
            }"
          />
          <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
            >Поле «Пароль» не должно быть пустым</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            >Пароль должен быть не менее
            {{ $v.password.$params.minLength.min }} символов</small
          >
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
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  data: () => {
    return {
      username: '',
      password: '',
      errors: false,
    };
  },
  validations: {
    username: { required, minLength: minLength(4) },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    signIn() {
      console.log(this.errors);
      if (this.$v.$invalid) {
        this.errors = !this.errors;
        this.$v.$touch();
        console.log(this.$v);
        return;
      }
      httpClient
        .post('api/v1/users/login/', {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.setLogined(response.data.token);
        })
        .then(() => {
          this.$router.push('/board');
        })
        .catch((error) => {
          if(error.request.responseText === '{"non_field_errors":["Unable to log in with provided credentials."]}') {
            this.errors = true
          }
        });
    },
    setLogined(token) {
      localStorage.setItem('token', token);
    },
  },
};
</script>

<style scoped>
#app {
  height: auto;
}
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

.invalid {
  border: 1px solid red;
}

.helper-text {
  border: none;
  color: red;
}
</style>
