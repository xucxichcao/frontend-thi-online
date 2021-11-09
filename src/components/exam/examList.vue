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
              @choose="choose"
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
                    <p>Thời gian làm bài: {{ phongThi.thoiGianLamBai }}</p>
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
export default {
  data() {
    let list = [
      {
        id: "0",
        title: "2020-2021",
        children: [
          {
            id: "1",
            title: "Học kỳ 1",
          },
          {
            id: "2",
            title: "Học kỳ 2",
          },
          {
            id: "3",
            title: "Học kỳ 3",
          },
        ],
      },
    ];
    return {
      toggleOnSelect: true,
      value: [],
      param: {
        keyName: "id",
        parentName: "parent",
        titleName: "title",
        dataMode: "list",
        datas: list,
      },
      danhSachPhongThi: [
        {
          id: "0",
          tenPhongThi: "IT003 - Cấu trúc dữ liệu và giải thuật",
          siSo: "40",
          giangVien: "Huỳnh Mạnh Hùng",
          thoiGianLamBai: "60 phút",
          thoiGianThi: "11/02/2021 - 10:30 am",
          namHoc: "2021-2022",
          hocKy: "Học kỳ 2",
        },
        {
          id: "1",
          tenPhongThi:
            "Thương mại Điện tử và Triển khai ứng dụng - NT210.M11.MMCL",
          siSo: "35",
          giangVien: "Huỳnh Hùng",
          thoiGianLamBai: "45 phút",
          thoiGianThi: "11/02/2021 - 7:30 am",
          namHoc: "2021-2022",
          hocKy: "Học kỳ 2",
        },
      ],
    };
  },
  methods: {
    choose(data) {
      console.log(data);
    },
    select(data) {
      console.log(data);
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
