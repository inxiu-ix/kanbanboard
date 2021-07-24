<template>
  <div class="auth-container">
    <div class="auth-block">
      <div class="description">
        <p>
          Доска Kanban — это инструмент управления Agile-проектами, который
          помогает наглядно представить задачи, ограничить объем незавершенной
          работы и добиться максимальной эффективности. Доска Kanban проливает
          свет на вашу работу, чтобы вы могли продемонстрировать ее другим и
          ввести всех в курс дел.
        </p>
      </div>
      <p class="auth-text">
        Чтобы продолжить зарегистрируйте профиль, или войдите в существующий.
      </p>
      <div class="auth-btn-container">
        <router-link to="/auth">
          <button class="auth-btn">Войти</button>
        </router-link>
        <router-link to="/registration">
          <button class="auth-btn">Регистрация</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>

.auth-container {
  text-align: center;
  background-image: url('../assets/5d37b4b4335b7500992213.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  color: white;
  padding: 30px 20px;
}

.auth-btn {
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  padding: 12px 30px;
  margin-right: 5px;
  background: linear-gradient(-20deg, #ff8c46, #fd6a77);
  border: 1px solid black;
  border-radius: 20px;
  transition: background-color 0.5s ease-out;
}

.auth-btn-container {
  margin-top: 30px;
  display: flex;
}

@media (min-width: 768px) {
  .auth-container {
    padding: 107px;
    font-size: 30px;
  }

  .auth-btn-container {
    justify-content: center;
  }

  .auth-btn {
    font-size: 18px;
    padding: 17px 40px;
  }

@media (min-width: 1200px) {
  .auth-btn:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
} 
}
}
</style>
