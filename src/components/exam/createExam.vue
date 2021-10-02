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
                  <input type="text" v-model="data.ten" />
                  <div class="message">
                    {{ validation.firstError("data.ten") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Thời gian làm bài</span>
                  <div class="h-input-group">
                    <input type="text" v-model="data.time" />
                    <span class="h-input-addon">phút</span>
                  </div>
                  <div class="message">
                    {{ validation.firstError("data.time") }}
                  </div>
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
                  <Select v-model="data.hocKi" :datas="hocKi"></Select>
                  <div class="message">
                    {{ validation.firstError("data.hocKi") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Năm học</span>
                  <input type="text" v-model="data.namHoc" />
                  <div class="message">
                    {{ validation.firstError("data.namHoc") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Ngày thi</span>
                  <DatePicker
                    v-model="data.ngayThi"
                    :type="type"
                    :option="dateTimePickerOption"
                  ></DatePicker>
                  <div class="message">
                    {{ validation.firstError("data.ngayThi") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Hình thức thi</span>
                  <Select v-model="data.hinhThuc" :datas="hinhThuc"></Select>
                  <div class="message">
                    {{ validation.firstError("data.hinhThuc") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="formField">
                  <span class="fieldLabel">Số câu hỏi</span>
                  <input type="text" v-model="data.soLuong" />
                  <div class="message">
                    {{ validation.firstError("data.soLuong") }}
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
      data: {
        ten: undefined,
        hocKi: undefined,
        namHoc: undefined,
        ngayThi: undefined,
        hinhThuc: undefined,
        soLuong: undefined,
        time: undefined,
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
    "data.ten"(value) {
      return Validator.value(value).required();
    },
    "data.time"(value) {
      return Validator.value(value).required().regex("([0-9])");
    },
    "data.hocKi"(value) {
      return Validator.value(value).required();
    },
    "data.namHoc"(value) {
      return Validator.value(value)
        .required()
        .regex(`(20[0-9]{2})-(20[0-9]{2})`);
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
