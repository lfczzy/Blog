import request from '../plugins/axios'

export function register (user) {
  return request({
    url: '/users',
    method: 'POST',
    data: user
  })
}

export function login (user) {
  return request({
    url: '/tokens',
    method: 'POST',
    data: user
  })
}

export function uploadImg (data) {
  console.log(data)
  return request({
    headers: {
      'Content-type': 'application/json'
    },
    url: '/images',
    method: 'POST',
    data: data
  })
}

export function getUserInfo (id) {
  return request({
    url: `/users/${id}`,
    method: 'GET'
  })
}