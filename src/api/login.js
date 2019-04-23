import service from "../request.js";

export const Login = {
  methods:{
    Login:(body) => {
      return new Promise((resolve,reject) => {
        service.post('/Login',body).then((rep) => {
          resolve(rep)
        })
      })
    }
  }
}