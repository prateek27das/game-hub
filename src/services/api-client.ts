import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '5e7663e1edb84c91a12dd547aaa16ec0'
    }
})