<template>
<div class="registration-container">
  <form class="registragion-form" @submit.prevent="signUp">
    <h1 class="registration-title"> Регистрация </h1>
    <p class="registration-form__item">
      <label class="registration-form__label" for="login">Логин: </label>
      <input class="registration-form__input" id="login" type="text" v-model="user.username" />
    </p>
    <p class="registration-form__item">
      <label class="registration-form__label" for="email">E-mail: </label>
      <input class="registration-form__input" id="email" type="email" v-model="user.email" />
    </p>
    <p class="registration-form__item">
      <label class="registration-form__label" for="password">Пароль: </label>
      <input class="registration-form__input" id="password" type="password" v-model="user.password" />
    </p>
    <button class="registration-form__btn" type="submit">Зарегистрироваться</button>
  </form>
</div>
  
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

<style>
.registration-container {
  background-image: url('../assets/5d37b4b4335b7500992213.png');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  color: white;
}

.registragion-form {
  padding: 20px 40px;
  margin-top: 30px;
}

.registration-form__item {
  margin: 0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.registration-form__input {
  transition: background-color 0.5s ease-out;
  padding: 5px 10px;
  min-width: 400px;
  min-height: 25px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  font-size: 15px;
}
.registration-form__input:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.registration-form__input:focus {
  outline: none;
  border: 1px solid white
}

.registration-form__btn {
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  background: linear-gradient(-20deg,#ff8c46, #fd6a77 );
  border: 1px solid black;
  border-radius: 20px;
  transition: background-color 0.5s ease-out;
}

.registration-form__btn:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 576px) {
  .registration-form__input {
    min-width: 200px
  }
}
</style>
