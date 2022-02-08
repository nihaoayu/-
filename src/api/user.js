import request from '@/utils/request'
/**
 * @description: 登录
 * @param {*} data {modile, password}
 * @return {*}
 */
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
/**
 * @description: 获取用户资料
 * @param {*}
 * @return {*}
 */
export function getUserInfo () {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}
export function logout () {
}
