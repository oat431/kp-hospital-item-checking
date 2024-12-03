<script lang="ts" setup>
import { defineProps, ref } from 'vue'
const props = defineProps<{
    title: string,
    datasource: string
}>()
import item1 from '../data/item1.json'
import item2 from '../data/item2.json'
import item3 from '../data/item3.json'
import CheckItem from '../model/CheckItem.ts'

const items = ref<any[]>([])
if (props.datasource === 'item1') {
    items.value = item1
}
if (props.datasource === 'item2') {
    items.value = item2
}
if (props.datasource === 'item3') {
    items.value = item3
}

const checkItem[] = ref<CheckItem[]>([])


</script>
<template>
    <div class="overflow-x-auto p-3">
        <p class="items-center p-3 text-xl font-bold">{{ title }}</p>
        <table class="table table-zebra">
            <!-- head -->
            <thead>
                <tr>
                    <th>No.</th>
                    <th>item name</th>
                    <th>amount</th>
                    <th>Complete</th>
                    <th>Incomplete</th>
                    <th>found</th>
                    <th>reason</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in items" :key="item" onchange="updateData">
                    <td>{{ idx + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.amount }}</td>
                    <td>
                        <input type="checkbox" class="checkbox border-2" />
                    </td>
                    <td>
                        <input type="checkbox" class="checkbox border-2" />
                    </td>
                    <td>
                        <input type="text" placeholder="found" class="input input-bordered w-20 max-w-xs" />
                    </td>
                    <td>
                        <input type="text" placeholder="reason" class="input input-bordered w-100 max-w-xs" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>