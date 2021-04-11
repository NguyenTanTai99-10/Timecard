export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const loginAction = (input) => {
    // console.log('loginAction==',input);
    return ({
        type: LOGIN,
        input: input
    })
}