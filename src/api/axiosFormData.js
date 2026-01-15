import axios from "axios"

const axiosFormdata = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    withCredentials:true
})

export default axiosFormdata