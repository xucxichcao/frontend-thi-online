<template>
  <div id="home">
    <div class="h-panel">
      <div class="h-panel-body">
        <Row :space="40">
          <Cell width="17" :xs="24" :sm="24" :md="24">
            <test-list />
          </Cell>
          <Cell width="7" :xs="0" :sm="0" :md="0">
            <div class="h-panel">
              <div class="h-panel-body">Nội dung bên phải</div>
            </div>
          </Cell>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import testList from "./dashboardTest/testList.vue";
export default {
  components: { testList },
};
</script>

<style></style>
