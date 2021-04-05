import axios from 'axios'

export default {
  get: (sido, gugun, page) => axios.get(`${process.env.VUE_APP_API_BASE}/recordAgency?sido=${sido}&gugun=${gugun}&page=${page}&size=30`)
}