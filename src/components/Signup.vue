<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="text" placeholder="email" v-model="email" />
    <input type="text" placeholder="password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let error=ref(null);
    let signUp = async () => {
      try {
        let res = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        )
        if(!res){
            throw new Error("Could not create  new user");
        }
        console.log(res.user);
        
      } catch (error) {
        error.value=error.message;
        console.log(error.value);
      }
    };
    return { displayName, email, password, signUp };
  },
};
</script>

<style>
</style>