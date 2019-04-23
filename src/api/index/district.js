import service from "../../request.js";

export const GetDistrictDetail = {
    methods: {
        GetDistrictDetail: (districtId) => {
            return new Promise((resolve, reject) => {
                service.get('/GetDistrictDetail', {
                    params: {
                        districtId: districtId
                    }
                }).then((rep) => {
                    if (rep.code == 2000) {
                        resolve(rep)
                    }
                })
            })
        }
    }
}

export const DeleteDistrictAddedNode = {
    methods: {
        DeleteDistrictAddedNode: (body) => {
            return new Promise((resolve, reject) => {
                service.post('/DeleteDistrictAddedNode', body).then((rep) => {
                    resolve(rep)
                })
            })
        }
    }
}