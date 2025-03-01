<script setup>

const { data: posts, pending, error, refresh } = await useFetch('https://6741ccb5e4647499008eceae.mockapi.io/posts')
const { data: users } = await useFetch('https://6741ccb5e4647499008eceae.mockapi.io/users');
onBeforeMount(() => {
    console.log('Вы на главной странице!');
})
function userOfPost(userId) {
    const result = (users.value).filter((user) => user.id == userId)
    return result[0]
}
definePageMeta({
    middlewares: ['unauthed']
})
useSeoMeta({
    title: 'News',
    ogTitle: 'My Social Media',
    description: 'This my own social media based on Nuxt',
    ogDescription: 'This my own social media based on Nuxt',
})
</script>
<template>
    <main class="basis-7/12 flex flex-col gap-4 ml-[200px]">
        <UCard v-for="post, index in posts" :key="index" :ui="{
            ring: 'ring-1 ring-gray-300',
            bg: ' bg-white rounded-xl '
        }">

            <div class="flex flex-row gap-3 mb-2">
                <div>
                    <UAvatar :src="userOfPost(post.userId).avatar" size="lg" :alt="userOfPost(post.userId).name" />
                </div>
                <div>
                    <div>{{ userOfPost(post.userId).name }}</div>
                    <NuxtTime :datetime="post.createdAt" month="long" day="numeric" class="text-base text-gray-400" />
                </div>
            </div>
            <p class="mb-2">{{ post.text }}</p>
            <img :src="post.picture" :alt="post.title" class="rounded-lg">
            <div class="flex flex-row justify-between items-center mt-3">
                <div class="flex flex-row gap-2">
                    <button
                        class="rounded-2xl px-3 py-1 flex items-center  bg-gray-200 transition duration-200 hover:cursor-pointer hover:bg-gray-300/80"
                        :class="{
                            'gap-2': (post.likes) > 0,

                        }">
                        <Icon name="gg:heart" size="28" class="text-gray-400" :class="{

                        }" />

                        <span v-if="post.likes > 0" class="text-gray-500">{{ post.likes }}</span>
                    </button>
                    <button
                        class="rounded-2xl px-3 py-1 flex items-center  bg-gray-200 transition duration-200 hover:cursor-pointer hover:bg-gray-300/80"
                        :class="{
                            'gap-2': (post.comments) > 0,

                        }">
                        <Icon name="akar-icons:comment" size="28" class="text-gray-400" :class="{

                        }" />

                        <span v-if="post.comments > 0" class="text-gray-500">{{ post.comments }}</span>
                    </button>
                    <button
                        class="rounded-2xl px-3 py-1 flex items-center  bg-gray-200 transition duration-200 hover:cursor-pointer hover:bg-gray-300/80"
                        :class="{
                            'gap-2': (post.shares) > 0,

                        }">
                        <Icon name="uil:share" size="28" class="text-gray-400" :class="{

                        }" />

                        <span v-if="post.shares > 0" class="text-gray-500">{{ post.shares }}</span>
                    </button>


                </div>
                <div class="flex flex-row items-center gap-1">
                    <Icon name="basil:eye-outline" size="24" class="text-gray-500" />
                    <span class="text-gray-600 text-sm">{{ post.views }}</span>
                </div>
            </div>
        </UCard>
    </main>
</template>



<style></style>