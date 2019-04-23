<template>
    <div id="forgetPw">
        <Icon type="md-arrow-round-back" @click="goback" size="30" style="position:absolute;top:121px;left:320px;color:#2d8cf0;cursor:pointer;"/>
        <Card id="outer">
            <label>用户名:</label>
            <Input v-model="username" prefix="md-person" placeholder="输入用户名"/>
            <p v-show='username==undefined||username==""' style="font-size:12px;color:red;">*用户名不能为空</p>
            <label>新密码:</label>
            <Input v-model="password" type="password" prefix="ios-lock" placeholder="输入新密码"/>
            <p v-if='password==undefined||password==""' style="font-size:12px;color:red;">*密码不能为空</p>
            <p v-else-if='password.length<6' style="font-size:12px;color:red;">*密码不能少于6个字符</p>
            <label>再次确认新密码:</label>
            <Input v-model="comfirmpw" type="password" prefix="ios-lock" placeholder="再次输入新密码"/>
            <p v-show='comfirmpw!=password' style="font-size:12px;color:red;">*与新密码不相同</p>
            <Button type="primary" @click="comfirm" id="comfirmbtn">确 认</Button>
        </Card>
        <Modal v-model="modal" title="密码更改成功" success >
            <p>密码更改成功！快去<router-link to="/login">登录</router-link>吧！</p>
        </Modal>
    </div>
</template>

<script>
import {goback} from "../../common/common.js"
export default {
    name:"forgetPw",
    data(){
        return{
            username:"",
            password:"",
            comfirmpw:"",
            modal:false
        }
    },
    mixins:[goback],
    methods:{
         tologin:function(){
            this.$router.push({path:'/login'})
        },
        comfirm:function(){
            if(this.username!=undefined&&this.username!=""&&this.username!=null){
                if(this.password!=undefined&&this.password!=""&&this.password!=null&&this.password.length>=6){
                    if(this.comfirmpw==this.password){
                        this.modal=true;
                        
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #outer{
        width:400px;
        margin:0 auto;
        margin-top:150px;
        label{
            margin-top:5px;
            display:inline-block;
        }
        #comfirmbtn{
            display: block;
            margin: 0 auto;
            margin-top: 10px;
            width: 100px;
        }
    }
</style>

