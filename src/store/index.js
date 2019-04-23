import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isLogin: false, // 登录状态
    usr_name: "", // 用户名
    total_sensor:[ //全部的传感器数组
        {
            sensorName: "水银开关传感器",
            type: "switch",
            selected: false,
            id: 1,
            status: 0,
            value: 0
        },
        {
            sensorName:"倾斜开关传感器",
            type: "switch",
            selected:false,
            id:2,
            status: 0,
            value: 0
        },
        {
            sensorName:"敲击传感器",
            type: "switch",
            selected:false,
            id:3,
            status: 0,
            value: 0
        },
        {
            sensorName:"震动开关传感器",
            type: "switch",
            selected:false,
            id:4,
            status: 0,
            value: 0
        },
        {
            sensorName:"轻触开关传感器",
            type: "switch",
            selected:false,
            id:5,
            status: 0,
            value: 0
        },
        {
            sensorName:"按键开关传感器",
            type: "switch",
            selected:false,
            id:6,
            status: 0,
            value: 0
        },
        {
            sensorName:"霍尔磁力传感器",
            type: "switch",
            selected:false,
            id:7,
            status: 0,
            value: 0
        },
        {
            sensorName:"线性霍尔传感器",
            type: "switch",
            selected:false,
            id:8,
            status: 0,
            value: 0
        },
        {
            sensorName:"磁簧开关传感器",
            type: "switch",
            selected:false,
            id:9,
            status: 0,
            value: 0
        },
        {
            sensorName:"循迹传感器",
            type: "switch",
            selected:false,
            id:10,
            status: 0,
            value: 0
        },
        {
            sensorName:"避障碍传感器",
            type: "switch",
            selected:false,
            id:11,
            status: 0,
            value: 0
        },
        {
            sensorName:"光遮断传感器",
            type: "switch",
            selected:false,
            id:12,
            status: 0,
            value: 0
        },
        {
            sensorName:"人体接触(热释红外)传感器",
            type: "switch",
            selected:false,
            id:13,
            status: 0,
            value: 0
        },
        {
            sensorName:"数字光强传感器",
            type: "digital",
            selected:false,
            id:14,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"红外接收传感器",
            type: "digital",
            selected:false,
            id:15,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"数字湿温度DHT11传感器",
            type: "digital",
            selected:false,
            id:16,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"数字湿温度DHT22传感器",
            type: "digital",
            selected:false,
            id:17,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"气温气压传感器",
            type: "digital",
            selected:false,
            id:18,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"mpu6050传感器",
            type: "digital",
            selected:false,
            id:19,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"旋转编码器",
            type: "digital",
            selected:false,
            id:20,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"XY遥感",
            type: "digital",
            selected:false,
            id:21,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"超声波传感器",
            type: "digital",
            selected:false,
            id:22,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"防水性超声波传感器",
            type: "digital",
            selected:false,
            id:23,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"压力传感器",
            type: "digital",
            selected:false,
            id:24,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"模拟霍尔传感器",
            type: "digital",
            selected:false,
            id:25,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"模拟光强传感器",
            type: "digital",
            selected:false,
            id:26,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"声音传感器",
            type: "digital",
            selected:false,
            id:27,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"液化石油气气体传感器",
            type: "digital",
            selected:false,
            id:28,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"烟雾传感器",
            type: "digital",
            selected:false,
            id:29,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"酒精传感器",
            type: "digital",
            selected:false,
            id:30,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"空气污染传感器",
            type: "digital",
            selected:false,
            id:31,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"火焰传感器",
            type: "digital",
            selected:false,
            id:32,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"土壤湿度传感器",
            type: "digital",
            selected:false,
            id:33,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"模拟温度传感器",
            type: "digital",
            selected:false,
            id:34,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        },
        {
            sensorName:"雨滴传感器",
            type: "digital",
            selected:false,
            id:35,
            status: {
                min: 0,
                max: 1
            },
            value: 1
        }
    ]           
}

const getters = {
    get_isLogin: function(){
        return state.isLogin
    }
}

const actions = {
    
}

const mutations = {
    set_isLogin (state, msg) {
        state.isLogin = true;
        state.usr_name = msg.usr_name;
        localStorage.setItem("isLogin", true);
        localStorage.setItem("userName", msg.usr_name);
    },
    ADD_SENSOR (state, temp) {
        state.total_sensor.push({
            sensorName: temp.sensorName,
            type: temp.id,
            selected: temp.selected,
            id: temp.id,
            status: temp.status,
            value: temp.value
        })
    },
    set_isAddedProject (state, msg) {
        localStorage.setItem("isAddedProject", true);
        localStorage.setItem("addedProjectName", msg.project_name);
    },
    set_isAddedDistricts (state, msg) {
        localStorage.setItem("addedDiatrictsArray", msg);
    },
    Login_Outdate (state) { // 登录过期
        state.isLogin = false;
        localStorage.removeItem("userName");
        localStorage.removeItem("addedProjectName");
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})