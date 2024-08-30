<script setup>
import Formulario from './components/Formulario.vue';
import useClima from './composables/useClima';

const { obtenerClima } = useClima();

console.log(import.meta.env);

</script>

<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario 
      @obtener-clima="obtenerClima"
    />
  </div>


</template>
