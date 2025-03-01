<script setup>
const links = link();
useColorMode().value = '';
</script>

<template>
    <div class="bg-gray-200/75 ">
        <div class="relative">
            <HeaderComp />
            <div class="container mx-auto flex flex-row gap-4 pb-6   relative pt-[74px]">
                <aside class="flex flex-col gap-1 basis-2/12 fixed  ">
                    <UVerticalNavigation :links="links" class="" :ui="{
                        label: 'dark:text-white text-black font-[475]',
                        size: 'text-sm ',
                        ring: 'ring-0',
                        base: 'pr-14  overflow-hidden',
                        inactive: 'hover:before:bg-gray-300/50 dark:hover:before:bg-gray-400/50',
                        active: 'before:bg-gray-300',
                    }">
                        <template #icon="{ link }">
                            <UIcon :name="link.icon" class="text-mainColor mr-1" size="20px" />
                        </template>
                    </UVerticalNavigation>
                </aside>
                <slot></slot>
            </div>
        </div>
    </div>
</template>