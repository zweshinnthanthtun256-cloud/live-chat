<template>
  <h2>Log In</h2>
  <form @submit.prevent="login">
        
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button>Login</button>
  </form>
</template>

<script>
import { auth } from '@/firebase/config';
import { ref } from 'vue';
import useLogin from "../composables/useLogin"

export default {
    setup(){
        
        let email=ref("");
        let password=ref("");
        
        let {error,signIn}= useLogin();

        let login=async()=>{
           let res=await signIn(email.value,password.value);
           if(res){
            console.log(res.user);
           }
        }
        return {email,password,login,error}
    }
}
</script>

<style>

</style>