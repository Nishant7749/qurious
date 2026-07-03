import axios from 'axios'

const api = 'http://localhost:5000/quiz'

export const getQuiz = async(id)=> {
     try {
        const res = await axios.get(`${api}/${id}`)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const getQuizes = async () => {
    try {
        const res = await axios.get(api)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const postQuiz = async (data) => {
    try {
        const res = await axios.post(api, data)
        console.log("API Connected Successfully.")
        return res.data
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const putQuiz = async (id, data) => {
    try {
        const res = await axios.put(`${api}/${id}`, data)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}

export const delQuiz = async (id) => {
    try {
        const res = await axios.delete(`${api}/${id}`)
        return res.data
        console.log("API Connected Successfully.")
    } catch (error) {
        console.error("API Error: ", error.message)
    }
}