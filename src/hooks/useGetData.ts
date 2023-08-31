/* eslint-disable react-hooks/exhaustive-deps */
// hooks/useApi.js
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { API_SERVER } from 'config/constant'
import { DEFAULT_PAGE, PAGE_SIZE } from 'constants/video.constants'

interface ApiHookProps {
  url: string
  params?: any
  onSuccess?: () => void
}

export const useGetData = ({ url, params, onSuccess }: ApiHookProps) => {
  const [data, setData] = useState<any>(null)
  const [pagination, setPagination] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_SERVER}${url}`, params)
      const indexOfLastItem = currentPage * PAGE_SIZE
      const indexOfFirstItem = indexOfLastItem - PAGE_SIZE
      const currentItems = response.data.data.slice(
        indexOfFirstItem,
        indexOfLastItem,
      )
      setData(currentItems)
      setPagination({
        nextPage: DEFAULT_PAGE + 1,
        page: currentPage,
        pageSize: PAGE_SIZE,
        prevPage: DEFAULT_PAGE - 1,
        total: response.data.data.length,
        totalPages: Math.ceil(response.data.data.length / PAGE_SIZE),
      })

      if (typeof onSuccess === 'function') {
        onSuccess()
      }
    } catch (error: any) {
      toast.error('Yêu cầu xử lí thất bại!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage, params, url])

  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage)
  }
  const refetchData = () => {
    fetchData()
  }

  return { data, onChangePage, refetchData, pagination, loading }
}
