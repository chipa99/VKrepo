import { useStore } from '~/stores/vk';
export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useStore();
    if (!(store.isAuthed)) {
        return navigateTo("/logIn")
    }
})