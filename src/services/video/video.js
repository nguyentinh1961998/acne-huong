import request from '../request'

export const getListApi = async (params) =>
  request({
    url: '/api/items',
    method: 'GET',
    params,
    enableFlashMessageError: false,
  })

export const getDetailApi = async (id) =>
  request({
    url: `/api/items/${id}`,
    method: 'GET',
  })

export const insertVideoApi = async (data) =>
  request({
    url: '/api/items',
    method: 'POST',
    enableFlashMessageSuccess: true,
    data,
  })

export const updateVideoApi = async ({ _id, ...data }) =>
  request({
    url: `/api/items/${_id}`,
    method: 'PUT',
    data,
    enableFlashMessageSuccess: true,
  })
export const deleteVideoApi = async (id) =>
  request({
    url: `/api/items/${id}`,
    method: 'DELETE',
    enableFlashMessageSuccess: true,
  })


