import router from "./router";
import { getToken } from "./utils/auth";
import { notify } from "./utils/message";

// 路由前置守卫
router.beforeEach((to, from, next) => {
    const token = getToken();
    if (!token && to.path !== '/login') {
        notify('请先登录', 'warning');
        next({path: '/login'});
        return;
    }

    if (token && to.path === '/login') {
        notify('您已登录', 'info');
        next({path: from.path ? from.path : '/'});
        return; 
    }

    next();
})

// 路由后置守卫
router.afterEach((to, from, next) => {

})