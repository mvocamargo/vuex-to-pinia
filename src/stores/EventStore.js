import { defineStore } from "pinia";

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numbersOfEvents: state => state.events.length
  }
})
