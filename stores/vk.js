import { defineStore } from 'pinia'

export const useStore = defineStore('vk', {
    state: () => ({
        user: null,
        isAuthed: false
    }),
    actions: {
        enter(user) {
            this.user = user;
            this.isAuthed = true;
        }
    },
    persist: true,
})