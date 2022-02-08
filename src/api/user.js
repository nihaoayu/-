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
export function getInfo (token) {
}
export function logout () {
}
