import request from "../utils/request";

// 登录方法
export function login (username, password) {
    return request.post('admin/login', {
        username,
        password
    })
}