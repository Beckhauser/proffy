import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.2:3333'
  // baseURL: 'http://sp-ebb.anonymous.mobile.exp.direct:3333'

});

export default api;
