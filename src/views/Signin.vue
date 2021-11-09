<template>
  <Row id="signin" type="flex" space="20" justify="center">
    <Cell :xs="22" :sm="20" :md="18" width="12">
      <div class="h-panel">
        <div class="h-panel-bar grey-bg">
          <span class="h-panel-title">Trang đăng nhập thi online</span>
        </div>
        <div class="h-panel-body">
          <Row
            v-if="this.message"
            :space="20"
            type="flex"
            justify="center"
            align="center"
          >
            <Cell :xs="22" :sm="20" :md="12" width="10">
              <div class="error">
                <p>{{ this.message }}</p>
              </div>
            </Cell>
          </Row>
          <Row :space="20" type="flex" justify="center" align="center">
            <Cell :xs="22" :sm="20" :md="12" width="10">
              <Form
                mode="block"
                ref="form"
                :validOnChange="true"
                :showErrorTip="true"
              >
                <FormItem :showLabel="false">
                  <input placeholder="Email" type="text" v-model="user.email" />
                </FormItem>
                <FormItem :showLabel="false">
                  <input
                    placeholder="Mật khẩu"
                    type="password"
                    v-model="user.password"
                  />
                </FormItem>

                <FormItem :showLabel="false">
                  <Button block color="primary" @click="signIn()"
                    >Đăng nhập</Button
                  >
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
          <Loading :loading="loading"></Loading>
        </div>
      </div>
    </Cell>
  </Row>
</template>

<script>
import { userService } from "../services/account";

export default {
  name: "Signin",
  data: () => ({
    user: { email: "", password: "" },
    loading: false,
  }),
  methods: {
    signIn() {
      this.loading = true;
      userService
        .login(this.user.email, this.user.password, this.$router)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    message() {
      return this.$store.getters["account/getMessage"];
    },
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
}
.h-form {
  padding-bottom: 0;
}
.h-panel-body {
  padding-top: 2rem;
}
#signin {
  margin-top: 3rem !important;
}

.error {
  display: flex;
  justify-content: center;
  color: #691911;
  background-color: #f4d6d2;
  border-color: #f0c5c1;
  margin-bottom: 1rem !important;
}
</style>
