<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Danh sách phòng thi</h2></span>
    </div>
    <div class="h-panel-body">
      <Row :space-x="40">
        <Cell width="7">
          <div>
            <Tree
              :option="param"
              ref="demo"
              :toggleOnSelect="toggleOnSelect"
              v-model="value"
              @select="select"
            ></Tree>
          </div>
        </Cell>
        <Cell width="17">
          <div>
            <div
              class="phongThi"
              v-for="phongThi in danhSachPhongThi"
              :key="phongThi.id"
            >
              <div class="icon">
                <router-link
                  tag="a"
                  :to="{ name: 'Exam detail', params: { examId: phongThi.id } }"
                >
                  <i class="h-icon-task"></i>
                  {{ phongThi.tenPhongThi }}</router-link
                >
              </div>
              <div>
                <Row :space="30">
                  <Cell width="12">
                    <p>
                      Giảng viên:
                      <a class="text" href="#">{{ phongThi.giangVien }}</a>
                    </p>
                    <p>Sĩ số: {{ phongThi.siSo }}</p>
                    <p>Thời gian làm bài: {{ phongThi.thoiGianLamBai }} phút</p>
                  </Cell>
                  <Cell width="12">
                    <p>Thời gian thi: {{ phongThi.thoiGianThi }}</p>
                    <p>Năm học: {{ phongThi.namHoc }}</p>
                    <p>Học kỳ: {{ phongThi.hocKy }}</p>
                  </Cell>
                </Row>
              </div>
            </div>
          </div>
        </Cell>
      </Row>
    </div>
  </div>
</template>

<script>
import http from "../../http-common";
export default {
  data() {
    return {
      toggleOnSelect: true,
      value: [],
      param: {
        keyName: "id",
        parentName: "parent",
        titleName: "title",
        dataMode: "list",
        getDatas: async (parent, resolve) => {
          var res = [];

          if (!parent) {
            await http
              .get("sv/phong-thi/", { params: { tree: true } })
              .then((data) => {
                var listPhongThi = data.data.results;
                listPhongThi.forEach((element) => {
                  res.push({
                    id: this.id,
                    title: element.namHoc,
                    first: true,
                  });
                  this.id++;
                });
              });
            res.sort(function (a, b) {
              return a.title.localeCompare(b.title);
            });
            resolve(res);
          } else {
            await http
              .get("sv/phong-thi/", { params: { namHoc: parent.title } })
              .then((a) => {
                var listHocKi = a.data.results;
                listHocKi.forEach((element) => {
                  var strHK = "Học kì " + element.hocKi;
                  res.push({
                    id: this.id,
                    title: strHK,
                    last: true,
                    hocKi: element.hocKi,
                    parent: parent.id.toString(),
                  });
                  this.id++;
                });
              });
            res.sort(function (a, b) {
              return a.title.localeCompare(b.title);
            });
            resolve(res);
          }
        },
      },
      danhSachPhongThi: [],
      selectedNamHoc: "",
      id: 0,
    };
  },
  methods: {
    async select(data) {
      if (data.last === true) {
        await http
          .get("sv/phong-thi/", {
            params: { hocKi: data.hocKi, namHoc: this.selectedNamHoc },
          })
          .then((a) => {
            this.danhSachPhongThi = a.data.results;
          });
      } else if (data.first === true) {
        this.selectedNamHoc = data.title;
      }
    },
  },
};
</script>

<style>
.phongThi {
  margin-top: 0.5rem;
  border: 1px solid #eeeeee;
  padding: 1rem;
}
.phongThi a:hover {
  text-decoration: underline;
}
</style>
