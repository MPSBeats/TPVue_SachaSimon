<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/usersStore';
import HeaderPage from '../layouts/HeaderPage.vue';

const router = useRouter();
const userStore = useUserStore();

const data = reactive({
  email: '',
  password: ''
});
const isValid = ref(false);

const isUserInputEmailValid = (input: string): boolean => {
  const pattern = new RegExp(/^(?!.*@.*@)(?!.*\..*\..*)[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,15}\.[a-zA-Z]{2,10}$/);
  return pattern.test(input);
}

const isUserInputPasswordValid = (input: string): boolean => {
  const pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/);
  return pattern.test(input);
}

watch([() => data.email, () => data.password], () => {
  if (isUserInputEmailValid(data.email) && isUserInputPasswordValid(data.password)) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
});

const submitHandler = () => {
  const user = userStore.getUserByEmail(data.email);
  if (!user) {
    alert('Utilisateur non trouvé');
    return;
  }
  if (user.password !== data.password) {
    alert('Mot de passe incorrect');
    return;
  }

  userStore.setCurrentUser(user);
  alert('Connexion réussie');
  router.push('/session/' + user.id);
}

const resetHandler = () => {
  data.email = '';
  data.password = '';
}
</script>

<template>
  <HeaderPage />
  <main class="login_main">
    <h2 class="title is-3">LoginPage</h2>

    <form @submit.prevent="submitHandler">
      <section class="box">
        <article class="field">
          <label for="email" class="label">Email</label>
          <div class="control">
            <input 
              id="email" 
              placeholder="Email"
              type="email"
              class="input"
              v-model="data.email"
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
              v-model="data.password"
              required/>
          </div>
        </article>
      </section>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button 
            type="submit"
            class="button is-primary"
            :disabled="!isValid"
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
.login_main {
  padding: 2rem;
}

.field.is-grouped.is-grouped-centered {
  justify-content: center;
}

.box {
  margin-bottom: 1rem;
}
</style>
