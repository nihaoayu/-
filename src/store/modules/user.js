import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken() || null,
    userInfo: {}
  },
  mutations: {
    // 设置token
    setToken (state, newToken) {
      state.token = newToken
      setToken(newToken)
    },
    // 删除token
    removeToken (state) {
      state.token = null
      removeToken
    },
    // 设置用户信息
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    // 删除用户信息
    removeUserInfo (state) {
      state.userInfo = {}
    }
  },
  actions: {
    // 登录
    async login (ctx, loginForm) {
      const res = await login(loginForm)
      ctx.commit('setToken', res)
    },
    // 获取用户信息
    async getUserInfoActions (ctx) {
      const res = await getUserInfo()
      const avatar = await getUserDetailById(res.userId)
      ctx.commit('setUserInfo', { ...res, ...avatar })
    }
  }
}
