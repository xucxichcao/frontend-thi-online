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
            <div class="upload-item">
              <h3>Upload file csv theo mẫu dưới (không thêm header):</h3>
              <div>
                <input type="file" accept=".csv" @change="handleFileUpload" />
              </div>
            </div>
            <div class="upload-item">
              <h3>Chọn loại tài khoản:</h3>
              <div>
                <Select v-model="sendData.type" :datas="param"></Select>
              </div>
            </div>
          </div>
          <div style="margin-top: 2em">
            <div>
              <Table :datas="datas" stripe>
                <TableItem title="MSSV" prop="mssv"></TableItem>
                <TableItem title="Email" prop="email"></TableItem>
                <TableItem title="Mật khẩu" prop="matKhau"></TableItem>
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
              <Button color="primary" icon="h-icon-plus" @click="send"
                >Thêm tài khoản</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../http-common";
export default {
  data() {
    return {
      datas: [
        {
          mssv: "18521138",
          email: "18521138@gm.uit.edu.vn",
          matKhau: "123",
          hoTen: "Cao Trọng Nghĩa",
          gioiTinh: "M",
          cmnd: "123456789",
          soDienThoai: "8412345678",
          sinhNhat: "28-11-2000",
        },
        {
          mssv: "18520795",
          email: "18520795@gm.uit.edu.vn",
          matKhau: "123",
          hoTen: "Huỳnh Mạnh Hùng",
          gioiTinh: "M",
          cmnd: "123456789",
          soDienThoai: "8412345678",
          sinhNhat: "05-11-2000",
        },
        {
          mssv: "18521103",
          email: "18521103@gm.uit.edu.vn",
          matKhau: "123",
          hoTen: "Lê Hải Minh",
          gioiTinh: "M",
          cmnd: "123456789",
          soDienThoai: "8412345678",
          sinhNhat: "21-09-2000",
        },
      ],
      sendData: {
        csv_file: "",
        type: "",
      },
      param: [
        { title: "Sinh viên", key: "S" },
        { title: "Giảng viên", key: "T" },
      ],
    };
  },
  methods: {
    handleFileUpload(e) {
      this.sendData.csv_file = e.target.files[0] || e.dataTransfer.files[0];
    },
    send() {
      let formData = new FormData();
      formData.append("csv_file", this.sendData.csv_file);
      formData.append("type", this.sendData.type);
      return http
        .post("/school/create-user/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$Notice({
            type: "success",
            title: "Thành công",
            content: "Thêm tài khoản thành công",
          });
        })
        .catch(() => {
          this.$Notice({
            type: "error",
            title: "Thất bại",
            content: "Dữ liệu vào không phù hợp",
          });
        });
    },
  },
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
  gap: 10px;
}
.upload-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
