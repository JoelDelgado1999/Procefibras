import Vue from'vue'
import Vuex from'vuex'

Vue.use(Vuex) 

export default{
    namespaced:true,
    state:{
        Items:[],
    },
    getters :{
        items(state){
            return state.Items;
        }
    },
    mutations:{
        llenarItems(state,data){
            state.Items=data;
        }
    },
    actions:{
        cargarSolicitudes:async function({commit}){
            try{
                const setting={
                    method:'GET',
                }
                const ur ='';
                const data = await fetch(ur,setting);
                const json =await data.json();
                commit('llenarItems',json)
            }
            catch(err){
                console.log(err)
            }
        }
    },
}