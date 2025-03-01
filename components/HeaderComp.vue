<template>
    <nav class="bg-white  fixed w-full z-10">
        <ul class="container mx-auto flex flex-row py-0 items-center">
            <li class="pl-2 flex items-center basis-2/12 hover:cursor-pointer gap-2">
                <Icon name="cib:vk" size="28" style="color: #268afc" />
                <h1 class="font-bold text-lg text-black ">ВКОНТАКТЕ</h1>
            </li>
            <li class="basis-7/12 pl-4 flex flex-row items-center">
                <div class="relative flex items-center justify-between rounded-2xl transition-colors mr-6">
                    <Icon name="solar:minimalistic-magnifer-broken" style="stroke: white; stroke-width: 5"
                        class="sm:absolute sm:ml-4 sm:pointer-events-none max-sm:hover:cursor-pointer text-white size-6 sm:size-6" />
                    <input
                        class="text-gray-600 bg-gray-300/50  text-base font-medium  rounded-lg pl-12 max-sm:hidden placeholder:text-bgText-400 focus:placeholder:text-white focus:text-white py-2 hover:cursor-pointer hover:bg-gray-300/70  focus:outline-none focus:bg-gray-400/50 transition duration-300"
                        placeholder="Search" />
                </div>
                <div class="hover:cursor-pointer hover:bg-gray-200/50 transition-colors duration-200 p-3 ">
                    <Icon name="hugeicons:notification-02" size="24" class="text-gray-500 " />
                </div>
                <div class="hover:cursor-pointer hover:bg-gray-200/50 transition-colors duration-200 p-3">
                    <Icon name="majesticons:music-line" size="24" class="text-gray-500 " />
                </div>
            </li>
            <li class="basis-3/12 flex flex-row justify-end items-center gap-1 ">
                <div class="hover:bg-gray-200/50 p-1  transition-colors duration-200 hover:cursor-pointer">
                    <UAvatar src="avatarMine.jpg" size="md" />
                </div>
                <NuxtLink to="/logIn">
                    <Icon name="line-md:logout" size="24" class="text-gray-500 hover:cursor-pointer " />
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>