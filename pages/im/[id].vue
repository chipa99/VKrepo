<script setup>
// import { io } from "socket.io-client";
// import { useStore } from "~/stores/vk";
// const { _id, fullname } = useStore().user;
// const route = useRoute();
// const id = route.params.id
// const text = ref("");
// const toast = useToast();

// let messages = [];
// let socket = null;
// let otherName = '';

// definePageMeta({
//     middlewares: ['unauthed']
// })



// async function getMessages() {
//     const { data } = await useFetch('/api/messages', {
//         query: {
//             you: _id,
//             other: id
//         }
//     });
//     messages = data.value.messages;
//     otherName = data.value.otherName
// };


// await getMessages();


// async function sendMessage() {
//     if (text.value.trim() !== "") {
//         // await sendMessageServ();
//         await useFetch('/api/messages', {
//             method: 'POST',
//             body: {
//                 sender: _id,
//                 receiver: id,
//                 message: text.value,
//                 date: Date.now()
//             }
//         });
//         if (process.client) {
//             messages.push({
//                 sender: _id,
//                 receiver: id,
//                 message: text.value,
//                 date: Date.now()
//             });
//             socket.emit('chat message', {
//                 sender: _id,
//                 receiver: id,
//                 text: text.value,
//                 name: fullname,
//                 date: Date.now()
//             });
//         }
//     }
//     text.value = "";
// };


// if (process.client) {
//     socket = io('ws://localhost:3000');
//     socket.emit('logged_in', _id)
//     socket.on('chat message', async ({ message, name, sender, receiver, date }) => {
//         if (!(messages.includes({ message, sender, receiver, date }))) {
//             messages.push({
//                 sender,
//                 receiver,
//                 message,
//                 date
//             });
//             console.log(messages);

//         }

//         toast.add({
//             id: sender,
//             title: name,
//             description: message,
//             icon: 'i-octicon-desktop-download-24',
//             timeout: 5000
//         });
//     });
// }
</script>

<template>
    <div class="ml-[200px] basis-6/12 flex">
        <!-- <div class="rounded-xl relative  w-full ring-gray-300  bg-white h-[760px] py-2 ">

            <div class="h-[690px] pb-5 overflow-y-scroll">
                <button v-for="message, index in messages" :key="index"
                    class="flex flex-row py-1 w-full  gap-4 items-center ">
                    <div class="flex items-center basis-1/12 pl-4">
                        <UAvatar size="lg" />
                    </div>
                    <div class="rounded-xl hover:bg-gray-100/90 transition basis-11/12 flex-row flex pr-4">
                        <div
                            class="flex flex-row justify-between basis-11/12 rounded-xl hover:bg-gray-100/90 transition ">
                            <div class="flex flex-col justify-start ">
                                <div>
                                    <h1 class="text-start text-blue-500"><span v-if="message.sender == _id">{{ fullname
                                            }}</span><span v-else>{{ otherName
                                            }}</span>
                                    </h1>
                                </div>
                                <div class="flex flex-row gap-3 items-center w-[300px]">
                                    <p class="text-sm   truncate text-nowrap ">{{ message.message }}</p>
                                </div>
                            </div>

                        </div>
                        <div class="flex items-center basis-1/12">
                            <NuxtTime :datetime="message.date" second="numeric" minute="numeric"
                                class="text-sm text-gray-400" />
                        </div>
                    </div>
                </button>
            </div>

            <div class="px-5">
                <div
                    class="absolute bottom-5 shadow-sm shadow-gray-700 w-[93%] ring-1 ring-gray-300  py-1 rounded-xl flex flex-row items-center flex-nowrap">
                    <div class="basis-1/12 flex items-center justify-center">
                        <UIcon name="ei:plus" size="28"
                            class="hover:text-gray-600 hover:cursor-pointer  text-gray-400 transition" />
                    </div>
                    <div class="basis-9/12">
                        <input class="border-none placeholder-gray-500 hover:cursor-text outline-none w-full"
                            type="text" v-model="text" placeholder="Write a message..." @keyup.enter="sendMessage">
                    </div>
                    <div class="basis-2/12 flex flex-row justify-end pr-2 gap-2">
                        <UIcon name="tabler:mood-smile" size="24"
                            class="hover:text-gray-600 hover:cursor-pointer text-gray-400 transition" />
                        <UIcon name="ep:microphone" size="24"
                            class="hover:text-gray-600 hover:cursor-pointer  text-gray-400 transition" />
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
