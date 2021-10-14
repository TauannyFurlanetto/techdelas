import axios from 'axios'
const resp = axios.get("https://itunes.apple.com/lookup?id=1498395235&callBack").then(response=>response.data)
export {resp}