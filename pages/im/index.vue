<script setup>
import { useStore } from "~/stores/vk"
const except = useStore().user._id;
const contacts = ref([]);
useSeoMeta({
    title: 'Messenger',
    ogTitle: 'Messenger of my social media',
    description: 'Chat with your friends or to talk to your boss..',
    ogDescription: 'Chat with your friends or to talk to your boss..',
})
definePageMeta({
    middlewares: ['unauthed']
})
async function getUsers() {
    const { data } = await useFetch("/api", {
        params: {
            except
        }
    });
    contacts.value = data.value
    console.log(data)
}
getUsers();
console.log(contacts);

</script>

<template>
    <div class="ml-[200px] basis-6/12 flex ">
        <ul class="rounded-xl ring-1 ring-gray-300 bg-white h-[760px] divide-y divide-gray-300  ">
            <NuxtLink :to="'/im/' + contact._id" v-for="contact, index in contacts" :key="index"
                class="flex flex-row hover:cursor-pointer hover:bg-gray-200/50 py-1 gap-4 items-center ">
                <div class="flex items-center basis-1/12 pl-4">
                    <UAvatar size="lg" />
                </div>
                <div class="flex flex-row justify-between basis-11/12  ">
                    <div class="flex flex-col justify-start gap-1 basis-full">
                        <h1>{{ contact.fullname }}</h1>
                        <div class="flex flex-row gap-3 items-center w-[550px]">

                            <!-- <p class="text-sm  text-gray-400/50 truncate text-nowrap ">{{ contact[contacts.length - 1] -->
                            <!-- }}</p> -->
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </ul>
    </div>
</template>


<!-- <UAvatar src="avatarMine.jpg" v-if="contact.lastYourMessage" /> -->