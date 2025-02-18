import { defineStore } from 'pinia';

interface Specialite {
  id: number;
  name: string;
}

interface Plat {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Chef {
  id: number;
  name: string;
  specialites: Specialite[];
  plats: Plat[];
}

export const useChefStore = defineStore('chef', {
  state: () => ({
    chefs: [] as Chef[],
  }),
  actions: {
    initializeChefs() {  // Peu optimisé, si plus de temps j'aurais pu ajouter un fichier externe en json
      const initialChefs: Chef[] = [
        {
          id: 1,
          name: 'Bernard Loiseau',
          specialites: [
            { id: 1, name: 'Pâtisserie' },
          ],
          plats: [
            { id: 1, name: 'Baba au rhum', price: 10, image: '../assets/plats/imageA1.jpg' },
            { id: 2, name: 'Fraisier', price: 12, image: '../assets/plats/imageA2.jpg' },
          ],
        },
        {
          id: 2,
          name: 'LopotiFlan',
          specialites: [
            { id: 2, name: 'Cuisine portuguaise' },
          ],
          plats: [
            { id: 3, name: 'Bifana de poulet piri piri', price: 15, image: '../assets/plats/imageB1.jpg' },
            { id: 4, name: 'Vivaneau au four', price: 18, image: '../assets/plats/imageB2.jpg' },
          ],
        },
        {
          id: 3,
          name: 'Elena Reygadas',
          specialites: [
            { id: 3, name: 'Cuisine mexicaine' },
          ],
          plats: [
            { id: 5, name: 'Tacos al pastor', price: 20, image: '../assets/plats/imageC1.jpg' },
            { id: 6, name: 'Taquitos', price: 22, image: '../assets/plats/imageC2.jpg' },
          ],
        },
      ];
      this.setChefs(initialChefs);
    },
    setChefs(chefs: Chef[]) {
      this.chefs = chefs;
      sessionStorage.setItem('chefs', JSON.stringify(chefs));
    },
    addChef(chef: Chef) {
      this.chefs.push(chef);
      sessionStorage.setItem('chefs', JSON.stringify(this.chefs));
    },
    loadChefs() {
      const storedChefs = JSON.parse(sessionStorage.getItem('chefs') || '[]');
      if (storedChefs.length > 0) {
        this.chefs = storedChefs;
      }
    },
  },
});
