<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter()
function backHome() {
    router.push({ name: "home" })
}
</script>
<template>
    <div class="navbar bg-neutral text-neutral-content">
        <div class="navbar-start">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost" @click="backHome">
                    <svg class="text-white" height="32" id="Layer_1" style="enable-background:new 0 0 512 512;"
                        version="1.1" viewBox="0 0 512 512" width="32" xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
                    </svg>
                </button>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost text-xl">Kp Hospital Item Checking</a>
        </div>
        <div class="navbar-end"></div>
    </div>
</template>