<template>
  <Row id="signin" type="flex" space="20" justify="center" space-x="12">
    <Cell :xs="22" :sm="20" :md="18" width="12">
      <div class="h-panel">
        <div class="h-panel-bar grey-bg">
          <span class="h-panel-title">Trang đăng nhập thi online</span>
        </div>
        <div class="h-panel-body">
          <Row :space="20" type="flex" justify="center" align="center">
            <Cell :xs="22" :sm="20" :md="12" width="10">
              <Form
                mode="block"
                ref="form"
                :validOnChange="true"
                :showErrorTip="true"
              >
                <FormItem :showLabel="false">
                  <input
                    placeholder="Tên đăng nhập"
                    type="text"
                    v-model="user.email"
                  />
                </FormItem>
                <FormItem :showLabel="false">
                  <input
                    placeholder="Mật khẩu"
                    type="password"
                    v-model="user.password"
                  />
                </FormItem>
                <FormItem :showLabel="false">
                  <Button block color="primary">Đăng nhập</Button>
                </FormItem>
              </Form>
            </Cell>
            <Cell :xs="22" :sm="20" :md="12" width="10">
              <Row class="infoRow" :space-y="20">
                <Cell width="24">
                  <router-link to="/"><span>Quên mật khẩu?</span></router-link>
                </Cell>
                <Cell width="24">
                  <span
                    >Trình duyệt của bạn cần phải mở chức năng quản lí
                    cookie</span
                  >
                </Cell>
              </Row>
            </Cell>
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
.h-form {
  padding-bottom: 0;
}
.infoRow {
  text-align: start;
}
.h-panel-body {
  padding-top: 2rem;
}
</style>
