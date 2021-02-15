import axios from 'axios'

const LOGIN_API_URL = 'http://localhost:8000/rest-auth/login/'
const SIGNININ_API_URL = 'http://localhost:8000/rest-auth/registration/'

/**
 * POST http://localhost:8000/rest-auth/login/
 */
export const POST_Login = (loginData) => {
    return axios.post(LOGIN_API_URL, loginData)
}