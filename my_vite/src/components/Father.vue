<template>
    <div>
        <GrandSon ref="child" @callson="callmyson"></GrandSon>
        <button @click="show">Show Child Message by ref </button>
        <p>jojo call me {{jojocall}}</p>
    </div>
</template>


<script setup lang="ts">

import { ref,useAttrs} from '@vue/runtime-core';
import GrandSon from './GrandSon.vue';
// 利用ref获取自组建的东西很奇怪 为什么非要在函数里才能接收到？
// const {ctx} = getCurrentInstance()as ComponentInternalInstance
const jojocall=ref('')
// const jojocall2=function accept(){ 
//   return currentInstance.ctx.$refs.child.call_father}
//jojo2 failed
const att=useAttrs()
console.log(att)

function show() {
  
    // jojocall.value=ctx?.$refs.child.call_father
    console.log(jojocall)
}
const callmyson=(message:string)=>{
    jojocall.value=message
}



</script>

