import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken() || null
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
    }
  },
  actions: {
    async login (ctx, loginForm) {
      const res = await login(loginForm)
      ctx.commit('setToken', res)
    }
  }
}
