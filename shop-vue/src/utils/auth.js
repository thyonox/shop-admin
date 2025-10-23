import { useCookies } from "@vueuse/integrations/useCookies";

const cookie = useCookies();
const TOKEN_KEY = 'admin-token';

// 获取token
export function getToken() {
    return cookie.get(TOKEN_KEY);
}

// 设置token
export function setToken(token) {
    return cookie.set(TOKEN_KEY, token);
}

// 移除token
export function removeToken() {
    return cookie.remove(TOKEN_KEY);
}