
export const setTokenInSessionStorage = (token) => {
    window.sessionStorage.setItem('Token', token)
}

export const getTokenInSessionStorage = () => {
    return window.sessionStorage.getItem('Token')
}

export const removeTokenInSessionStorage = () => {
    window.sessionStorage.removeItem('Token')
}

export const setUsernameInSessionStorage = (username) => {
    window.sessionStorage.setItem('username', username)
}

export const getUsernameInSessionStorage = () => {
    return window.sessionStorage.getItem('username')
}

export const removeUsernameInSessionStorage = () => {
    window.sessionStorage.removeItem('username')
}

export const isLoggedIn = () => {
    var token = getTokenInSessionStorage()
    if( token == null ) {
        return false
    } else {
        return true
    }
}