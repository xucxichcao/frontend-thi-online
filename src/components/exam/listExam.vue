<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"><h2>Danh sách môn thi</h2></span>
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
            <p>value: {{ value }}</p>
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
            children: [
              { id: 4, title: "oop1", ngayThi: "01-01-2021", tinhTrang: true },
              {
                id: 5,
                title: "oop2",
                ngayThi: "01-02-2021",
                tinhTrang: false,
              },
              { id: 6, title: "oop3", ngayThi: "01-03-2021", tinhTrang: true },
            ],
          },
          {
            id: "2",
            title: "Học kỳ 2",
            children: [
              { id: 7, title: "oop1", ngayThi: "01-01-2021", tinhTrang: true },
              {
                id: 8,
                title: "oop2",
                ngayThi: "01-02-2021",
                tinhTrang: false,
              },
              { id: 9, title: "oop3", ngayThi: "01-03-2021", tinhTrang: true },
            ],
          },
          {
            id: "3",
            title: "Học kỳ 3",
            children: [
              { id: 10, title: "oop1", ngayThi: "01-01-2021", tinhTrang: true },
              {
                id: 11,
                title: "oop2",
                ngayThi: "01-02-2021",
                tinhTrang: false,
              },
              { id: 12, title: "oop3", ngayThi: "01-03-2021", tinhTrang: true },
            ],
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

<style></style>
