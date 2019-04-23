import service from "../../request.js";

export const CreateProject = { // 创建一个新的项目
    methods:{
        CreateProject:(body) => {
            return new Promise((resolve,reject) => {
                service.post('/CreateProject',body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    },
    headers: {
        // 'Authorization': "bearer " + token,  
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
}

export const CreateNode = { // 创建节点
    methods: {
        CreateNode: (body) => {
            return new Promise((resolve, rep) => {
                service.post('/CreateSensorNode', body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

export const CreateCamera = { // 创建摄像监控结点
    methods: {
        CreateCamera: (body) => {
            return new Promise((resolve, rep) => {
                service.post('/CreateCameraNode', body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

export const SeeNodeDetail = { // 点击结点时查看结点的详细信息
    methods: {
        SeeNodeDetail: (body) => {
            return new Promise((resolve, rep) => {
                service.post('/SeeNodeDetail', body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

export const AddDistrict = { // 添加区域
    methods: {
        AddDistrict: (body) => {
            return new Promise((resolve, rep) => {
                service.post('/AddDistrict', body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

export const GetProjectDetailAfterUpdate = { // 刷新页面后重新获取项目信息
    methods: {
        GetProjectDetailAfterUpdate: (projectName) => {
            return new Promise((resolve, rep) => {
                service.get('/getAddedProject', {
                    params:{
                        projectName: projectName
                    }
                }).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

export const GetAddedNode = { // 刷新页面后重新获取项目信息
    methods: {
        GetAddedNode: (projectName) => {
            return new Promise((resolve, rep) => {
                service.get('/GetAddedNode', {
                    params:{
                        projectName: projectName
                    }
                }).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

export const DeleteAddedNode = {
    methods: {
        DeleteAddedNode: (body) => {
            return new Promise((resolve, rep) => {
                service.post('/DeleteNode', body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}

