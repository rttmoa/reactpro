<template>
  <div>
    <button @click="open=true">打开弹出框</button>
    <teleport to='body'>
      <div class="modal" v-if="open">
        <div class="login">
          <button @click="open=false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const open = ref(false);

    return { open };
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 200px;
  transform: translate(-50%, -50%);
  /* margin-left: -150px;
    margin-top: -100px; */
  background-color: #fff;
}
</style>