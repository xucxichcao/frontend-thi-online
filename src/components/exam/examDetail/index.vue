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
            Giảng viên:
            <a class="text" href="#">{{ phongThi.giangVien_name }}</a>
          </p>
          <p>Học kì: {{ phongThi.hocKi }}</p>
          <p>Năm học: {{ phongThi.namHoc }}</p>
          <p v-if="phongThi.diem">Kết quả: {{ phongThi.diem }}</p></Col
        >
        <Col width="12">
          <p v-if="this.role == 'Sinh viên'">
            Số lượng câu hỏi: {{ dethi.soLuongCauHoi }}
          </p>
        </Col>
      </Row>
    </div>
    <div class="h-panel-body">
      <div class="thi">
        <div class="button">
          <p>Thời gian làm bài thi: {{ phongThi.thoiGianLamBai }} phút</p>
          <Button v-if="this.role == 'Giảng viên'" @click="tuLuan()"
            >Xem bài thi tự luận</Button
          >
          <Button v-if="this.role == 'Giảng viên'" @click="uploadDiem()"
            >Upload điểm</Button
          >
          <Button
            v-if="this.role == 'Giảng viên' || this.role == 'Trường'"
            @click="xemDiem()"
            >Xem điểm</Button
          >
          <Button v-if="this.role == 'Giảng viên'" @click="vaoThi()"
            >Xem chi tiết đề thi</Button
          >
          <Button
            v-else-if="this.role == 'Sinh viên'"
            @click="vaoThi()"
            :disabled="!this.end"
            >Vào thi</Button
          >

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
      end: 0,
    };
  },
  computed: {
    role() {
      return this.$store.getters["account/getRole"];
    },
  },
  watch: {
    role() {
      this.loadData(this.role);
    },
  },
  async mounted() {
    this.loading = true;
    await this.loadData(this.role);
  },
  methods: {
    async vaoThi() {
      this.loading = true;
      if (this.role == "Sinh viên") {
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
      } else if (this.role == "Giảng viên") {
        await http
          .get(`/gv/ctdt/`, { params: { idPhongThi: this.id } })
          .then((response) => {
            store.dispatch("attempt/setCTDT", response.data["results"]);
            this.loading = false;
            this.$router.push(`/exam/${this.id}/all`);
          });
      }
    },
    async loadData(newRole) {
      if (newRole == "Sinh viên") {
        await http.get("/sv/phong-thi/" + this.id).then((response) => {
          this.phongThi = response.data;
          store.dispatch("attempt/setTenPhongThi", response.data.tenPhongThi);
          this.loading = false;
        });
        await http
          .get(`/sv/get-de-thi/`, { params: { idPhongThi: this.id } })
          .then((response) => {
            this.dethi = response.data.results[0];
            this.loading = false;
          });
        var ngayThi = new Date(this.phongThi.thoiGianThi);
        var endTime = new Date(
          ngayThi.getTime() + this.phongThi.thoiGianLamBai * 60000
        );
        this.end = endTime >= Date.now();
        store.dispatch("attempt/setThoiGianKetThuc", endTime);
      } else if (newRole == "Giảng viên") {
        await http.get("/gv/phong-thi/" + this.id).then((response) => {
          this.phongThi = response.data;
          store.dispatch("attempt/setTenPhongThi", response.data.tenPhongThi);
          this.loading = false;
        });
      } else if (newRole == "Trường") {
        await http.get("/school/phong-thi/" + this.id).then((response) => {
          this.phongThi = response.data;
          store.dispatch("attempt/setTenPhongThi", response.data.tenPhongThi);
          this.loading = false;
        });
      }
    },
    async xemDiem() {
      this.loading = true;
      if (this.role == "Giảng viên") {
        await http
          .get(`/gv/diem-thi/`, { params: { idPhongThi: this.id } })
          .then((response) => {
            store.dispatch("attempt/setDiem", response.data);
            this.loading = false;
            this.$router.push(`/exam/${this.id}/point`);
          });
      } else if (this.role == "Trường") {
        await http
          .get(`/school/diem-thi/`, { params: { idPhongThi: this.id } })
          .then((response) => {
            store.dispatch("attempt/setDiem", response.data);
            this.loading = false;
            this.$router.push(`/exam/${this.id}/point`);
          });
      }
    },
    async tuLuan() {
      this.$router.push(`/exam/${this.id}/essay`);
    },
    async uploadDiem() {
      this.$router.push(`/exam/${this.id}/upload`);
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
