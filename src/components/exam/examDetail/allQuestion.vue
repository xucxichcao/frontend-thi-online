<template>
  <div>
    <div class="h-panel">
      <div class="h-panel-body">
        <Row :space="30">
          <Cell width="18">
            <Row v-for="ques in question" :key="ques.id" :space="30">
              <Cell width="4" :xs="0" :sm="0" :md="0">
                <div class="h-panel">
                  <div class="h-panel-body">
                    <h3>Câu {{ ques.num + 1 }}</h3>
                  </div>
                </div>
              </Cell>
              <Cell width="20" :xs="24" :sm="24" :md="24">
                <div class="h-panel">
                  <div class="h-panel-bar">
                    <span class="h-panel-title">{{ ques.cauhoi }}</span>
                  </div>
                  <div class="h-panel-body">
                    <Form mode="block" ref="form" :validOnChange="true">
                      <FormItem v-for="answer in ques.luachon" :key="answer.id">
                        <Radio
                          v-model="userChoice[current]"
                          :value="answer.id"
                          >{{ answer.noidung }}</Radio
                        >
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </Cell>
            </Row>
          </Cell>
          <Cell width="6" :xs="0" :sm="0" :md="0">
            <div class="h-panel">
              <div class="h-panel-bar">
                <span class="h-panel-title">Danh sách câu hỏi</span>
              </div>
              <div class="h-panel-body">
                <Button
                  v-for="instance in question"
                  :key="instance.num"
                  @click="current = instance.id"
                  >{{ instance.num + 1 }}</Button
                >
                <div style="padding-top: 20px">
                  <p class="finish">Finish attempt ...</p>
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
export default {
  data() {
    return {
      questAmt: 2,
      current: 0,
      userChoice: [],
      question: [],
    };
  },
  mounted() {
    this.question.forEach(() => {
      this.userChoice.push(undefined);
    });
    var ctdt = this.$store.getters["attempt/getCTDT"];
    var qA = [];
    // console.log(this.$store.getters["attempt/getCTDT"]);
    for (let i = 0; i < ctdt.length; i++) {
      qA.push(JSON.parse(ctdt[i].noiDung));
      qA[i].num = i;
    }
    this.question = qA;
    this.questAmt = qA.length;
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
</style>
