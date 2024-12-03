<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Table from './components/Table.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <NavBar />
  <div class="p-3">
    <Table title="ยา" datasource="item1" />
    <Table title="อุปกรณ์" datasource="item2" />
    <Table title="รถ emergency เด็ก" datasource="item3" />
    <Table title="รถ emergency ผู้ใหญ่" datasource="item4" />
  </div>
  <div class="p-3">
    <label class="form-control">
      <div class="label">
        <span class="label-text">Remark</span>
      </div>
      <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
    </label>
  </div>
  <div class="grid justify-items-end p-3">
    <input type="text" placeholder="signed" class="input input-bordered w-full max-w-xs" />
  </div>
  <div class="grid justify-items-end p-3">
    <button class="btn btn-neutral">Submit</button>
  </div>
  <Footer />
</template>
