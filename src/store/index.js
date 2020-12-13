import Vue from 'vue'
import Vuex from 'vuex' 
Vue.use(Vuex)

import menu from './modeules/menu'
import role from './modeules/role'
import manger from './modeules/manger'
import cate from './modeules/cate'
import specs from './modeules/specs'
import user from './modeules/user'
import goods from './modeules/goods'
export default new Vuex.Store({
    modules:{
        menu,
        role,
        manger,
        cate,
        specs,
        user,
        goods
    }
})