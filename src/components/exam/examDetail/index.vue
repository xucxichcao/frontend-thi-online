<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"
        ><h2>{{ phongThi.tenPhongThi }}</h2></span
      >
      <Row :space="30">
        <Col width="12">
          <p>Thời gian thi: {{ phongThi.thoiGianThi }}</p>
          <p>
            Giảng viên: <a class="text" href="#">{{ phongThi.giangVien }}</a>
          </p>
          <p>Học kì: {{ phongThi.hocKi }}</p>
          <p>Năm học: {{ phongThi.namHoc }}</p>
          <p>Sỉ số: {{ phongThi.siSo }}</p>
          <p>Thời gian làm bài: {{ phongThi.thoiGianLamBai }}</p>
          <p v-if="phongThi.diem">Kết quả: {{ phongThi.diem }}</p></Col
        >
        <Col width="12">
          <p>Số lượng câu hỏi: {{ dethi.soLuongCauHoi }}</p>
        </Col>
      </Row>
    </div>
    <div class="h-panel-body">
      <div class="thi">
        <p>Thời gian làm bài thi: {{ phongThi.thoiGianLamBai }}</p>
        <div class="button">
          <Button @click="vaoThi()">Vào thi</Button>
          <router-link tag="Button" :to="{ name: 'Home core' }"
            >Trờ về trang chủ</router-link
          >
        </div>
      </div>
    </div>
    <Loading :loading="loading"></Loading>
  </div>
</template>

<script>
import http from "../../../http-common";
import store from "../../../store/index";
export default {
  data() {
    return {
      phongThi: {},
      id: this.$route.params.examId,
      loading: false,
      dethi: {},
      key: "",
    };
  },
  async mounted() {
    this.loading = true;
    await http.get("/sv/phong-thi/" + this.id).then((response) => {
      this.phongThi = response.data;
    });
    await http
      .get(`/sv/get-de-thi/`, { params: { idPhongThi: this.id } })
      .then((response) => {
        this.dethi = response.data.results[0];
        this.loading = false;
      });
  },
  methods: {
    async vaoThi() {
      this.loading = true;
      await http
        .get(`/sv/get-key/`, { params: { idPhongThi: this.id } })
        .then((response) => {
          this.key = response.data.results[0].key;
          this.loading = false;
        });
      await http
        .get(`/sv/ctdt/`, { params: { key: this.key } })
        .then((response) => {
          store.dispatch("attempt/setCTDT", response.data["results"]);
          this.loading = false;
          this.$router.push(`/exam/${this.id}/attempt`);
        });
    },
  },
};
</script>

<style>
.thi {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button > button {
  margin-top: 1rem !important;
}

a:hover {
  text-decoration: underline;
}
</style>
