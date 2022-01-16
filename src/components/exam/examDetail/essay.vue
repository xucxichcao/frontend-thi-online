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
          <TableItem title="Tên sinh viên" prop="sinhVien_name"></TableItem>
          <TableItem title="MSSV" prop="sinhVien_sid"></TableItem>
          <TableItem title="File">
            <template slot-scope="{ data }">
              <a v-if="data.baiLamTuLuan !== null" :href="data.baiLamTuLuan"
                >Tải bài làm</a
              >
              <span v-else>Sinh viên không nộp bài</span>
            </template>
          </TableItem>
        </Table>
        <Button primary @click="taiBaiThi">Tải bài thi</Button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../store/index";
import http from "../../../http-common";
export default {
  data() {
    return {
      datas: [],
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
          .get(`/gv/bai-thi-tu-luan/`, {
            params: { idPhongThi: this.$attrs.examId },
          })
          .then((response) => {
            this.datas = response.data.results;
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
    taiBaiThi() {
      if (this.role == "Giảng viên") {
        http
          .get(`/gv/danh-sach-bai-thi/`, {
            params: { idPhongThi: this.$attrs.examId },
            responseType: "blob",
          })
          .then((response) => {
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
              type: "application/x-zip-compressed",
            });

            let link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.click();
          });
      }
    },
  },
};
</script>

<style></style>
