import axios from 'axios'

const TODO_API_URL = 'http://localhost:8000/api/todo/'

/**
 * GET http://localhost:8000/api/todo/
 */
export const GET_TodoList = () => {
    return axios.get(TODO_API_URL)
}

/**
 * GET http://localhost:8000/api/todo/{todoId}
 */
export const GET_TodoObject = (todoId) => {
    return axios.get(TODO_API_URL + todoId)
}

/**
 * POST http://localhost:8000/api/todo/
 */
export const POST_TodoObject = (todoData) => {
    return axios.post(TODO_API_URL , todoData)
}

/**
 * DELETE http://localhost:8000/api/todo/{todoId}
 */
export const DELETE_TodoObject = (todoId) => {
    return axios.delete(TODO_API_URL + todoId)
}

/**
 * PUT http://localhost:8000/api/todo/{todoId}
 */
export const PUT_TodoObject = (todoId, todoData) => {
    return axios.put(TODO_API_URL + todoId + "/", todoData)
}

/**
 * GET http://localhost:8000/api/todo/{todoId}/set_complete
 */
export const GET_SetComplete = (todoId) => {
    return axios.get(TODO_API_URL + todoId + "/set_complete")
}

/**
 * GET http://localhost:8000/api/todo/{todoId}/set_ongoing
 */
export const GET_SetOngoing = (todoId) => {
    return axios.get(TODO_API_URL + todoId + "/set_ongoing")
}