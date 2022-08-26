<template>
  <div><h1  class="text-center">
    SOLICITUDES
    <tabla></tabla>
  </h1></div>
</template>
<script>

import { mapGetters,mapActions } from 'vuex';
import tabla from '@/components/Solicitudes/tabla.vue'


export default {
  name:'CENTROS DE ACOPIO',

  components:{
    tabla

  },
  created(){
   // this.cargarSolicitudes();

  },
  data(){
    return {

    }
   /* return{
      cabecera:[
        {text:'nombre',value:},
        {text:'fecha',value:},
        {text:'cantidad',value:}
        {text:'foto',value:}
      ]

    }
  },*/
  },
  methods:{
      // ...mapActions('solicitudes',['cargarSolicitudes'])
  },
  computed:{
      //  ...mapGetters('solicitudes',['Items'])
  }

}
</script>