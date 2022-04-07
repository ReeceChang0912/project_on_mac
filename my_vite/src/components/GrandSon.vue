<template>
    <div>
        <h1>{{ message }}</h1>
       <button @click="show2()">call father Message by emit</button>

    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

let message = ref('我是儿子吴佳琪').value
let messagebyemit = ref('我是儿子吴佳琪byemit').value

let call_father=ref('我是儿子吴佳琪byref').value

const alertMessage = function () {
    alert(message)
}

let emit =defineEmits(['callson'])
const show2=()=>{
    emit('callson',messagebyemit)
}

defineExpose({
    message,
    alertMessage,
    call_father
})
</script>

