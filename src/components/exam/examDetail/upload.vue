<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">
        <h2>Upload điểm</h2>
      </span>
    </div>
    <div class="h-panel-body">
      <Form>
        <FormItem :showLabel="false">
          <div class="formField">
            <span class="fieldLabel">File .csv điểm</span>
            <input type="file" accept=".csv" @change="handleUploadDiem" />
          </div>
        </FormItem>
      </Form>
      <Table :datas="datas" stripe>
        <TableItem title="Tên sinh viên" prop="name"></TableItem>
        <TableItem title="Điểm" prop="diem" align="center"></TableItem>
      </Table>
      <div class="send">
        <Button @click="send" color="primary" :disabled="flag">Upload</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: undefined,
      flag: true,
      datas: [
        { name: "Cao Trọng Nghĩa", diem: "10" },
        { name: "Huỳnh Mạnh Hùng", diem: "10" },
        { name: "Lê Hải Minh", diem: "10" },
      ],
    };
  },
  methods: {
    handleUploadDiem(e) {
      this.file = e.target.files[0] || e.dataTransfer.files[0];
      this.flag = false;
    },
    send() {
      console.log(this.file);
    },
  },
};
</script>

<style>
.formField {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 1em;
}

.send {
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
}
</style>
