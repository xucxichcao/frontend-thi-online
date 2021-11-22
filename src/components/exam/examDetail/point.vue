<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Điểm</h2></span>
    </div>
    <div class="h-panel-body">
      <Table :datas="this.data.results" stripe>
        <TableItem title="Tên sinh viên" prop="sinhVien"></TableItem>
        <TableItem
          v-if="diem"
          title="Điểm"
          prop="diem"
          align="center"
        ></TableItem>
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 5, name: "Test 5", dictData: null, age: 12, address: "Shanghai" },
        { id: 6, name: "Test 6", dictData: 2, age: 13, address: "Shanghai" },
        { id: 7, name: "Test 7", dictData: 3, age: 0, address: "Shanghai" },
        {
          id: 5,
          name: "Test 5",
          dictData: 4,
          age: undefined,
          address: "Shanghai",
        },
        { id: 6, name: "Test 6", dictData: 5, age: -1, address: "Shanghai" },
        { id: 7, name: "Test 7", dictData: 6, age: null, address: "Shanghai" },
      ],
      data: [],
    };
  },
  mounted() {
    this.data = this.$store.getters["attempt/getDiem"];
  },
};
</script>

<style></style>
