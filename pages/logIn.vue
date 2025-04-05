<script setup>
definePageMeta({
    layout: 'login',
    middleware: ['authed']
})
useSeoMeta({
    title: 'Auth',
    ogTitle: 'Auth into account',
    description: 'This logging or sing up your vk account',
    ogDescription: 'This logging in or sing up your vk account',
})
</script>

<template>
    <div class="m-auto flex flex-col items-center">
        <auth-form />
        <div>
            <a class="text-gray-600 font-semibold" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Learn more about
                VK</a>
        </div>
    </div>
</template>