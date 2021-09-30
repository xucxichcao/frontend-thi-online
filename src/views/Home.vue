<template>
  <div class="home">
    <Layout :siderFixed="true" :siderCollapsed="siderCollapsed">
      <Sider theme="dark">
        <div class="layout-logo"></div>
        <Menu
          ref="menu"
          style="margin-top: 20px"
          className="h-menu-dark"
          :datas="menuDatas"
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
            <Button size="l" noBorder
              ><font-awesome-icon icon="sign-out-alt" size="lg"
            /></Button>
          </div>
        </HHeader>
        <Content
          style="padding: 0px 30px; display: flex; flex-direction: column"
        >
          <Breadcrumb
            :datas="breadCrumbs"
            style="margin: 15px 0px"
          ></Breadcrumb>
          <router-view :key="$route.path"></router-view>
        </Content>
        <HFooter class="footer-height">
          <span class="footer-text">
            Copyright © {{ year }}
            <a href="http://www.ch-un.com" target="_blank">Lan</a></span
          >
        </HFooter>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      year: new Date().getFullYear(),
      siderCollapsed: true,
      menuDatas: [
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
      ],
    };
  },
  computed: {
    breadCrumbs() {
      let pathArray = this.$route.path.split("/");
      let breadCrumbArray = [
        { title: "Trang chủ", route: { name: "Home core" } },
      ];
      pathArray.forEach((e, i) => {
        if (i === pathArray.length - 1 && e !== "") {
          breadCrumbArray.push({ title: this.$route.matched[i].meta.name });
        } else if (e !== "") {
          breadCrumbArray.push({
            title: this.$route.matched[i].meta.name,
            route: this.$route.matched[i].path,
          });
        }
      });
      return breadCrumbArray;
    },
  },
  methods: {
    trigger(data) {
      if (data.children.length > 0) return;
      this.$router.push({ name: data.key });
    },
  },
  mounted() {
    if (this.$route.name) {
      this.$refs.menu.select(this.$route.name);
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
