<template>
  <div class="create-exam">
    <Row :space-x="40">
      <Cell width="16">
        <div class="h-panel">
          <div class="h-panel-bar">
            <span class="h-panel-title"><h2>Tạo đề thi</h2></span>
          </div>
          <div class="h-panel-body">
            <Form mode="twocolumn">
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Tên bài thi</span>
                  <input type="text" v-model="phongThi.tenPhongThi" />
                  <div class="message">
                    {{ validation.firstError("phongThi.tenPhongThi") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Thời gian làm bài</span>
                  <div class="h-input-group">
                    <input type="text" v-model="phongThi.thoiGianLamBai" />
                    <span class="h-input-addon">phút</span>
                  </div>
                  <div class="message">
                    {{ validation.firstError("phongThi.thoiGianLamBai") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false" class="h-form-item-editted-1">
                <div class="formField">
                  <span class="fieldLabel">File .csv đề bài</span>
                  <input
                    type="file"
                    accept=".csv"
                    @change="handleUploadDeThi"
                  />
                  <span>File đề tự luận</span>
                  <input type="file" @change="handleUploadDeThiTuLuan" />
                </div>
              </FormItem>
              <FormItem :showLabel="false" class="h-form-item-editted-2">
                <div class="formField">
                  <span class="fieldLabel">File .csv danh sách</span>
                  <input
                    type="file"
                    accept=".csv"
                    @change="handleUploadDanhSach"
                  />
                </div>
              </FormItem>
              <FormItem :showLabel="false" class="h-form-item-editted-1">
                <div class="formField">
                  <span class="fieldLabel">Ví dụ (không cần header)</span>
                  <Table :datas="deThiData" stripe>
                    <TableItem title="Số đáp án" prop="soDapAn"></TableItem>
                    <TableItem title="Đề" prop="de"></TableItem>
                    <TableItem title="Đáp án 1" prop="dapan1"></TableItem>
                    <TableItem title="Đáp án 2" prop="dapan2"></TableItem>
                    <TableItem title="Đáp án ..." prop="dapan"></TableItem>
                    <TableItem title="Đáp án n" prop="dapann"></TableItem>
                    <TableItem title="Đáp án đúng" prop="dapandung"></TableItem>
                  </Table>
                </div>
              </FormItem>
              <FormItem :showLabel="false" class="h-form-item-editted-2">
                <div class="formField">
                  <span class="fieldLabel">Ví dụ (không cần header)</span>
                  <Table :datas="danhSachData" stripe>
                    <TableItem title="Email" prop="email"></TableItem>
                  </Table>
                </div>
              </FormItem>
            </Form>
          </div>
        </div>
      </Cell>
      <Cell width="8">
        <div class="h-panel">
          <div class="h-panel-body">
            <Form mode="twocolumn" class="secondary-panel">
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Học kì</span>
                  <Select v-model="phongThi.hocKi" :datas="hocKi"></Select>
                  <div class="message">
                    {{ validation.firstError("phongThi.hocKi") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Năm học</span>
                  <input type="text" v-model="phongThi.namHoc" />
                  <div class="message">
                    {{ validation.firstError("phongThi.namHoc") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Ngày thi</span>
                  <DatePicker
                    v-model="phongThi.thoiGianThi"
                    :type="type"
                    :option="dateTimePickerOption"
                  ></DatePicker>
                  <div class="message">
                    {{ validation.firstError("phongThi.thoiGianThi") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Sỉ số</span>
                  <input type="text" v-model="phongThi.siSo" />
                  <div class="message">
                    {{ validation.firstError("phongThi.siSo") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Số câu hỏi</span>
                  <input type="text" v-model="deThi.soLuongCauHoi" />
                  <div class="message">
                    {{ validation.firstError("deThi.soLuongCauHoi") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <center>
                  <Button
                    @click="send"
                    size="l"
                    color="primary"
                    :disabled="!this.validation.hasError"
                    >Tạo</Button
                  >
                </center>
              </FormItem>
            </Form>
          </div>
        </div>
      </Cell>
    </Row>
  </div>
</template>

<script>
import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
import http from "../../http-common";

SimpleVueValidation.extendTemplates({
  required: "Không được để trống",
  regex: "Sai định dạng",
});

Vue.use(SimpleVueValidation);
export default {
  data: function () {
    return {
      file: "",
      phongThi: {
        tenPhongThi: undefined,
        hocKi: undefined,
        namHoc: undefined,
        thoiGianLamBai: undefined,
        thoiGianThi: undefined,
        siSo: undefined,
        danhSach: undefined,
      },
      deThi: {
        soLuongCauHoi: undefined,
        file: undefined,
        fileTuLuan: undefined,
      },
      deThiData: [
        {
          soDapAn: "4",
          de: "1+1 = ?",
          dapan1: "2",
          dapan2: "3",
          dapann: "5",
          dapan: "...",
          dapandung: "1",
        },
        {
          soDapAn: "5",
          de: "1+2 = ?",
          dapan1: "2",
          dapan2: "3",
          dapann: "6",
          dapan: "...",
          dapandung: "2",
        },
        {
          soDapAn: "7",
          de: "1+3 = ?",
          dapan1: "4",
          dapan2: "5",
          dapann: "10",
          dapan: "...",
          dapandung: "1",
        },
      ],
      danhSachData: [
        {
          email: "18521138@gm.uit.edu.vn",
        },
        {
          email: "18521103@gm.uit.edu.vn",
        },
        {
          email: "18520795@gm.uit.edu.vn",
        },
      ],
      select: null,
      type: "datetime",
      dateTimePickerOption: {
        start() {
          var today = new Date().toISOString().slice(0, 10);
          return today;
        },
        hours() {
          let hours = [];
          for (let i = 7; i <= 21; i++) {
            hours.push(i);
          }
          return hours;
        },
        minuteStep: 5,
      },
      hocKi: [
        { title: "Học kì 1", key: " 1" },
        { title: "Học kì 2", key: "2" },
        { title: "Học kì hè", key: "3" },
      ],
      hinhThuc: [
        { title: "Trắc nghiệm", key: "1" },
        { title: "Tự luận", key: "2" },
        { title: "Trắc nghiệm và tự luận", key: "3" },
      ],
      caigido: undefined,
    };
  },
  methods: {
    async send() {
      var flag = true;
      this.$validate().then(async function (success) {
        if (success) {
          flag = true;
        } else {
          flag = false;

          this.$Notice({
            type: "error",
            title: "Thất bại",
            content: "Dữ liệu đầu vào không hợp lệ",
          });
        }
      });
      if (flag == true) {
        var formDataPhongThi = new FormData();
        for (const [key, value] of Object.entries(this.phongThi)) {
          formDataPhongThi.append(key, value);
        }
        await http
          .post("/gv/phong-thi/", formDataPhongThi, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(async () => {
            var formDataDeThi = new FormData();
            for (const [key, value] of Object.entries(this.deThi)) {
              formDataDeThi.append(key, value);
            }
            await http
              .post("/gv/de-thi/", formDataDeThi, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then(() => {
                this.$Notice({
                  type: "success",
                  title: "Thành công",
                  content: "Thêm phòng thi thành công",
                });
              });
          });
      }
    },
    handleUploadDeThi(e) {
      this.deThi.file = e.target.files[0] || e.dataTransfer.files[0];
    },
    handleUploadDanhSach(e) {
      this.phongThi.danhSach = e.target.files[0] || e.dataTransfer.files[0];
    },
    handleUploadDeThiTuLuan(e) {
      this.deThi.fileTuLuan = e.target.files[0] || e.dataTransfer.files[0];
    },
  },
  validators: {
    "phongThi.tenPhongThi"(value) {
      return Validator.value(value).required();
    },
    "phongThi.thoiGianLamBai"(value) {
      return Validator.value(value).required().regex("([0-9])");
    },
    "phongThi.hocKi"(value) {
      return Validator.value(value).required();
    },
    "phongThi.namHoc"(value) {
      return Validator.value(value)
        .required()
        .regex(`(20[0-9]{2})-(20[0-9]{2})`);
    },
    "phongThi.thoiGianThi"(value) {
      return Validator.value(value).required();
    },
    "phongThi.siSo"(value) {
      return Validator.value(value).required().integer("Không được nhập chữ");
    },
    "deThi.soLuongCauHoi"(value) {
      return Validator.value(value).required().integer("Không được nhập chữ");
    },
  },
};
</script>

<style>
.formField {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fieldLabel {
  font-size: 15px;
}
.h-form.h-form-twocolumn .h-form-item {
  padding: 0 10px 10px 10px;
}
.secondary-panel.h-form > .h-form-item:last-of-type {
  padding-top: 30px;
}
.message {
  color: red;
}
.h-form-item-editted-1 {
  width: 75% !important;
}
.h-form-item-editted-2 {
  width: 25% !important;
}
</style>
