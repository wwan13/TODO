export const MAIN_URL = '/'
export const TODO_CREATE_URL = '/todo/create'
export const LOGIN_URL = '/login'
export const SIGNIN_URL = '/signin'
export const TODO_UPDATE_URL = '/todo/:id/update'
export const GET_TODO_UPDATE_URL = (todoId) => {
    return '/todo/' + todoId + '/update'
}