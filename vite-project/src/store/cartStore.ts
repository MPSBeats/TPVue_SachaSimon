import { defineStore } from 'pinia';

interface Plat {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  plat: Plat;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),
  actions: {
    addToCart(plat: Plat) {
      const existingItem = this.cart.find(item => item.plat.id === plat.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ plat, quantity: 1 });
      }
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    },
    removeFromCart(platId: number) {
      const itemIndex = this.cart.findIndex(item => item.plat.id === platId);
      if (itemIndex !== -1) {
        this.cart.splice(itemIndex, 1);
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
      }
    },
    loadCart() {
      const storedCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
      if (storedCart.length > 0) {
        this.cart = storedCart;
      }
    },
  },
});
