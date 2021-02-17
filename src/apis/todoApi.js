import axios from 'axios'
import {getTokenInSessionStorage} from '../auth/auth'

const TODO_API_URL = 'http://localhost:8000/api/todo/'
const HEADER_CONFIG = {
    headers : {
        'Authorization' : getTokenInSessionStorage()
    }
}

/**
 * GET http://localhost:8000/api/todo/
 */
export const GET_TodoList = () => {
    return axios.get(TODO_API_URL, HEADER_CONFIG)
}

/**
 * GET http://localhost:8000/api/todo/
 */
export const GET_FilteredTodoList = (filter) => {
    return axios.get(TODO_API_URL + "?filter=" + filter, HEADER_CONFIG)
}

/**
 * GET http://localhost:8000/api/todo/{todoId}
 */
export const GET_TodoObject = (todoId) => {
    return axios.get(TODO_API_URL + todoId, HEADER_CONFIG)
}

/**
 * POST http://localhost:8000/api/todo/
 */
export const POST_TodoObject = (todoData) => {
    return axios.post(TODO_API_URL , todoData, HEADER_CONFIG)
}

/**
 * DELETE http://localhost:8000/api/todo/{todoId}
 */
export const DELETE_TodoObject = (todoId) => {
    return axios.delete(TODO_API_URL + todoId, HEADER_CONFIG)
}

/**
 * PUT http://localhost:8000/api/todo/{todoId}
 */
export const PATCH_TodoObject = (todoId, todoData) => {
    return axios.patch(TODO_API_URL + todoId + "/", todoData, HEADER_CONFIG)
}

/**
 * GET http://localhost:8000/api/todo/{todoId}/set_complete
 */
export const GET_SetComplete = (todoId) => {
    return axios.get(TODO_API_URL + todoId + "/set_complete", HEADER_CONFIG)
}

/**
 * GET http://localhost:8000/api/todo/{todoId}/set_ongoing
 */
export const GET_SetOngoing = (todoId) => {
    return axios.get(TODO_API_URL + todoId + "/set_ongoing", HEADER_CONFIG)
}