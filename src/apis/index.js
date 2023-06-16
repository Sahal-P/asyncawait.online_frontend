import axios from 'axios'


axios.defaults.baseURL = "http://localhost:8000/"

export const getUsersAPI = async () => axios.get('/users')
export const getUserAPI = async () => axios.get('')

export const getFriendsAPI = async () => axios.get(`friends`)
export const registerAPI = async (user) => axios.post(`auth/register`, user)
export const LoginAPI = async (user) => axios.post(`auth/login`, user,{
    withCredentials: true,
  })
export const createUserAPI = async (user) => axios.post(`/users`, user)
export const updateUserAPI = async (user) => axios.post(`/users/${user.id}`, user)
export const deleteUserByIdAPI = async (id) => axios.post(`/users/${id}`)