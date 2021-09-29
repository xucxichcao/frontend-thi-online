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
                  <input type="text" readonly v-model="data.name" />
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
                  <input type="text" readonly v-model="data.school" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Mã số sinh viên</span>
                  <input type="text" readonly v-model="data.mssv" />
                </div>
              </FormItem>
              <FormItem :showLabel="false">
                <div class="readOnlyField">
                  <span class="fieldLabel">Ngày tháng năm sinh</span>
                  <input type="text" readonly v-model="data.dob" />
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
  data() {
    return {
      src: "https://i1.go2yd.com/image.php?url=0Kvq81cKR1",
      newAva: undefined,
      data: {
        name: "Cao Trọng Nghĩa",
        dob: "28/11/2000",
        school: "Đại học Công nghệ Thông tin - ĐHQG TP.HCM",
        sex: "Nam",
        mssv: "18521138",
        email: "18521138@gm.uit.edu.vn",
        phone: "0364857809",
        cid: "123456789",
      },
    };
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
