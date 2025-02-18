<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useChefStore } from '../store/chefsStore';
import HeaderPage from '../layouts/HeaderPage.vue';

const router = useRouter();
const chefStore = useChefStore();

const chefs = computed(() => chefStore.chefs);

onMounted(() => {
  chefStore.loadChefs();
  if (chefStore.chefs.length === 0) {
    chefStore.initializeChefs();
  }
});

const goToChef = (id: number) => {
  router.push(`/chef/${id}`);
};
</script>

<template>
  <HeaderPage />
  <main class="container">
    <h2 class="title is-3">Chefs</h2>
    <div class="box">
      <h3 class="title is-5">Liste des cuisiniers</h3>
      <ul>
        <li 
          v-for="chef in chefs" 
          :key="chef.id" 
          @click="goToChef(chef.id)" 
          class="subtitle is-6 has-text-link"
        >
          {{ chef.name }}
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.subtitle.is-6.has-text-link {
  cursor: pointer;
  text-decoration: underline;
}
</style>
