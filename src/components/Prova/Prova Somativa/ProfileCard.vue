<script setup> 
import { defineProps } from 'vue'; 
defineProps({
    username:String,
    level:Number,
})
</script> 
<template> 
 <div> 
Avaliação Somativa 4
 <h2>Usuário: {{ username }}</h2> 
 <p>Nível: {{level }}</p> 
 </div> 
</template> 
