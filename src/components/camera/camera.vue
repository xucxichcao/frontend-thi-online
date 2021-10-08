<template>
  <div class="camera">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title"><h2>Phòng thi: Mỹ thuật</h2></span>
      </div>
      <div class="h-panel-body">
        <div style="padding-top: 2em">
          <Row :space-x="40" :space-y="40">
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
            <Cell width="4">
              <div class="avatar">
                <img
                  style="width: 100%"
                  src="https://i1.go2yd.com/image.php?url=0Kvq81cKR1"
                  alt=""
                />
                <p class="name">Huỳnh Mạnh Hùng</p>
              </div>
            </Cell>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none"],
      src: "https://i1.go2yd.com/image.php?url=0Kvq81cKR1",
      opened: false,
    };
  },
};
</script>

<style>
.avatar {
  position: relative;
}

.name {
  position: absolute;
  bottom: 0;
  left: 2em;
  color: white;
  background: #00000045;
}
.join {
  padding-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
