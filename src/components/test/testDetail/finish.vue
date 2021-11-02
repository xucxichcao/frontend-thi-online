<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Bạn đã hoàn thành bài thi</h2></span>
    </div>
    <div class="h-panel-body">
      <div class="icon">
        <i class="h-icon-success"></i>
        <h2>Bạn đã hoàn thành bài thi</h2>
      </div>
      <div>
        <Table :datas="datas" stripe>
          <TableItem title="Ngày hoàn thành" prop="ngayHoanThanh"></TableItem>
          <TableItem title="Môn thi" prop="monThi"></TableItem>
          <TableItem title="Thời gian" align="center">
            <template slot-scope="{ data }">
              {{ data.thoiGian }} phút
            </template></TableItem
          >
          <TableItem title="Số câu đúng" align="center">
            <template slot-scope="{ data }">
              {{ data.soCauDung }} / {{ data.tongSoCau }}
            </template></TableItem
          >
          <TableItem title="Điểm" align="center">
            <template slot-scope="{ data }"> {{ data.diem }} / 10 </template>
          </TableItem>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          ngayHoanThanh: "14/10/2021",
          monThi: "Lập trình Web",
          thoiGian: "40",
          soCauDung: "20",
          diem: "5",
          tongSoCau: "40",
        },
      ],
    };
  },
};
</script>

<style>
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5em;
  padding-top: 1em;
}
.icon > i {
  font-size: 50px;
}
.icon > h2 {
  margin-top: 1em;
}
</style>
