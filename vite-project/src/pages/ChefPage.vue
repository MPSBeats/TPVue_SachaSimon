<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useChefStore } from '../store/chefsStore';
import { useCartStore } from '../store/cartStore';
import HeaderPage from '../layouts/HeaderPage.vue';

const route = useRoute();
const chefStore = useChefStore();
const cartStore = useCartStore();

const chefId = computed(() => parseInt(route.params.id as string));
const chef = computed(() => chefStore.chefs.find(c => c.id === chefId.value));

onMounted(() => {
  chefStore.loadChefs();
  cartStore.loadCart();
});

const ajouterAuPanier = (plat) => {
  cartStore.addToCart(plat);
  alert(`${plat.name} ajouté au panier`);
};
</script>

<template>
  <HeaderPage />
  <main v-if="chef" class="container">
    <h2 class="title is-3">{{ chef.name }}</h2>
    <div class="box">
      <h3 class="title is-5">Informations sur le chef</h3>
      <p>Nom : {{ chef.name }}</p>
      <br>
    </div>
    <div class="box">
      <h3 class="title is-5">Spécialités :</h3>
      <ul>
        <li v-for="specialite in chef.specialites" :key="specialite.id">{{ specialite.name }}</li>
      </ul>
    </div>
    <br>
    <div class="box">
      <h3 class="title is-5">Plats :</h3>
      <ul>
        <li v-for="plat in chef.plats" :key="plat.id" class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="plat.image" :alt="plat.name" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ plat.name }}</strong> - {{ plat.price }} €
                <br>
                <button @click="ajouterAuPanier(plat)" class="button is-small is-primary is-light">Ajouter au panier</button>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
  <p v-else>Chargement des données...</p>
</template>

<style scoped>
.container {
  padding: 2rem;
}

.box {
  margin-bottom: 1rem;
}

.media {
  align-items: center;
}
</style>
