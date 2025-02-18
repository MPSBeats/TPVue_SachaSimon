<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/usersStore';
import HeaderPage from '../layouts/HeaderPage.vue';

const router = useRouter();
const userStore = useUserStore();

interface State {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const state = reactive<State>({
  email: "",
  username: "",
  password: "",
  confirmPassword: ""
});

const message = ref<string>("");
const isValid = ref<boolean>(false);
const isCompleted = ref<boolean>(false);

const isUserInputEmailValid = (input: string): boolean => {
  const pattern = new RegExp(/^(?!.*@.*@)(?!.*\..*\..*)[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,15}\.[a-zA-Z]{2,10}$/);
  return pattern.test(input);
}

const isUserInputPasswordValid = (input: string): boolean => {
  const pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/);
  return pattern.test(input);
}

watch([() => state.email, () => state.username, () => state.password, () => state.confirmPassword], () => {
  message.value = "";
  isCompleted.value = state.email !== '' && state.username !== '' && state.password !== '' && state.confirmPassword !== '';
  if (isUserInputEmailValid(state.email) && isUserInputPasswordValid(state.password) && state.password === state.confirmPassword) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
});

const register = async () => {
  if (isValid.value) {
    const newUser = {
      id: userStore.users.length + 1,
      email: state.email,
      username: state.username,
      password: state.password,
    };
    userStore.addUser(newUser);
    userStore.setCurrentUser(newUser);
    alert('Inscription réussie');
    router.push('/login');
  } else {
    message.value = "Les mots de passe ne correspondent pas ou les informations sont incorrectes";
  }
}

const resetHandler = () => {
  state.email = "";
  state.username = "";
  state.password = "";
  state.confirmPassword = "";
  message.value = "";
}
</script>

<template>
  <HeaderPage/>
  <main class="register_main">
    <h2 class="title is-3">Register</h2>
    <form @submit.prevent="register">
      <p>{{ message }}</p>
      <div class="box">
        <article class="field">
          <label for="email" class="label">Email</label>
          <div class="control">
            <input 
              id="email" 
              placeholder="Email" 
              type="email" 
              class="input" 
              v-model="state.email" 
              required/>
          </div>
        </article>
        <article class="field">
          <label for="username" class="label">Username</label>
          <div class="control">
            <input 
              id="username" 
              placeholder="Username" 
              type="text" 
              class="input" 
              v-model="state.username" 
              required/>
          </div>
        </article>
        <article class="field">
          <label for="password" class="label">Password</label>
          <div class="control">
            <input 
              id="password" 
              placeholder="Password" 
              type="password" 
              class="input" 
              v-model="state.password" 
              required/>
          </div>
        </article>
        <article class="field">
          <label for="confirmPassword" class="label">Confirm password</label>
          <div class="control">
            <input 
              id="confirmPassword" 
              placeholder="Confirm password" 
              type="password" 
              class="input" 
              v-model="state.confirmPassword" 
              required/>
          </div>
        </article>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button 
            type="submit" 
            class="button is-primary" 
            :disabled="!isCompleted"
          >Submit</button>
        </p>
        <p class="control">
          <button 
            type="reset" 
            class="button is-danger" 
            @click="resetHandler"
          >Reset</button>
        </p>
      </div>
    </form>
  </main>
</template>

<style scoped>
.register_main {
  padding: 2rem;
}

.box {
  padding: 1.5rem;
  margin-top: 1rem;
}

.field.is-grouped.is-grouped-centered {
  justify-content: center;
}
</style>
