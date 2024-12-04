<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter();
function goToMedicinePage() {
    router.push({ name: "medicine" })
}
</script>
<template>
    <div class="hero min-h-screen"
        style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">KPP Hospital Item Checker</h1>
                <div class="grid justify-items-center">
                    <div class="p-1">
                        <button class="btn btn-outline btn-neutural btn-wide" @click="goToMedicinePage">
                            <span class="text-white">
                                Medicine
                            </span>
                        </button>
                    </div>
                    <div class="p-1">
                        <button class="btn btn-outline btn-neutural btn-wide">
                            <span class="text-white">
                                Tools
                            </span>
                        </button>
                    </div>
                    <div class="p-1">
                        <button class="btn btn-outline btn-neutural btn-wide">
                            <span class="text-white">
                                Adult Emergency
                            </span>
                        </button>
                    </div>
                    <div class="p-1">
                        <button class="btn btn-outline btn-neutural btn-wide">
                            <span class="text-white">
                                Childen Emergency
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>