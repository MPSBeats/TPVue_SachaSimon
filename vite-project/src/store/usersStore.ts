import { defineStore } from 'pinia';

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    currentUser: null as User | null,
  }),
  actions: {
    addUser(user: User) {
      this.users.push(user);
    },
    setCurrentUser(user: User) {
      this.currentUser = user;
    },
    getUserByEmail(email: string): User | undefined {
      return this.users.find(user => user.email === email);
    },
    logout() {
      this.currentUser = null;
    },
  },
});
