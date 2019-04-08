<template>
  <div>
    <head-nav title="我的课程"></head-nav>
    <div class="content">
      <h2>和工作谈一场不分手的恋爱!!</h2>
      <p>小程序</p>
      <p>vue.js</p>
      <p>node.js</p>
      <p>javaScript</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "courseList"
  }
</script>

<style scoped>
.content{
  padding: 20px;
  font-size: 0.5rem;
  color: #333;
}
.content h2{
  text-align: center;
  font-size: 0.6rem;
  padding-bottom: 20px;
  color: #222;
}
.content p{
  padding: 5px 0;
  text-align: center;
}
</style>
