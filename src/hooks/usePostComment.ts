import axios from 'axios'
import { toast } from 'react-hot-toast'
import { API_SERVER } from 'config/constant'

type PostCommentProps = {
  id: string
  data: any
  onSuccess?: () => void // Define the onSuccess type
}

export const postComment = async ({
  id,
  data,
  onSuccess,
}: PostCommentProps) => {
  try {
    const response = await axios.post(
      `${API_SERVER}api/comments/items/${id}`,
      data,
    )

    if (response.status === 201) {
      toast.success('Comment posted successfully!')
      if (typeof onSuccess === 'function') {
        onSuccess()
      }
    } else {
      toast.error('Failed to post comment.')
    }
  } catch (error) {
    toast.error('An error occurred while posting the comment.')
  }
}
