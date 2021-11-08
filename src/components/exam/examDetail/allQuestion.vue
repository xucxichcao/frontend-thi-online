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
                    <h3>Câu {{ ques.id + 1 }}</h3>
                  </div>
                </div>
              </Cell>
              <Cell width="20" :xs="24" :sm="24" :md="24">
                <div class="h-panel">
                  <div class="h-panel-bar">
                    <span class="h-panel-title">{{ ques.content }}</span>
                  </div>
                  <div class="h-panel-body">
                    <Form mode="block" ref="form" :validOnChange="true">
                      <FormItem v-for="answer in ques.answers" :key="answer.id">
                        <Radio
                          v-model="userChoice[current]"
                          :value="answer.id"
                          >{{ answer.content }}</Radio
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
                  :key="instance.id"
                  @click="current = instance.id"
                  >{{ instance.id + 1 }}</Button
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
      question: [
        {
          questionType: 1,
          id: 0,
          content: "Sinh viên Cao Trọng Nghĩa rất là?",
          answers: [
            {
              id: 1,
              content: "Đẹp trai",
            },
            {
              id: 2,
              content: "Xấu",
            },
            {
              id: 3,
              content: "Gầy",
            },
            {
              id: 4,
              content: "Không có đáp án nào đúng",
            },
          ],
        },
        {
          questionType: 1,
          id: 1,
          content: "Sinh viên Huỳnh Mạnh Hùng rất là?",
          answers: [
            {
              id: 1,
              content: "Thích ăn mì cay x2",
            },
            {
              id: 2,
              content: "Giàu",
            },
            {
              id: 3,
              content: "Chúa hề",
            },
            {
              id: 4,
              content: "Tất cả đều đúng",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.question.forEach(() => {
      this.userChoice.push(undefined);
    });
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
