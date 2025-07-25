import axios from "axios";



export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4cea6ae028254e9481d9aa02dc7b3aab'
    }
})