<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="text" placeholder="email" v-model="email" />
    <input type="text" placeholder="password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";

import { createUserWithEmailAndPassword } from "firebase/auth";
import useSignup from "@/composables/userSignup";

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let {error,createAccount}=useSignup()
    
    let signUp = async () => {
        let res=await createAccount(email.value,password.value,displayName.value);
        if(res){
          console.log(res.user);
        }
    };
    return { displayName, email, password, signUp, error };
  },
};
</script>

<style>
</style>