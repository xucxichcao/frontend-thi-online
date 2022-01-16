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
      <Button primary @click="taiDiem">Tải điểm</Button>
    </div>
  </div>
</template>

<script>
import store from "../../../store/index";
import http from "../../../http-common";
export default {
  data() {
    return {
      data: [],
    };
  },
  computed: {
    role() {
      return store.getters["account/getRole"];
    },
  },
  watch: {
    role(value) {
      this.loadData(value);
    },
  },
  async mounted() {
    this.loading = true;
    await this.loadData(this.role);
  },
  methods: {
    loadData(role) {
      if (role == "Giảng viên") {
        http
          .get(`/gv/diem-thi/`, { params: { idPhongThi: this.$attrs.examId } })
          .then((response) => {
            this.data = response.data;
          });
      } else if (role == "Trường") {
        http
          .get(`/school/diem-thi/`, {
            params: { idPhongThi: this.$attrs.examId },
          })
          .then((response) => {
            this.data = response.data;
            this.loading = false;
          });
      }
    },
    taiDiem() {
      http
        .get("/gv/diem-phong-thi/", {
          params: { idPhongThi: this.$attrs.examId },
          responseType: "blob",
        })
        .then(function (response) {
          var filename = "";
          var disposition = response.headers["content-disposition"];
          if (disposition && disposition.indexOf("attachment") !== -1) {
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
              filename = matches[1].replace(/['"]/g, "");
            }
          }
          let blob = new Blob([response.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });

          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          link.click();
        });
    },
  },
};
</script>

<style></style>
