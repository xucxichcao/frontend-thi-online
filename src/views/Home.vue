<template>
  <div class="home">
    <Layout :siderFixed="true" :siderCollapsed="siderCollapsed">
      <Sider theme="dark">
        <div class="layout-logo"></div>
        <Menu
          ref="menu"
          style="margin-top: 20px"
          className="h-menu-dark"
          v-if="role == 'Trường'"
          :datas="menuDatasSchool"
          :inlineCollapsed="siderCollapsed"
          @click="trigger"
        ></Menu>
        <Menu
          ref="menu"
          style="margin-top: 20px"
          className="h-menu-dark"
          v-if="role == 'Sinh viên'"
          :datas="menuDatasStudent"
          :inlineCollapsed="siderCollapsed"
          @click="trigger"
        ></Menu>
        <Menu
          ref="menu"
          style="margin-top: 20px"
          className="h-menu-dark"
          v-if="role == 'Giảng viên'"
          :datas="menuDatasTeacher"
          :inlineCollapsed="siderCollapsed"
          @click="trigger"
        ></Menu>
      </Sider>
      <Layout :headerFixed="true">
        <HHeader theme="white">
          <div
            class="navbar"
            style="display: flex; height: 100%; padding-right: 30px"
          >
            <Button
              icon="h-icon-menu"
              size="l"
              noBorder
              style="font-size: 20px; margin: 0 30px"
              @click="siderCollapsed = !siderCollapsed"
            ></Button>
            <Button size="l" noBorder @click="signOut()"
              ><font-awesome-icon icon="sign-out-alt" size="lg"
            /></Button>
          </div>
        </HHeader>
        <Content
          style="padding: 0px 30px; display: flex; flex-direction: column"
        >
          <Breadcrumbs />
          <router-view :key="$route.path"></router-view>
        </Content>
        <HFooter class="footer-height">
          <span class="footer-text">
            Copyright © {{ year }}
            <a href="http://www.ch-un.com" target="_blank">UIT@MMT</a></span
          >
        </HFooter>
      </Layout>
    </Layout>
    <Loading :loading="loading"></Loading>
  </div>
</template>

<script>
import { userService } from "../services/account";
export default {
  name: "Home",
  data() {
    return {
      year: new Date().getFullYear(),
      loading: true,
      siderCollapsed: true,
      menuDatasStudent: [
        {
          title: "Trang chủ",
          key: "Home core",
          icon: "h-icon-home",
        },
        {
          title: "Tài khoản",
          key: "Setting default",
          icon: "h-icon-user",
        },
        {
          title: "Danh sách phòng thi",
          key: "Exam list",
          icon: "h-icon-task",
        },
      ],
      menuDatasTeacher: [
        {
          title: "Trang chủ",
          key: "Home core",
          icon: "h-icon-home",
        },
        {
          title: "Tài khoản",
          key: "Setting default",
          icon: "h-icon-user",
        },
        {
          title: "Danh sách phòng thi",
          key: "Exam list",
          icon: "h-icon-task",
        },
        {
          title: "Tạo đề thi",
          key: "Create exam",
          icon: "h-icon-plus",
        },
      ],
      menuDatasSchool: [
        {
          title: "Trang chủ",
          key: "Home core",
          icon: "h-icon-home",
        },
        {
          title: "Tài khoản",
          key: "Setting default",
          icon: "h-icon-user",
        },
        {
          title: "Danh sách phòng thi",
          key: "Exam list",
          icon: "h-icon-task",
        },
        {
          title: "Tạo tài khoản",
          key: "Add student",
          icon: "h-icon-plus",
        },
      ],
    };
  },
  computed: {
    role() {
      return this.$store.getters["account/getRole"];
    },
  },
  watch: {
    $route() {
      if (this.$route.name) {
        this.$refs.menu.select(this.$route.meta.sideBar);
      }
    },
    role() {
      this.loadData(this.role);
    },
  },
  methods: {
    trigger(data) {
      if (data.children.length > 0) return;
      this.$router.push({ name: data.key });
    },
    signOut() {
      userService.logout(this.$router);
    },
    async loadData(role) {
      if (role) {
        this.loading = false;
      }
    },
  },
  async mounted() {
    this.loading = true;
    await this.loadData(this.role);
    if (this.$route.matched) {
      this.$refs.menu.select(this.$route.meta.sideBar);
    }
  },
};
</script>

<style scoped>
.navbar button:last-of-type {
  margin-left: auto;
}
.footer-height {
  min-height: 10vh;
  display: flex;
  align-content: center;
  justify-content: center;
}
.footer-text {
  margin: auto;
}
.h-layout.h-layout-header-fixed {
  padding-top: 7vh;
}
.h-layout-header {
  height: 7vh;
}
.h-layout.h-layout-header-fixed > .h-layout-content {
  min-height: 83vh;
}
</style>
