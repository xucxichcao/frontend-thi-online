<template>
  <div class="add-student">
    <div class="h-panel">
      <div class="h-panel-bar">
        <div class="h-panel-title">
          <h2>Thêm sinh viên</h2>
        </div>
      </div>
      <div class="h-panel-body">
        <div>
          <div class="upload">
            <h3>Upload file csv theo mẫu dưới (không thêm header)</h3>
            <div style="margin-left: 1em">
              <input type="file" accept=".csv" />
            </div>
          </div>
          <div style="margin-top: 2em">
            <div>
              <Table :datas="datas" stripe>
                <TableItem title="MSSV" prop="mssv"></TableItem>
                <TableItem title="Email" prop="email"></TableItem>
                <TableItem title="Họ và tên" prop="hoTen"></TableItem>
                <TableItem
                  title="Giới tính (M/F)"
                  prop="gioiTinh"
                  align="center"
                ></TableItem>
                <TableItem title="CMND" prop="cmnd"></TableItem>
                <TableItem title="Số điện thoại" prop="soDienThoai"></TableItem>
                <TableItem title="Sinh nhật" prop="sinhNhat"></TableItem>
              </Table>
            </div>
            <div class="button-add">
              <Button color="primary" icon="h-icon-plus">Thêm sinh viên</Button>
            </div>
          </div>
        </div>
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
          mssv: "18521138",
          email: "18521138@gm.uit.edu.vn",
          hoTen: "Cao Trọng Nghĩa",
          gioiTinh: "M",
          cmnd: "123456789",
          soDienThoai: "8412345678",
          sinhNhat: "28-11-2000",
        },
        {
          mssv: "18520795",
          email: "18520795@gm.uit.edu.vn",
          hoTen: "Huỳnh Mạnh Hùng",
          gioiTinh: "M",
          cmnd: "123456789",
          soDienThoai: "8412345678",
          sinhNhat: "05-11-2000",
        },
        {
          mssv: "18521103",
          email: "18521103@gm.uit.edu.vn",
          hoTen: "Lê Hải Minh",
          gioiTinh: "M",
          cmnd: "123456789",
          soDienThoai: "8412345678",
          sinhNhat: "21-09-2000",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.button-add {
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.upload {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
