<template>
  <div id="settings">
    <div class="h-panel">
      <div class="h-panel-body">
        <Row :space-x="40" :space-y="20">
          <Cell width="1"></Cell>
          <Cell width="5" :xs="24" :sm="24" :md="24">
            <div class="h-panel">
              <div class="h-panel-body setting-body">
                <Row :space="10">
                  <Cell width="24">
                    <div class="avatar-group">
                      <Avatar :src="src" :width="150"></Avatar>
                    </div>
                  </Cell>
                  <Cell
                    width="24"
                    v-for="buttonData in menuData"
                    :key="buttonData.key"
                  >
                    <router-link :to="{ name: buttonData.name }">
                      <Button
                        :color="
                          $route.name === buttonData.name ? 'primary' : null
                        "
                        size="l"
                        :block="true"
                      >
                        <div class="menu-button-block">
                          <h3>{{ buttonData.title }}</h3>
                          <!-- <span>{{ buttonData.subtext }}</span> -->
                        </div>
                      </Button>
                    </router-link>
                  </Cell>
                </Row>
              </div>
            </div>
          </Cell>
          <Cell width="17" :xs="0" :sm="0" :md="0">
            <router-view> </router-view>
          </Cell>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "https://i1.go2yd.com/image.php?url=0Kvq81cKR1",
      newAva: undefined,
      menuData: [
        {
          key: "personal-data",
          title: "Thông tin cá nhân",
          subtext:
            "Thay đổi các thiết lập như: số điện thoại, email, ảnh đại diện",
          name: "Setting default",
        },
        {
          key: "change-password",
          title: "Đổi mật khẩu",
          name: "Setting password",
        },
      ],
    };
  },
};
</script>

<style scoped>
.h-panel-body.setting-body {
  padding: 0;
}
.avatar-group {
  display: flex;
  align-items: center;
  padding: 0;
  flex-direction: column;
}

.avatar-group .h-avatar {
  width: auto !important;
}

.avatar-group .avatar-text {
  flex-grow: 1;
}

.avatar-group button {
  padding: 18px 30px;
}

.avatar-group > div {
  padding: 10px;
}
.menu-button-block {
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  align-items: baseline;
}
</style>
