<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Phòng Thi</h2></span>
    </div>
    <div class="h-panel-body">
      <div>
        <div
          class="phongThi"
          v-for="phongThi in danhSachPhongThi"
          :key="phongThi.id"
        >
          <div class="icon">
            <router-link
              tag="a"
              :to="{ name: 'Test detail', params: { testId: phongThi.id } }"
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
                <p>Thời gian làm bài: {{ phongThi.thoiGianLamBai }}</p>
              </Cell>
              <Cell width="12">
                <p>Thời gian thi: {{ phongThi.thoiGianThi }}</p>
                <p>Năm học: {{ phongThi.namHoc }}</p>
                <p>Học kỳ: {{ phongThi.hocKy }}</p>
              </Cell>
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../../http-common";
export default {
  data() {
    return {
      danhSachPhongThi: [
        {
          id: "0",
          tenPhongThi: "IT003 - Cấu trúc dữ liệu và giải thuật",
          siSo: "40",
          giangVien: "Huỳnh Mạnh Hùng",
          thoiGianLamBai: "60 phút",
          thoiGianThi: "11/02/2021 - 10:30 am",
          namHoc: "2021-2022",
          hocKy: "Học kỳ 2",
        },
        {
          id: "1",
          tenPhongThi:
            "Thương mại Điện tử và Triển khai ứng dụng - NT210.M11.MMCL",
          siSo: "35",
          giangVien: "Huỳnh Hùng",
          thoiGianLamBai: "45 phút",
          thoiGianThi: "11/02/2021 - 7:30 am",
          namHoc: "2021-2022",
          hocKy: "Học kỳ 2",
        },
      ],
    };
  },
  mounted() {
    http.get("/sv/phong-thi/").then((data) => {
      console.log(data);
    });
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
