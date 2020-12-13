<template>
  <div class="box">
    <div class="con">
      <h3>登录</h3>
      <div class="inp"><input type="text" v-model="user.username" /></div>
      <div class="inp"><input type="text" v-model="user.password" /></div>
      <div class="inp"><button @click="login()">登录</button></div>
    </div>
  </div>
</template>
<script>
import { requserLogin } from "../../util/request";
import {mapActions,mapGetters} from "vuex"
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
       ...mapActions({
        requestuserList:'user/requestuserList'
    }),

    login() {
      requserLogin(this.user).then((res) => {
        if (res.data.code == 200) {
          this.$router.push("/index/home");
          this.requestuserList(res.data.list)
        }else{
            alert(res.data.msg)
        }
      });
    },
   
  },
  mounted() {},
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553444, #303d5f);
}
.con {
  width: 500px;
  height: 300px;
  background-color: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.con h3 {
  text-align: center;
}
.con .inp {
  width: 60%;
  height: 30px;
  margin: 30px auto;
}
.inp input {
  width: 100%;
  height: 38px;
  border: 1px solid #dcdfe6;
}
.inp button {
  width: 100%;
  height: 40px;
  background-color: #409eff;
  color: #fff;
  border-radius: 5px;
}
</style>