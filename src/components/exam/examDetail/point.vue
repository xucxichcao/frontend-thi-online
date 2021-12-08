<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Điểm</h2></span>
    </div>
    <div class="h-panel-body">
      <Table :datas="this.data.results" stripe>
        <TableItem title="Tên sinh viên" prop="sinhVien_name"></TableItem>
        <TableItem title="Điểm" prop="diem" align="center"></TableItem>
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      data: [],
    };
  },
  mounted() {
    this.data = this.$store.getters["attempt/getDiem"];
  },
};
</script>

<style></style>
