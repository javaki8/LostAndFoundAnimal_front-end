import axios from 'axios'
//import request from './request'
// 객체가 export 된다
export default {
  // POST http://localhost:8080/feeds
  // BODY {name, userId...}
  // HEADER content-type:application-json


  // GET http://localhost:8080/lostandfounds
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/lostandfounds`),

  post: (lostandfound) => axios.post(`${process.env.VUE_APP_API_BASE}/lostandfounds`, lostandfound),

  uploadFile: (lostfoundId, form) =>
    // POST http://localhost:8080/lostandfounds/{id}/animal-files"
    // BODY multipart-data
    // HEADER multipart/form-data
    axios.post(`${process.env.VUE_APP_API_BASE}/lostandfounds/${lostfoundId}/animal-files`, form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),
  details: (id) => axios.patch(`${process.env.VUE_APP_API_BASE}/lostandfounds/${id}`)
  // detail http://localhost:8080/lostandfounds/{id}

}