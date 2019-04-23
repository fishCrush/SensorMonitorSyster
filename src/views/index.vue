<template>
    <div class="layout">
        <Layout>
            <!--头部：登录，注册-->
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav" style="margin-left:88%;" v-if="!isLogin">
                        <MenuItem name="1" to="/login">
                            登录
                        </MenuItem>
                        <MenuItem name="2" >
                            注册
                        </MenuItem>
                    </div>
                    <div class="layout-nav" style="margin-left:88%;" v-if="isLogin">
                        <MenuItem name="1" to="">
                            {{user}}
                        </MenuItem>
                        <MenuItem name="2" >
                            <span @click="unsubscribe">注销</span>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <!--中间：左侧为垂直导航 右侧为导航对应的组件-->
            <div id="main">
              <Menu active-name="1" id="left_nav">
                <MenuItem name="1">
                  <Icon type="md-document" />
                  <router-link :to="{name:'project'}">
                      项目
                  </router-link>
                </MenuItem>
                <MenuItem name="2" to="/">
                  <Icon type="md-chatbubbles" />
                    历史数据查询
                </MenuItem>
                <MenuItem name="3" to="/">
                  <Icon type="md-warning" />
                    报警日志
                </MenuItem>
                <MenuItem name="4" to="/">
                  <Icon type="ios-square" />
                    图表
                </MenuItem>
              </Menu>
              <Card id="content"><router-view/></Card>
            </div>
            <!--尾部-->
            <Footer id="footer">copyright&copy</Footer>
        </Layout>
    </div>
</template>

<script>
  export default {
    name:"layout",
    data(){
      return {
        isLogin:false, // 登录状态
        user: "", // 用户名
      }
    },
    created: function () {
        if (new Date().getTime() - localStorage.getItem("LoginTime") > 1000*60*60) { // 1小时后登录过期
           this.$store.commit('Login_Outdate');
        this.isLogin = false;
    }
        if(localStorage.getItem("userName")) {
            this.isLogin = true;
            this.user = localStorage.getItem("userName");
        }
    },
    methods:{
        unsubscribe: function(){
            localStorage.removeItem("userName");
            localStorage.removeItem("addedProjectName");
            localStorage.removeItem("addedDistrictsArray");
            this.isLogin = false;
            // console.log("[local-username]:", localStorage.getItem("userName"));
            this.$Notice.success({
                title: "注销成功!",
                duration: 1
            })
            setTimeout(() => {
                // this.$router.push({
                //     path:'/index/project'
                // })
                location.reload(); // 刷新当前页面
            }, 1000);
        }
    }
  }
</script>

<style scoped lang="scss">
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
}
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav {
    width:420px;
    margin:0 auto;
    margin-right:20px;
}
#main{
  display:flex;
  #left_nav{
    flex:0 0 170px;
  }
  #content{
    flex: 1 1 1024px;
  }
}
#footer{
    background: #515a6e;
    color:white;
    text-align:center;
    position: absolute;
    bottom:-70px;
    width:100%;
    min-width: 1024px;
}
.ivu-layout-header{
  min-width: 1024px;
}
</style>
