import axios from 'axios'

const LOGIN_API_URL = 'http://localhost:8000/rest-auth/login/'
const LOGOUT_API_URL = 'http://localhost:8000/rest-auth/logout/'
const SIGNININ_API_URL = 'http://localhost:8000/rest-auth/registration/'

/**
 * POST http://localhost:8000/rest-auth/login/
 */
export const POST_Login = (loginData) => {
    return axios.post(LOGIN_API_URL, loginData)
}

export const POST_SIGNIN = (signinData) => {
    return axios.post(SIGNININ_API_URL, signinData)
}

export const POST_LOGOUT = () => {
    return axios.post(LOGOUT_API_URL)
}