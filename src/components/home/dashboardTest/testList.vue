<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Phòng Thi</h2></span>
    </div>
    <div class="h-panel-body">
      <div>
        <div
          class="phongThi"
          v-for="phongThi in danhSachPhongThi.results"
          :key="phongThi.id"
        >
          <div class="icon">
            <router-link
              tag="a"
              :to="{ name: 'Exam detail', params: { examId: phongThi.id } }"
            >
              <i class="h-icon-task"></i>
              {{ phongThi.tenPhongThi }}</router-link
            >
          </div>
          <div>
            <Row :space="30">
              <Cell width="12">
                <p>
                  Giảng viên:
                  <a class="text" href="#">{{ phongThi.giangVien }}</a>
                </p>
                <p>Sĩ số: {{ phongThi.siSo }}</p>
                <p>Thời gian làm bài: {{ phongThi.thoiGianLamBai }} phút</p>
              </Cell>
              <Cell width="12">
                <p>Thời gian thi: {{ phongThi.thoiGianThi }}</p>
                <p>Năm học: {{ phongThi.namHoc }}</p>
                <p>Học kỳ: {{ phongThi.hocKi }}</p>
                <p v-if="phongThi.diem">Kết quả: {{ phongThi.diem }}</p>
              </Cell>
            </Row>
          </div>
        </div>
      </div>
    </div>
    <Loading :loading="loading"></Loading>
  </div>
</template>

<script>
import http from "../../../http-common";

export default {
  data() {
    return {
      danhSachPhongThi: {},
      loading: false,
      role: "",
    };
  },
  async mounted() {
    this.loading = true;
    this.role = this.$store.getters["account/getRole"];
    if (this.role == "Sinh viên") {
      await http.get("/sv/phong-thi/").then((response) => {
        this.danhSachPhongThi = response.data;
        this.loading = false;
      });
    } else if (this.role == "Giảng viên") {
      await http.get("/gv/phong-thi/").then((response) => {
        this.danhSachPhongThi = response.data;
        this.loading = false;
      });
    }
  },
};
</script>

<style>
.phongThi {
  margin-top: 0.5rem;
  border: 1px solid #eeeeee;
  padding: 1rem;
}
.phongThi a {
  font-size: 25px;
}

.phongThi a:hover {
  text-decoration: underline;
}

.phongThi .text {
  display: inline;
  font-size: 14px;
  background: none;
}
</style>
