---
sidebar: auto
---

# 安装 #

## iview ##

<span v-for="i in 3">{{ i }} </span>

<p class="demo" :class="$style.example"></p>



<style module>
.example {
  color: #41b883;
}
</style>

<div>
  <Button>Default</Button>
  <i-button @click="show">ivews按钮</i-button>
  <RadioGroup v-model="phone">
      <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
      </Radio>
      <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
      </Radio>
      <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
      </Radio>
  </RadioGroup>
  <RadioGroup v-model="animal">
      <Radio label="金斑蝶"></Radio>
      <Radio label="爪哇犀牛"></Radio>
      <Radio label="印度黑羚"></Radio>
  </RadioGroup>
</div>



<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  },
  data() {
    return {
      visible: false,
      phone: 'apple',
      animal: '爪哇犀牛'
    }
  },
  methods: {
    show() {
      console.log(111);
      this.$Message.success('iview message tips');
    }
  }
}
</script>



