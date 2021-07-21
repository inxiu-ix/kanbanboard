<template>
  <div class="auth-container">
    <div class="auth-block">
      <div class="description">
        <p>
          Доска Kanban — это инструмент управления Agile-проектами, который
          помогает наглядно представить задачи, ограничить объем незавершенной
          работы и добиться максимальной эффективности. Доска
          Kanban проливает свет на вашу работу, чтобы вы могли
          продемонстрировать ее другим и ввести всех в курс дел.
        </p>
      </div>
      <p class="auth-text">
        Чтобы продолжить зарегистрируйте профиль, или войдите в существующий.
      </p>
      <router-link to="/auth">
        <button class="auth-btn">Войти</button>
      </router-link>
      <router-link to="/registration">
        <button class="auth-btn">Регистрация</button>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style>
.auth-container {
  font-size: 30px;
  line-height: 40px;
  font-family: 'Oswald', sans-serif;
  display: flex;
  padding: 50px 120px;
  justify-content: center;
  background-image: url('../assets/5d37b4b4335b7500992213.png');
  background-size: cover;
  min-height: 86vh;
}

.auth-text {
  font-size: 20px;
}

.auth-block {
  color: white;
}

.auth-btn {
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  padding: 20px 40px;
  margin-right: 20px;
  background: linear-gradient(-20deg,#ff8c46, #fd6a77 );
  border: 1px solid black;
  border-radius: 20px;
  transition: background-color 0.5s ease-out;
}

.auth-btn:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
}
</style>
