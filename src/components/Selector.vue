<script lang="ts" setup>
import PillChecker from '../data/pill-checker.json'
import { ref } from 'vue'
const props = defineProps<{
    title: string,
    datasource: string
}>()

const items = ref<any[]>([])
if (props.datasource == 'medicine') {
    items.value = PillChecker
}

</script>
<template>
    <label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">{{ title }}</span>
        </div>
        <select class="select select-bordered">
            <option disabled selected>Pick one</option>
            <option v-for="cheker in items" value="cheker.name">{{ cheker.name }}</option>
        </select>
    </label>
</template>