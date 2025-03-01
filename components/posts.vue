<script setup>
const posts = defineProps(['posts'])
const users = defineProps(['users'])
function userOfPost(userId) {
    const result = (users.value).filter((user) => user.id == userId)
    return result[0]
}

</script>

<template>
    <UCard v-for="post, index in posts" :key="index" :ui="{
        base: 'rounded-xl bg-white border-gray-200 border-1'
    }">
        // TODO: Fill gaps
        <div class="flex flex-row gap-1 mb-1">
            <div>
                <UAvatar />
            </div>
            <div class="flex flex-col gap-2">
                <div>
                    <h1></h1>
                </div>
                <div>
                    <span>{{ userOfPost(post.userId).name }} ·
                        <NuxtTime :datetime="post.createdAt" month="long" day="numeric" />
                    </span>
                </div>
            </div>
        </div>
        <p>{{ }}</p>
        <img :src="post.picture" :alt="post.title">
        <div class="flex flex-row justify-between items-center mt-3">
            <div>
                <button
                    class="rounded-2xl px-3 py-1 flex items-center  bg-bgGray transition duration-200 hover:cursor-pointer hover:bg-bgGrayActive"
                    :class="{
                        'gap-2': (post.likes) > 0,
                        'bg-red-400': false
                    }" @click="PostLike(post.id)">
                    <Icon name="fluent:heart-48-regular" size="28" class="text-gray-400" :class="{
                        'text-red-500': false
                    }" />
                    <span v-if="post.likes > 0" class="text-gray-500">{{ post.likes }}</span>
                </button>
            </div>
            <div class="flex flex-row items-center gap-1">
                <Icon name="basil:eye-outline" size="24" class="text-gray-500" />
                <span class="text-white text-sm">{{ post.views }}</span>
            </div>
        </div>
    </UCard>
</template>