<template>
  <div>
    <div class="h-panel">
      <div class="h-panel-body">
        <Row :space="30">
          <Cell width="4" :xs="0" :sm="0" :md="0">
            <div class="h-panel">
              <div class="h-panel-body">
                <h3>Câu {{ question[current].num + 1 }}</h3>
              </div>
            </div>
          </Cell>
          <Cell width="14" :xs="24" :sm="24" :md="24">
            <div class="h-panel">
              <div class="h-panel-bar">
                <span class="h-panel-title">{{
                  question[current].cauhoi
                }}</span>
              </div>
              <div class="h-panel-body">
                <Form mode="block" ref="form" :validOnChange="true">
                  <FormItem
                    v-for="answer in question[current].luachon"
                    :key="answer.id"
                  >
                    <Radio
                      v-model="userChoice[current].luachon"
                      :value="answer.id"
                      >{{ answer.noidung }}</Radio
                    >
                  </FormItem>
                  <Row :space="40">
                    <Cell style="text-align: right" width="12">
                      <Button :disabled="current === 0" @click="current--">
                        <i class="h-icon-left"></i>
                      </Button>
                    </Cell>
                    <Cell width="12">
                      <Button
                        :disabled="current === questAmt - 1"
                        @click="current++"
                      >
                        <i class="h-icon-right"></i>
                      </Button>
                    </Cell>
                  </Row>
                </Form>
              </div>
            </div>
          </Cell>
          <Cell width="6" :xs="0" :sm="0" :md="0">
            <div class="h-panel">
              <div class="h-panel-bar">
                <div class="h-panel-title finish-div">
                  Danh sách câu hỏi
                  <div class="timer">
                    <vac
                      :end-time="$store.getters['attempt/getThoiGianKetThuc']"
                    >
                      <template v-slot:process="{ timeObj }">
                        <span style="color: red; text-align: right">{{
                          `${timeObj.m}:${timeObj.s}`
                        }}</span>
                      </template>
                      <template v-slot:finish>
                        <span>Hết giờ</span>
                      </template>
                    </vac>
                  </div>
                </div>
              </div>
              <div class="h-panel-body">
                <Button
                  v-for="instance in question"
                  :key="instance.num"
                  @click="current = instance.num"
                  :color="
                    userChoice[instance.num].luachon == undefined
                      ? ''
                      : 'primary'
                  "
                  >{{ instance.num + 1 }}</Button
                >
                <div style="padding-top: 20px">
                  <Button text @click="finish()">Finish attempt ...</Button>
                </div>
              </div>
            </div>
          </Cell>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import http from "../../../http-common";
import vueAwesomeCountdown from "vue-awesome-countdown";
Vue.use(vueAwesomeCountdown, "vac");

export default {
  data() {
    return {
      questAmt: 0,
      current: 0,
      userChoice: [],
      question: [],
    };
  },
  mounted() {
    var ctdt = this.$store.getters["attempt/getCTDT"];
    var qA = [];
    // console.log(this.$store.getters["attempt/getCTDT"]);
    for (let i = 0; i < ctdt.length; i++) {
      qA.push(JSON.parse(ctdt[i].noiDung));
      qA[i].num = i;
      qA[i].questionID = ctdt[i].questionID;
    }
    this.question = qA;
    this.questAmt = qA.length;
    this.question.forEach((e) => {
      this.userChoice.push({ questionID: e.questionID, luachon: undefined });
    });
  },
  methods: {
    finish() {
      alert("finish");
      http.post("nopbai", [this.userChoice]);
    },
  },
};
</script>

<style>
.cell {
  margin: 15px;
}
.finish {
  cursor: pointer;
  color: green;
}
.choiced {
  background-color: grey;
}
.timer {
  display: inline-block;
  margin-left: auto;
  margin-right: 0;
}
.h-panel-title.finish-div {
  display: flex;
  flex-direction: row;
}
</style>
