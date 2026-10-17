<template>
  <h2>Log In</h2>
  <form @submit.prevent="login">
        
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="password" v-model="password">
        <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        
        let email=ref("");
        let password=ref("");
        let login=()=>{
            console.log(email.value,password.value)
        }
        return {email,password,login}
    }
}
</script>

<style>

</style>