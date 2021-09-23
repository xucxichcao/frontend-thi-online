<template>
  <Row id="signin" type="flex" space="20" justify="center" space-x="12">
    <Cell :xs="22" :sm="20" :md="16">
      <div class="h-panel">
        <div class="h-panel-bar grey-bg">
          <span class="h-panel-title">Trang đăng nhập thi online</span>
        </div>
        <div class="h-panel-body">
          <Row space="10" type="flex" justify="center" align="center">
            <Cell :xs="22" :sm="20" :md="11">
              <Form
                mode="block"
                ref="form"
                :validOnChange="true"
                :showErrorTip="true"
              >
                <FormItem>
                  <input
                    placeholder="Tên đăng nhập"
                    type="text"
                    v-model="user.email"
                  />
                </FormItem>
                <FormItem>
                  <input
                    placeholder="Mật khẩu"
                    type="password"
                    v-model="user.password"
                  />
                </FormItem>
                <FormItem>
                  <Button color="primary">Đăng nhập</Button>
                </FormItem>
              </Form>
            </Cell>
            <Cell :xs="22" :sm="20" :md="11"></Cell>
          </Row>
        </div>
      </div>
    </Cell>
  </Row>
</template>

<script>
export default {
  name: "Signin",
  data: () => ({
    user: { email: "", password: "" },
  }),
};
</script>

<style scoped>
.grey-bg {
  background-color: rgba(0, 0, 0, 0.03);
}
.h-form-item {
  padding-bottom: 0;
}
</style>
