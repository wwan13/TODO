import React from 'react'
import axios from 'axios'

const TODO_API_URL = 'http://localhost:8000/api/todo/'

/**
 * GET http://localhost:8000/api/todo/
 */
export const GETTodoList = () => {
    return axios.get(TODO_API_URL)
}

/**
 * POST http://localhost:8000/api/todo/
 */
export const POSTTodoObject = (todoData) => {
    return axios.post(TODO_API_URL , todoData)
}

/**
 * DELETE http://localhost:8000/api/todo/todoId
 */
export const DELETETodoObject = (todoId) => {
    return axios.delete(TODO_API_URL + todoId)
}

/**
 * UPDATE http://localhost:8000/api/todo/todoId
 */
export const UPDATETodoObject = (todoId, todoData) => {

}

/**
 * OPTION http://localhost:8000/api/todo/todoId
 */
export const OPTIONSetComplete = (todoId) => {

}