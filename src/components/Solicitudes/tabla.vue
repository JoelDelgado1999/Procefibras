<template>
      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
import { onMounted } from 'vue'
export default {
  data(){
    return{

    }
  },
   onMount:async( ) => {
    const response = await fetch('http://localhost:4000/api/centroA')
     const data = await response.json()
     console.log(data)
   }
      
}
</script>