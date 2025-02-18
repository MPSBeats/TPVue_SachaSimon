<template>
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="title is-1"><router-link to="/">HomeMade</router-link></a>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li v-if="!isLoggedIn">
            <router-link :to="isLoginPage ? '/register' : '/login'">
              {{ isLoginPage ? 'Register' : 'Login' }}
            </router-link>
          </li>
          <li v-else @click="logout">
            <router-link to="/">Logout</router-link>
          </li >
          <li v-if="isLoggedIn"><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useUserStore } from '../store/usersStore';
  
  const route = useRoute();
  const router = useRouter();
  const userStore = useUserStore();
  
  const isLoginPage = computed(() => route.path === '/login');
  const isLoggedIn = computed(() => userStore.currentUser !== null);
  
  const logout = () => {
    userStore.logout();
    router.push('/');
  };
  </script>
  
  <style scoped>
  .navbar {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    margin: 0 1rem;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  
  .title.is-1 {
    color: white;
  }
  </style>
  