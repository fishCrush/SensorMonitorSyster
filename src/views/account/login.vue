<template>
    <div id="login">
        <Icon type="md-arrow-round-back" @click="goback" size="30"
              style="position:absolute;top:121px;left:320px;color:#2d8cf0;cursor:pointer;"/>
        <!-- <Card>
            <h1>登录</h1>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <router-link to="/forgetPw">忘记密码?</router-link>
                <span id="tip">若没有账号会自动注册哦</span>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')" id="login-btn">登录</Button>
                </FormItem>
            </Form>
        </Card> -->
        <span>用户名</span><Input type="text" v-model="user" />
        <span>密码</span><Input type="password" v-model="password" />
        <Button @click="userlogin">登录</Button>
    </div>
</template>

<script>
import { goback } from "../../common/common.js";
import { Login } from "../../api/login.js";
import { mapGetters, mapActions } from "vuex";

    export default {
        name:"login",
        data () {
            return {
                user:"",
                password:"",
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '*用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '*密码不可为空', trigger: 'blur' },
                        { type: 'string', min: 1, message: '*密码长度不能少于6个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        mixins:[goback,Login],
        computed:{
            isLogin () {
                return this.$store.state.isLogin
            },
            username () {
                return this.$store.state.usr_name
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        const body = {username:this.user,password:this.password};
                        // const body = {username:'admin',password:'1'};
                        this.Login(body).then((rep) => {
                            console.log("[login]:",rep);
                            if(rep.code == 2000){
                                let msg = {"usr_name": body.userName};
                                this.$store.commit('set_isLogin', msg);
                                let currentTime = new Date().getTime(); // 获取登录成功时的时间
                                localStorage.setItem("LoginTime", currentTime);
                                //console.log("[登录时间]:", localStorage.getItem("LoginTime"));
                                this.$Notice.success({
                                    title: "登录成功!",
                                    duration: 1
                                })
                                setTimeout(() => {
                                    this.$router.push({path:'/index/project'});
                                }, 1000);
                            }
                        })

                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            userlogin:function (){
                const body = {username:this.user,password:this.password};
                this.Login(body).then((rep) => {
                            console.log("[login]:",rep);
                            if(rep.code == 2000){
                                let msg = {"usr_name": body.username};
                                this.$store.commit('set_isLogin', msg);
                                let currentTime = new Date().getTime(); // 获取登录成功时的时间
                                localStorage.setItem("LoginTime", currentTime);
                                console.log("[登录时间]:", localStorage.getItem("LoginTime"));
                                this.$Notice.success({
                                    // $Notice来自iView
                                    title: "登录成功!",
                                    duration: 1
                                })
                                setTimeout(() => {
                                    this.$router.push({path:'/index/project'});
                                }, 1000);
                            }
                        })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login{
        width:400px;
        margin:0 auto;
        margin-top:150px;
        #tip{
            position: absolute;
            left: 84px;
            color: #2d8cf0;
            top: 34px;
            font-size: 10px;
        }
        #login-btn{
            margin:13px 0 0 126px;
            width: 105px;
            letter-spacing: 8px;
            font-size: 18px;
        }
    }
</style>
