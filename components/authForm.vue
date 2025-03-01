<script setup>
import { useStore } from '~/stores/vk';
const isDone = ref(false);
const { enter } = useStore();
let formFields = [{
    label: 'Phone or Mail',
    model: ref(''),
    placeholder: '+79... or ..@mail.ru',
}, {
    label: 'Password',
    model: ref(''),
    placeholder: 'not 1234',
}];
function toggle() {
    isDone.value = !isDone.value;
    formFields.forEach(({ model }) => model.value = '');
    if (formFields.length == 2) {
        formFields.push({
            label: 'Fullname',
            model: ref(''),
            placeholder: 'Robot Robotov'
        },);
        return
    }
    formFields.pop();
}

async function toAuth() {
    let fullname = '';
    if (formFields.length == 3) {
        fullname = formFields[2].model.value
    }
    // console.log(fullname, formFields[0].model.value, formFields[1].model.value)
    const { data, status } = await useFetch('/api/auth', {
        method: 'POST',
        body: {
            mixed: formFields[0].model.value,
            password: formFields[1].model.value,
            fullname,
        }
    });
    // console.log(status, data)
    if (status.value == 'success') {
        enter(data.value);
        await navigateTo('/feed')
        return
    }
    // throw new Error("error");
}
// const isMail = useMail();
// const inputValue = useInput();
// function toggle() {
//     isMail.value = !isMail.value
//     inputValue.value == '+79000000000' ? inputValue.value = '123456789@mail.ru' : inputValue.value = '+79000000000'
// }
</script>

<template>
    <form @submit.prevent="toAuth" class="flex flex-col bg-white px-6 py-10 rounded-xl gap-3 mb-3">
        <header class="flex justify-center mb-2">
            <Icon name="cib:vk" size="49" style="color: #268afc" />
        </header>
        <h1 class="text-lg  text-center">Enter Your Data</h1>
        <p class="text-center text-gray-500 mb-3">You'll use your
            data to sign <span v-if="!isDone">in</span> <span v-else>up</span> <br /> to your account
        </p>

        <div class="grid-cols-2 grid gap-2">
            <div class="flex flex-col gap-y-1 " v-for="field, index in formFields" :key="index"
                :class="{ 'col-span-2': index == 2 }">
                <label class="text-gray-700" :for="index">{{ field.label }}</label>
                <input
                    class="bg-gray-200/50 ring-1  ring-gray-300/50 hover:ring-2 placeholder-gray-400  text-black rounded-lg py-1 pl-2  focus:outline-none"
                    :placeholder="field.placeholder" v-model="field.model.value" :id="index" />
            </div>
        </div>
        <button type="submit"
            class="text-center text-white justify-center py-1 font-semibold flex items-center bg-blue-400 rounded-lg hover:bg-blue-500/90 transition duration-500">
            Continue
        </button>
        <a class="text-gray-400 text-xs text-end font-semibold hover:cursor-pointer underline" @click="toggle"><span
                v-if="isDone">Already
                have
                an account?</span><span v-else>Don't you have an account?</span></a>
        <!-- 
        <a class="text-gray-600 text-xs font-semibold hover:cursor-pointer underline" @click="toggle"><span
                v-if="!isMail">Use
                your mail to sign in</span>
            <span v-else>Use phone your number to sign <span v-if="!isDone">in</span> <span v-else>up</span></span></a> -->


        <footer class="text-center mt-16">
            <p class="text-gray-400 text-xs">By pressing <b>Continue</b>, you agree to the Terms of Service and
                <br /> Privacy policy
            </p>
        </footer>
    </form>
</template>
