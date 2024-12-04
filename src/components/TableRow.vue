<script lang="ts" setup>
import { Item } from '../model/Item.ts'
import { CheckItem } from '../model/CheckItem.ts';
import { defineProps, ref } from 'vue'
const props = defineProps<{
    idx: number,
    item: Item,
    type: string
}>()
const isComplete = ref(false)
const found = ref(0)
const reason = ref('')
const checkItem = ref<CheckItem>({
    name: props.item.name,
    amount: props.item.amount,
    unit: props.item.unit,
    is_complete: isComplete.value,
    found: found.value,
    reason: reason.value
})


function trigerIsComplete() {
    isComplete.value = !isComplete.value
    checkItem.value = {
        name: props.item.name,
        amount: props.item.amount,
        unit: props.item.unit,
        is_complete: isComplete.value,
        found: found.value,
        reason: reason.value
    }
}

function showData() {
    console.log(checkItem.value)
}

function updateFound() {
    checkItem.value = {
        name: props.item.name,
        amount: props.item.amount,
        unit: props.item.unit,
        is_complete: isComplete.value,
        found: found.value,
        reason: reason.value
    }
}

function updateReason() {
    checkItem.value = {
        name: props.item.name,
        amount: props.item.amount,
        unit: props.item.unit,
        is_complete: isComplete.value,
        found: found.value,
        reason: reason.value
    }
}

</script>
<template>
    <td>{{ props.idx + 1 }}</td>
    <td>{{ props.item.name }}</td>
    <td>{{ props.item.amount }}</td>
    <td>{{ props.item.unit }}</td>
    <td>
        <label class="btn btn-circle btn-outline swap swap-rotate">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" @change="trigerIsComplete" />

            <!-- hamburger icon -->
            <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
                viewBox="0 0 50 50">
                <path
                    d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z">
                </path>
            </svg>

            <!-- close icon -->
            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 512 512">
                <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
        </label>
    </td>
    <td>
        <input v-if="isComplete" type="number" placeholder="found" class="input input-bordered w-20 max-w-xs"
            disabled />
        <input v-else type="number" placeholder="found" class="input input-bordered w-20 max-w-xs" v-model="found"
            @input="updateFound" />
    </td>
    <td>
        <input v-if="isComplete" type="text" placeholder="reason" class="input input-bordered w-100 max-w-xs"
            disabled />
        <input v-else type="text" placeholder="reason" class="input input-bordered w-100 max-w-xs" v-model="reason"
            @input="updateReason" />
    </td>
    <!-- <td> -->
    <!-- <button @click="showData" class="btn btn-outline">Show</button> -->
    <!-- </td> -->
</template>