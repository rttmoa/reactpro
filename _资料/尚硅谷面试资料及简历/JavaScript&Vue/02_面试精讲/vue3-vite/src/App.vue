<template>
  <!-- <Setup/> -->
  <!-- <Life/> -->
  <!-- <Ref/> -->
  <!-- <reactive/> -->
  <!-- <toRef/> -->
  <!-- <toRefs/> -->
  <!-- <zonghe/> -->
  <Modal/>
</template>

<script>
import Setup from "./components/01-Setup.vue";
import Life from "./components/02-Life.vue";
import Ref from "./components/03-Ref.vue";
import reactive from "./components/04-reactive.vue";
import toRef from "./components/05-toRef.vue";
import toRefs from "./components/06-toRefs.vue";
import zonghe from "./components/07-zonghe.vue";
import Modal  from  './components/08-Modal.vue'
export default {
  name: "App",
  components: {
    Setup,
    Life,
    Ref,
    reactive,
    toRef,
    toRefs,
    zonghe,
    Modal 
  }
};
</script>
