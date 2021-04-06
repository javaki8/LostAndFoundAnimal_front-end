import axios from 'axios'

export default {
  get: (sido, gugun, page) => axios.get(`${process.env.VUE_APP_API_BASE}/recordAgency?sido=${sido}&gugun=${gugun}&page=${page}&size=30`),

  getAll: (sido, page) => axios.get(`${process.env.VUE_APP_API_BASE}/sidoRecordAgency?sido=${sido}&page=${page}&size=30`)
}