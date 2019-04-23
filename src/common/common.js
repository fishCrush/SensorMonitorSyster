

export const goback = { // 返回
    methods:{
        goback(){
            this.$router.go(-1)
        }
        
    }
}

export const isnull = { // 查看值是否为空，为空返回真值
    methods:{
        isnull:function(temp){
            if (temp == undefined || temp == "" || temp == null)return true;
            else return false;
        }
    }
}

export const stopBubble = { // 阻止事件冒泡
    methods: {
        stopBubble:function(e) {
            if (e && e.stopPropagation)
                e.stopPropagation()
            else
                window.event.cancelBubble = true;
        }
    }
}

export const copyArray = {
    methods: {
        copyArray: function(A, copyA) { // 将A复制给copyA
            let bool = false;
            for (let i = 0; i < A.length; i++) {
                let j = A[i].nodeId;
                bool = copyA.some(function(v) {
                    return (v.nodeId == j);
                })
                if (bool == false) {
                    copyA.push(JSON.parse(JSON.stringify(A[i])));
                    // let selected_sensors_copy = []; // 这里是为将added_node_list复制到added_node_list_copy
                    // let selected_sensor_temp = {
                    //     sensorName: "",
                    //     type: "",
                    //     selected: "",
                    //     id: "",
                    //     status: "",
                    //     value: ""
                    // }
                    // for (let m = 0; m < A[i].sensorDetail.length; m++) {
                    //     selected_sensor_temp.sensorName = A[i].sensorDetail[m].sensorName;
                    //     selected_sensor_temp.type = A[i].sensorDetail[m].type;
                    //     selected_sensor_temp.selected = A[i].sensorDetail[m].selected;
                    //     selected_sensor_temp.id = A[i].sensorDetail[m].id;
                    //     selected_sensor_temp.status = A[i].sensorDetail[m].status;
                    //     selected_sensor_temp.value = A[i].sensorDetail[m].value;
                    //     selected_sensors_copy.push(selected_sensor_temp);
                    // }
                    // let bodyCopy = {
                    //     nodeId: A[i].nodeId,
                    //     nodeName: A[i].nodeName,
                    //     X: A[i].X,
                    //     Y: A[i].Y,
                    //     nodeUpdateFrequency: A[i].nodeUpdateFrequency,
                    //     sensorDetail: selected_sensors_copy
                    // }
                    // copyA.push(bodyCopy);
                }
                // console.log("[bool]:", 'q' + i + bool);
                bool = false;
            }
        }
    }
}