<template>
  <div class="header">
    <router-link to="/auth">
    <button >Войти</button>
    </router-link>  
    <router-link to="/registration">
    <button>Регистрация</button>
    </router-link>
    
  </div>
</template>

<script>

</script>

<style>
.header {
  display: flex;
  padding: 20px;
  justify-content: flex-end;
}

</style>
