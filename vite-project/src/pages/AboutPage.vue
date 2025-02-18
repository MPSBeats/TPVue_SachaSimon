<template>
    <HeaderPage />
    <main class="container">
      <section class="section">
        <div class="container">
          <h1 class="title is-2">À propos</h1>
          <p class="subtitle is-4">Bienvenue chez HomeMade !</p>
          <p>
            HomeMade est une plateforme dédiée à vous offrir les meilleures recettes faites maison de chefs du monde entier. Notre mission est de fournir un espace où les passionnés de cuisine peuvent découvrir, partager et savourer des plats délicieux.
          </p>
        </div>
      </section>
  
      <section class="section">
        <div class="container">
          <h2 class="title is-3">Notre équipe</h2>
          <div class="columns">
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                </div>
                <div class="card-content">
                  <p class="title is-4">Chef A</p>
                  <p class="subtitle is-6">Fondateur & Chef exécutif</p>
                  <div class="content">
                    Chef A a plus de 20 ans d'expérience dans le monde culinaire, spécialisé dans les cuisines française et italienne.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                </div>
                <div class="card-content">
                  <p class="title is-4">Chef B</p>
                  <p class="subtitle is-6">Sous-chef</p>
                  <div class="content">
                    Chef B est passionné par la cuisine durable et l'utilisation d'ingrédients locaux et frais.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                </div>
                <div class="card-content">
                  <p class="title is-4">Chef C</p>
                  <p class="subtitle is-6">Chef pâtissier</p>
                  <div class="content">
                    Chef C est spécialisé dans la création de pâtisseries et desserts délicieux pour toutes les occasions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import HeaderPage from '../layouts/HeaderPage.vue';
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
  }
  
  .section {
    padding: 2rem 0;
  }
  
  .card {
    margin-bottom: 2rem;
  }
  
  .image {
    width: 100%;
    height: auto;
  }
  </style>
  