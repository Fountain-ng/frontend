import { currentHost } from "./host";
export const routes = Object.freeze({
  health: `${currentHost}/health`,
  auth: {
    status: `${currentHost}/auth/status`,
    refreshToken: `${currentHost}/auth/token/refresh`,
    logout: `${currentHost}/auth/logout`,
    user: {
      signup: `${currentHost}/auth/user/login`,
      login: `${currentHost}/auth/user/signup`,
      get: `${currentHost}/auth/user/get`,
      updateBasic: `${currentHost}/auth/user/update/basic`,
      updatePassword: `${currentHost}/auth/user/update/password`,
    },
    admin: {
      signup: `${currentHost}/auth/admin/login`,
      login: `${currentHost}/auth/admin/signup`,
      get: `${currentHost}/auth/admin/get`,
      updateBasic: `${currentHost}/auth/admin/update/basic`,
      updatePassword: `${currentHost}/auth/admin/update/password`,
    },
    brand: {
      create: `${currentHost}/brand/create`,
      get: `${currentHost}/brand`,
      update: `${currentHost}/brand/update`,
    },
    product: {
      create: `${currentHost}/product/create/`,
      get: `${currentHost}/product`,
      getByBrand: `${currentHost}/product/brand/`,
      update: `${currentHost}/product/update/`,
      deleteOne: `${currentHost}/product/delete/`,
      deleteByBrand: `${currentHost}/product/brand/`,
    },
  },
});
