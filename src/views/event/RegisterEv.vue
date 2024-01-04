<script setup>
import { useRouter } from 'vue-router';
import { defineProps,inject } from 'vue';

const {event} = defineProps(["event"]);
const router = useRouter()
const GStore = inject('GStore')

const register=()=>{
    // if registration api call is succesful 
   // Push Back to event Details 
   GStore.flashMessage = 'You are Succesfully registred for ' + event.title
   setTimeout(()=>{
    GStore.flashMessage=''
   },3000)
   router.push({
    name:'EventDetails',
   }) 

}
</script> 

<template>
    <p>Register For Events</p>
    <button @click="register">Register Me !!</button>
</template>