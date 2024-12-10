import { currentHost } from "./host";

export const routes = Object.freeze({
  health: `${currentHost}/health`,
  auth: {
    status: `${currentHost}/auth/status`,
    refreshToken: `${currentHost}/auth/token/refresh`,
    logout: `${currentHost}/auth/logout`,
    login: `${currentHost}/auth/user/login`,
    signup: `${currentHost}/auth/user/signup`,
  },
  user: {
    get: `${currentHost}/auth/user/get`,
    updateBasic: `${currentHost}/auth/user/update/basic`,
    updatePassword: `${currentHost}/auth/user/update/password`,
  },
  brand: {
    get: `${currentHost}/brand`,
  },
  product: {
    get: `${currentHost}/product`,
    getByBrand: `${currentHost}/product/brand/`,
  },
  order: {
    create: `${currentHost}/protected/order/create`,
    get: `${currentHost}/protected/order/`,
    getByUser: `${currentHost}/protected/order/user`,
    update: `${currentHost}/protected/order/update/`,
    deleteOne: `${currentHost}/protected/order/delete/`,
  },
});
