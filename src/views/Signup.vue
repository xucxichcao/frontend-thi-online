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
            </FormItem>
            <FormItem :showLabel="false">
              <input
                type="text"
                required
                v-model="school.email"
                placeholder="Email"
              />
            </FormItem>
            <FormItem :showLabel="false">
              <input
                type="text"
                required
                v-model="school.phone"
                placeholder="Số điện thoại"
              />
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
export default {
  name: "Signin",
  data: () => ({
    school: { name: "", email: "", number: "", password: "", repassword: "" },
    isShow1: false,
    isShow0: false,
  }),
  methods: {
    submit() {
      alert("Submited");
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
</style>
