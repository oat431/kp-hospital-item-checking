<script lang="ts" setup>
import Item from '../model/Item.ts'
import { defineProps, ref } from 'vue'
const props = defineProps<{
    idx: number,
    item: Item
}>()
const isComplete = ref(false)
const found = ref('')
const reason = ref('')

function updateData() {
    console.log({
        idx: props.idx,
        item: props.item,
        isComplete: isComplete.value,
        found: found.value,
        reason: reason.value
    })
}

</script>
<template>
    <td>{{ props.idx + 1 }}</td>
    <td>{{ props.item.name }}</td>
    <td>{{ props.item.amount }}</td>
    <td>{{ props.item.unit }}</td>
    <td>
        <input type="radio" class="radio border-2 w-10 h-10" :value="true" v-model="isComplete" />
    </td>
    <td>
        <input type="radio" class="radio border-2 w-10 h-10" :value="false" v-model="isComplete" />
    </td>
    <td>
        <input type="text" placeholder="found" class="input input-bordered w-20 max-w-xs" v-model="found" />
    </td>
    <td>
        <input type="text" placeholder="reason" class="input input-bordered w-100 max-w-xs" v-model="reason" />
    </td>
    <!-- <td> -->
    <!-- <button class="btn btn-neutral" @click="updateData">Update</button> -->
    <!-- </td> -->
</template>