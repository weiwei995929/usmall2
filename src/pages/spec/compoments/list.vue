<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="规格编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" sortable width="180">
      </el-table-column>
      <el-table-column label="规格属性" sortable width="180">
        <template slot-scope="scope">
          <el-tag type="info" v-for="item in scope.row.attrs" :key="item">{{item}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="status " label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {reqspecsDel} from "../../../util/request";
export default {
  computed:{
    ...mapGetters({
      list:"specs/list",
    })
  },
  components:{},
  data(){
    return{

    }
  },
  methods:{
    //编辑
    edit(id){
      this.$emit("edit",id);
    },
    //删除
    del(id){
      reqspecsDel({id:id}).then((res)=>{
        alert("删除成功");
        this.requestspecsList();
      });
    },
    ...mapActions({
      requestspecsList:"specs/requestspecsList"
    })
  },
  mounted(){
    this.requestspecsList()
  }
};
</script>
<style>
img{
  width: 110px;
  height: 115px;
}
</style>