import { defineStore } from "pinia";

export const useUserStore = defineStore( 'UserStore', {
  state: () => ({
    user: 'Adam Jahr',
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0];
    }
  }
})
