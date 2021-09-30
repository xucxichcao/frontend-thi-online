<template>
  <div id="password-setting">
    <Row :space="20">
      <Cell width="24">
        <div class="h-panel">
          <div class="h-panel-bar">
            <h2 class="h-pannel-title">Thay đổi mật khẩu</h2>
          </div>
          <div class="h-panel-body">
            <Form mode="onecolumn">
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Mật khẩu hiện tại</span>
                  <input type="password" v-model="data.password" />
                  <div class="message">
                    {{ validation.firstError("data.password") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Mật khẩu mới</span>
                  <input type="password" v-model="data.newPassword" />
                  <div class="message">
                    {{ validation.firstError("data.newPassword") }}
                  </div>
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Nhập lại mật khẩu mớI</span>
                  <input type="password" v-model="data.reNewPassword" />
                  <div class="message">
                    {{ validation.firstError("data.reNewPassword") }}
                  </div>
                </div>
              </FormItem>
              <FormItem single :showLabel="false">
                <center>
                  <Button block color="primary" @click="submit"
                    >Cập nhật</Button
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

SimpleVueValidation.extendTemplates({
  required: "Không được để trống",
  match: "Mật khẩu nhập lại không giống.",
});

Vue.use(SimpleVueValidation);
export default {
  data() {
    return {
      data: {
        password: "",
        newPassword: "",
        reNewPassword: "",
      },
    };
  },
  validators: {
    "data.password"(value) {
      return Validator.value(value).required();
    },
    "data.newPassword"(value) {
      return Validator.value(value).required().minLength(6);
    },
    "data.reNewPassword, data.newPassword"(reNewPassword, newPassword) {
      if (this.submitted || this.validation.isTouched("data.reNewPassword")) {
        return Validator.value(reNewPassword).required().match(newPassword);
      }
    },
  },
  methods: {
    submit() {
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
};
</script>

<style scoped>
.h-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.h-form.h-form-onecolumn .h-form-item {
  padding: 0 10px 10px 10px;
}

.h-form.h-form-onecolumn .h-form-item:nth-child(1) {
  width: 50%;
}

.h-form.h-form-onecolumn .h-form-item:nth-child(2) {
  width: 50%;
}
.h-form.h-form-onecolumn .h-form-item:nth-child(3) {
  width: 50%;
}

.readOnlyField {
  display: flex;
  flex-direction: column;
  gap: 3px;
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
