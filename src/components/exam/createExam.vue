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
                  <input type="text" v-model="phongThi.ten" />
                  <div class="message">
                    {{ validation.firstError("phongThi.ten") }}
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
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">File .csv đề bài</span>
                  <input type="file" accept=".csv" />
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
                  <Button @click="next" size="l" color="primary">Next</Button>
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

SimpleVueValidation.extendTemplates({
  required: "Không được để trống",
  regex: "Sai định dạng",
});

Vue.use(SimpleVueValidation);
export default {
  data: function () {
    return {
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
      },
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
    };
  },
  methods: {
    next() {
      this.submitted = true;
      this.$validate().then(function (success) {
        if (success) {
          alert("Validation succeeded!");
        } else {
          alert("Validation failed!");
        }
      });
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
    "phongThi.danhSach"(value) {
      return Validator.value(value).required();
    },
    "deThi.soLuongCauHoi"(value) {
      return Validator.value(value).required().integer("Không được nhập chữ");
    },
    "deThi.file"(value) {
      return Validator.value(value).required();
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
</style>
