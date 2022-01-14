<template>
  <div id="personal-setting">
    <Row :space="20">
      <Cell width="24">
        <div class="h-panel">
          <div class="h-panel-bar">
            <h2 class="h-pannel-title">Thay đổi thông tin cá nhân</h2>
          </div>
          <div class="h-panel-body">
            <Form mode="threecolumn">
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Họ và tên</span>
                  <input type="text" readonly v-model="data.full_name" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Giới tính</span>
                  <input type="text" readonly v-model="data.sex" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">CMND/CCCD</span>
                  <input type="text" readonly v-model="data.cid" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Trường</span>
                  <input
                    v-if="data.school"
                    type="text"
                    readonly
                    v-model="data.school"
                  />
                  <input
                    v-else
                    type="text"
                    readonly
                    v-model="data.school_name"
                  />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Mã số sinh viên</span>
                  <input type="text" readonly v-model="data.sid" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Ngày tháng năm sinh</span>
                  <input type="text" readonly v-model="data.date_of_birth" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Số điện thoại</span>
                  <input type="text" readonly v-model="data.phone" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Email</span>
                  <input type="text" readonly v-model="data.email" />
                </div>
              </FormItem>
              <FormItem single :showLabel="false">
                <center>
                  <Button block color="primary">Cập nhật</Button>
                </center>
              </FormItem>
            </Form>
          </div>
        </div>
      </Cell>
    </Row>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.h-form.h-form-threecolumn .h-form-item {
  padding: 0 10px 10px 10px;
}

.h-form.h-form-threecolumn .h-form-item:nth-child(4) {
  width: 50%;
}

.h-form.h-form-threecolumn .h-form-item:nth-child(5) {
  width: 50%;
}

.readOnlyField {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fieldLabel {
  font-size: 15px;
}
.h-form > .h-form-item:last-of-type {
  padding-top: 15px;
}
.h-form > .h-form-item:last-of-type button {
  width: 25%;
}
</style>
