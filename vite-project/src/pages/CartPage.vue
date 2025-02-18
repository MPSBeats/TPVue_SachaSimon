<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCartStore } from '../store/cartStore';
import HeaderPage from '../layouts/HeaderPage.vue';

const cartStore = useCartStore();

const cart = computed(() => cartStore.cart);

onMounted(() => {
  cartStore.loadCart();
});

const supprimerDuPanier = (platId: number) => {
  cartStore.removeFromCart(platId);
};
</script>

<template>
  <HeaderPage />
  <main class="container">
    <h2 class="title is-2">Panier</h2>
    <ul class="box">
      <li v-for="item in cart" :key="item.plat.id" class="level">
        <div class="level-left">
          <div class="level-item">
            {{ item.plat.name }} - {{ item.plat.price }} € x {{ item.quantity }}
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button @click="supprimerDuPanier(item.plat.id)" class="button is-danger is-light">Supprimer</button>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.main {
  padding: 2rem;
}

.box {
  padding: 1.5rem;
  margin-top: 1rem;
}

.level {
  border-bottom: 1px solid #ddd;
  padding: 0.75rem 0;
}

.level:last-child {
  border-bottom: none;
}
</style>
