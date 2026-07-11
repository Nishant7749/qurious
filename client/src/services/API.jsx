import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

//attach jwt to every request
api.interceptors.request.use((config)=> {
    const token = localStorage.getItem("token")

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config

    if(!token) {
        return "No Token"
    }
})


//crud
export const getQuiz = async(id)=> {
     try {
        const res = await api.get(`/quiz/${id}`)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const getQuizes = async () => {
    try {
        const res = await api.get(`/quiz`)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const postQuiz = async (data) => {
    try {
        const res = await api.post(`/quiz`, data)
        console.log("API Connected Successfully.")
        return res.data
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const putQuiz = async (id, data) => {
    try {
        const res = await api.put(`/quiz/${id}`, data)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const delQuiz = async (id) => {
    try {
        const res = await api.delete(`/quiz/${id}`)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}



//authentication

export const RegisterUser = async(data)=> {
    try {
        const res = await api.post(`/auth/register`, data)
        return res.data
        console.log("Registered.")
    } catch (error) {
        console.log("Register Error : ", error.message)
    }
}

export const LoginUser = async(data)=> {
    try {
        const res = await api.post(`/auth/login`, data)
        return res.data
        console.log("Logged In.")
    } catch (error) {
        console.log("Login Error : ", error.message)
    }
}