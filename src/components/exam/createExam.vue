<template>
  <div class="create-exam">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title"><h2>Tạo đề thi</h2></span>
      </div>
      <div class="h-panel-body">
        <div
          class="h-panel"
          style="
            width: 1000px;
            margin: 0 auto;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <Form mode="onecolumn">
            <FormItem :showLabel="false">
              <div class="readOnlyField">
                <span class="fieldLabel">Tên bài thi</span>
                <input type="text" v-model="data.ten" />
                <div class="message">
                  {{ validation.firstError("data.ten") }}
                </div>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="readOnlyField">
                <span class="fieldLabel">Học kì</span>
                <Select v-model="data.hocKi" :datas="hocKi"></Select>
                <div class="message">
                  {{ validation.firstError("data.hocKi") }}
                </div>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="readOnlyField">
                <span class="fieldLabel">Năm học</span>
                <input type="text" v-model="data.namHoc" />
                <div class="message">
                  {{ validation.firstError("data.namHoc") }}
                </div>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="readOnlyField">
                <span class="fieldLabel">Ngày thi</span>
                <DatePicker v-model="data.ngayThi" :type="type"></DatePicker>
                <div class="message">
                  {{ validation.firstError("data.ngayThi") }}
                </div>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="readOnlyField">
                <span class="fieldLabel">Hình thức thi</span>
                <Select v-model="data.hinhThuc" :datas="hinhThuc"></Select>
                <div class="message">
                  {{ validation.firstError("data.hinhThuc") }}
                </div>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="readOnlyField">
                <span class="fieldLabel">Số lượng câu hỏi trong 1 đề</span>
                <input type="text" v-model="data.soLuong" />
                <div class="message">
                  {{ validation.firstError("data.soLuong") }}
                </div>
              </div>
            </FormItem>
            <FormItem single :showLabel="false">
              <center>
                <Button @click="next" block color="primary">Next</Button>
              </center>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

SimpleVueValidation.extendTemplates({
  required: "Không được để trống",
});

Vue.use(SimpleVueValidation);
export default {
  data: function () {
    return {
      data: {
        ten: "",
        hocKi: "",
        namHoc: "",
        ngayThi: "",
        hinhThuc: "",
        soLuong: "",
      },
      select: null,
      type: "date",
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
    "data.ten"(value) {
      return Validator.value(value).required();
    },
    "data.hocKi"(value) {
      return Validator.value(value).required();
    },
    "data.namHoc"(value) {
      return Validator.value(value).required().integer("Không được nhập chữ");
    },
    "data.ngayThi"(value) {
      return Validator.value(value).required();
    },
    "data.hinhThuc"(value) {
      return Validator.value(value).required();
    },
    "data.soLuong"(value) {
      return Validator.value(value).required().integer("Không được nhập chữ");
    },
  },
};
</script>

<style>
.readOnlyField {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 500px;
}
.fieldLabel {
  font-size: 15px;
}
.h-form > .h-form-item:last-of-type {
  padding-top: 15px;
}
.h-form > .h-form-item:last-of-type button {
  width: 25%;
}
.message {
  color: red;
}
</style>
