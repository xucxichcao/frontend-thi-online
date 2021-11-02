<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title"
        ><h2>{{ phongThi.tenPhongThi }}</h2></span
      >
      <p>Thời gian thi: {{ phongThi.thoiGianThi }}</p>
      <p>
        Giảng viên: <a class="text" href="#">{{ phongThi.giangVien }}</a>
      </p>
    </div>
    <div class="h-panel-body">
      <div class="thi">
        <p>Thời gian làm bài thi: {{ phongThi.thoiGianLamBai }}</p>
        <div class="button">
          <Button>Vào thi</Button>
          <router-link tag="Button" :to="{ name: 'Home core' }"
            >Trờ về trang chủ</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phongThi: {
        id: "0",
        tenPhongThi: "IT003 - Cấu trúc dữ liệu và giải thuật",
        siSo: "40",
        giangVien: "Huỳnh Mạnh Hùng",
        thoiGianLamBai: "60 phút",
        thoiGianThi: "11/02/2021 - 10:30 am",
        namHoc: "2021-2022",
        hocKy: "Học kỳ 2",
      },
    };
  },
};
</script>

<style>
.thi {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button > button {
  margin-top: 1rem !important;
}

a:hover {
  text-decoration: underline;
}
</style>
