<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Table from './components/Table.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <NavBar />
  <div class="p-3">
    <Table title="Item Section 1" datasource="item1" />
    <Table title="Item Section 2" datasource="item2" />
    <Table title="Item Section 3" datasource="item3" />
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
    <button class="btn btn-neutral">Neutral</button>
  </div>
  <Footer />
</template>
