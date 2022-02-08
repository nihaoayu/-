import { login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    // 设置token
    setToken (state, newToken) {
      state.token = newToken
    },
    // 删除token
    removeToken (state) {
      state.token = null
    }
  },
  actions: {
    async login (ctx, loginForm) {
      const res = await login(loginForm)
      ctx.commit('setToken', res)
    }
  }
}
