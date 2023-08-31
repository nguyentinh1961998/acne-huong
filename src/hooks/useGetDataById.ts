// hooks/useApi.js
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { API_SERVER } from 'config/constant'

interface ApiHookProps {
  url: string
  params?: any
}

export const useGetDataById = ({ url, params }: ApiHookProps) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_SERVER}${url}`, params)

        setData(response.data)
      } catch (error: any) {
        toast.error('Yêu cầu xử lí thất bại!')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params, url])

  return { data, loading }
}
