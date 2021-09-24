<template>
  <div class="home">
    <Layout :siderFixed="true" :siderCollapsed="siderCollapsed">
      <Sider theme="dark">
        <div class="layout-logo"></div>
        <Menu
          style="margin-top: 20px"
          className="h-menu-dark"
          :datas="menuDatas"
          :inlineCollapsed="siderCollapsed"
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
        <Content style="padding: 0px 30px">
          <Breadcrumb :datas="datas" style="margin: 15px 0px"></Breadcrumb>
          <router-view :key="$route.path"></router-view>
          <HFooter class="text-center">
            Copyright © {{ year }}
            <a href="http://www.ch-un.com" target="_blank">Lan</a>
          </HFooter>
        </Content>
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
        { title: "Home", key: "welcome", icon: "h-icon-home" },
        { title: "Inquire", key: "search", icon: "h-icon-search" },
        {
          title: "Collection",
          key: "favor",
          icon: "h-icon-star",
          count: 100,
          children: [{ title: "Collection-1", key: "favor2-1" }],
        },
        { title: "task", icon: "h-icon-task", key: "task" },
      ],
      datas: [
        { icon: "h-icon-home" },
        {
          title: "Component",
          icon: "h-icon-complete",
          route: { name: "Test list" },
        },
        { title: "Breadcrumb", icon: "h-icon-star" },
      ],
    };
  },
  computed: {
    breadCrumbs() {
      let pathArray = this.$route.path.split("/");
      return pathArray;
    },
  },
};
</script>

<style scoped>
.navbar button:last-of-type {
  margin-left: auto;
}
</style>
