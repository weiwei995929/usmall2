import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {reqspecsList}  from '../../util/request'

const state ={
    list:[],//请求回来的数据
   
}
const mutations ={
    changeList(state,arr){
        state.list = arr
    },
  
}
const actions ={
    requestspecsList(context){
        reqspecsList({
            size:10,
            page:1
        }).then(res=>{
            var arr = res.data.list;
            //console.log(arr);
            arr.forEach(item=>{
                item.attrs = JSON.parse(item.attrs)
            })
            context.commit('changeList',arr)
        })
    },
   
    
    
}

const getters ={
    list(state){
        return state.list
    },
   
}

export default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}