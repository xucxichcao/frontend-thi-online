<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">
        <h2>Bài thi tự luận</h2>
      </span>
    </div>
    <div class="h-panel-body">
      <div>
        <Table :datas="datas" stripe>
          <TableItem title="Tên sinh viên" prop="name"></TableItem>
          <TableItem title="MSSV" prop="mssv"></TableItem>
          <TableItem title="File">
            <template slot-scope="{ data }">
              <a href=""> {{ data.file }}</a>
            </template>
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
        { name: "Cao Trọng Nghĩa", mssv: "18521138", file: "nghia.pdf" },
        { name: "Huỳnh Mạnh Hùng", mssv: "18520795", file: "hung.pdf" },
        { name: "Lê Hải Minh", mssv: "18521103", file: "minh.pdf" },
      ],
    };
  },
};
</script>

<style></style>
