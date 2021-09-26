<template>
  <div>
    <div class="h-panel">
      <div class="h-panel-body">
        <Row :space="40">
          <Cell
            width="2"
            :xs="0"
            :sm="0"
            :md="0"
            style="background: rgb(223 223 223 / 40%)"
            class="cell h-panel"
          >
            <div>
              <h3 class="h3">Question {{ question.id }}</h3>
              <p>Tries remaning: 1</p>
            </div>
          </Cell>
          <Cell width="14" :xs="24" :sm="24" :md="24" class="cell h-panel">
            <h3>{{ question.content }}</h3>
            <Form mode="block" ref="form" :validOnChange="true">
              <FormItem v-for="answer in question.answers" :key="answer.id">
                <Checkbox v-model="choose" :value="answer.id">{{
                  answer.content
                }}</Checkbox>
              </FormItem>
              <Row :space="40">
                <Cell style="text-align: right" width="12">
                  <Button>
                    <i class="h-icon-left"></i>
                  </Button>
                </Cell>
                <Cell width="12">
                  <Button>
                    <i class="h-icon-right"></i>
                  </Button>
                </Cell>
              </Row>
            </Form>
          </Cell>
          <Cell width="6" :xs="0" :sm="0" :md="0" class="cell h-panel">
            <div>
              <h3 class="h3">Quiz navigation</h3>
              <br />
              <div>
                <Button>1</Button>
              </div>
              <div style="padding-top: 20px">
                <p class="finish">Finish attempt ...</p>
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
      question: {
        questionType: 1,
        id: 1,
        content: "Sinh viên Cao Trọng Nghĩa rất là?",
        answers: [
          {
            id: "1",
            content: "Đẹp Trai",
          },
          {
            id: "2",
            content: "Xấu",
          },
          {
            id: "3",
            content: "Gầy",
          },
          {
            id: "4",
            content: "Không có đáp án nào đúng",
          },
        ],
      },
      choose: "",
    };
  },
};
</script>

<style>
.cell {
  margin: 15px;
}
.h3 {
  color: orange;
}
.finish {
  cursor: pointer;
  color: green;
}
</style>
