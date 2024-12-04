<script lang="ts" setup>
import Table from '../components/Table.vue'
import TextArea from '../components/TextArea.vue'
import Selector from '../components/Selector.vue'
</script>
<template>
    <div class="p-3">
        <Table title="ยา" datasource="medicine" />
    </div>
    <div class="p-3">
        <TextArea />
    </div>
    <div class="grid justify-items-end p-3">
        <Selector title="ลงชื่อคนตรวจยา" datasource="medicine" />
    </div>
    <div class="grid justify-items-end p-3">
        <button class="btn btn-neutral">Submit</button>
    </div>
</template>