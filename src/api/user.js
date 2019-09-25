import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login/doLogin',
    method: 'post',
    data
  })
}

export function getCode() {
  return request({
    url: '/admin/login/code',
    method: 'get'
  })
}

export function getTest() {
  return request({
    url: '/admin/user',
    method: 'get'
  })
}
