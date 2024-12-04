<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import TableRow from './TableRow.vue'
const props = defineProps<{
    title: string,
    datasource: string
}>()
import medicine from '../data/medicine.json'
import item2 from '../data/item2.json'
import item3 from '../data/item3.json'
import item4 from '../data/item4.json'

const items = ref<any[]>([])
if (props.datasource === 'medicine') {
    items.value = medicine
}
if (props.datasource === 'item2') {
    items.value = item2
}
if (props.datasource === 'item3') {
    items.value = item3
}
if (props.datasource === 'item4') {
    items.value = item4
}

</script>
<template>
    <div class="overflow-x-auto p-3">
        <p class="items-center p-3 text-xl font-bold">{{ title }}</p>
        <table class="table table-zebra">
            <!-- head -->
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ชื่อของ</th>
                    <th>จำนวนที่ต้องมี</th>
                    <th>หน่วย</th>
                    <th>ของครบหรือไม่ ?</th>
                    <th>เจอเท่าไร</th>
                    <th>เหตุผล</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in items" :key="item">
                    <TableRow :idx="idx" :item="item" :type="datasource" />
                </tr>
            </tbody>
        </table>
        <div class="divider"></div>
    </div>
</template>