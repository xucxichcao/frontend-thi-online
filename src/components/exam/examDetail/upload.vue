<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">
        <h2>Upload điểm</h2>
      </span>
    </div>
    <div class="h-panel-body">
      <Form>
        <FormItem :showLabel="false">
          <div class="formField">
            <span class="fieldLabel">File .csv điểm</span>
            <input type="file" accept=".csv" @change="handleUploadDiem" />
          </div>
        </FormItem>
      </Form>
      <Table :datas="datas" stripe>
        <TableItem title="Mã số sinh viên" prop="name"></TableItem>
        <TableItem title="Điểm" prop="diem" align="center"></TableItem>
      </Table>
      <div class="send">
        <Button @click="download">Tải file danh sách</Button>

        <Button @click="send" color="primary" :disabled="flag">Upload</Button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../../http-common";
export default {
  data() {
    return {
      file: undefined,
      flag: true,
      datas: [
        { name: "18521138", diem: "10" },
        { name: "18520795", diem: "10" },
        { name: "18521103", diem: "10" },
      ],
      upload: [],
    };
  },
  methods: {
    handleUploadDiem(e) {
      this.file = e.target.files[0] || e.dataTransfer.files[0];
      this.flag = false;
    },
    send() {
      var formData = new FormData();
      formData.append("idPhongThi", this.$attrs.examId);
      formData.append("file", this.file);
      http.post("/gv/upload-diem-tu-luan/", formData, {
        haeders: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    download() {
      http
        .get("/gv/download-file-diem-tu-luan/", {
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

<style>
.formField {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 1em;
}

.send {
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
}
</style>
