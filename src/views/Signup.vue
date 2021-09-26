<template>
  <Row id="signup" type="flex" space="20" justify="center">
    <Cell :xs="22" :sm="20" :md="18" width="10">
      <div class="h-panel">
        <div class="h-panel-bar grey-bg">
          <span class="h-panel-title">Trang đăng ký thi online</span>
        </div>
        <div class="h-panel-body">
          <Form mode="single">
            <FormItem :showLabel="false">
              <input
                type="text"
                required
                v-model="school.name"
                placeholder="Tên trường"
              />
              <div class="message">
                {{ validation.firstError("school.name") }}
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <input
                type="text"
                required
                v-model="school.email"
                placeholder="Email"
              />
              <div class="message">
                {{ validation.firstError("school.email") }}
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <input
                type="text"
                required
                v-model="school.phone"
                placeholder="Số điện thoại"
              />
              <div class="message">
                {{ validation.firstError("school.phone") }}
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="h-input-group">
                <FormItem :showLabel="false">
                  <input
                    :type="[isShow0 ? 'text' : 'password']"
                    required
                    v-model="school.password"
                    placeholder="Mật khẩu"
                  />
                  <div class="message">
                    {{ validation.firstError("school.password") }}
                  </div>
                </FormItem>
                <Button
                  @click="isShow0 = !isShow0"
                  noBorder
                  class="h-input-addon"
                  ><font-awesome-icon :icon="isShow0 ? 'eye-slash' : 'eye'"
                /></Button>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <div class="h-input-group">
                <FormItem :showLabel="false">
                  <input
                    :type="[isShow1 ? 'text' : 'password']"
                    required
                    v-model="school.repassword"
                    placeholder="Nhập lại mật khẩu"
                  />
                  <div class="message">
                    {{ validation.firstError("school.repassword") }}
                  </div>
                </FormItem>
                <Button
                  @click="isShow1 = !isShow1"
                  noBorder
                  class="h-input-addon"
                  ><font-awesome-icon :icon="isShow1 ? 'eye-slash' : 'eye'"
                /></Button>
              </div>
            </FormItem>
            <FormItem :showLabel="false">
              <Button color="primary" block @click="submit">Đăng ký</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </Cell>
  </Row>
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
  name: "Signin",
  data: () => ({
    school: { name: "", email: "", phone: "", password: "", repassword: "" },
    isShow1: false,
    isShow0: false,
  }),
  validators: {
    "school.name"(value) {
      return Validator.value(value).required();
    },
    "school.email"(value) {
      return Validator.value(value).required().email();
    },
    "school.phone"(value) {
      return Validator.value(value)
        .required()
        .regex(
          `([+84|84|0]+(3|5|7|8|9))+([0-9]{8})`,
          "Vui lòng nhập đúng định dạng số điện thoại"
        );
    },
    "school.password"(value) {
      return Validator.value(value).required().minLength(6);
    },
    "school.repassword, school.password"(repassword, password) {
      if (this.submitted || this.validation.isTouched("school.repassword")) {
        return Validator.value(repassword).required().match(password);
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
#signup {
  margin-top: 3rem !important;
}
.grey-bg {
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
}
.h-form {
  padding-bottom: 0;
}
.infoRow {
  text-align: start;
}
.h-panel-body {
  padding-top: 2rem;
}
.h-input-addon {
  width: 30px;
}
.message {
  color: red;
}
</style>
