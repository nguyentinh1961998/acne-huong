/* eslint-disable no-underscore-dangle */
import { Skeleton } from 'antd'
import { Box } from 'components/Box'
import { EyeIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type VideoCardProps = {
  video: any
  loading: boolean
}

export default function VideoCard({ video, loading }: VideoCardProps) {
  const router = useRouter()

  const onGoVideoDetail = (id: string) => {
    router.push(`/videos/${id}`)
  }

  return (
    <Box
      className="bg-white rounded-lg w-full h-80 p-3 mx-auto cursor-pointer relative shadow-md"
      onClick={() => onGoVideoDetail(video._id)}
    >
      <Skeleton
        loading={loading}
        style={{ width: '100%', height: 192, margin: 'auto' }}
      >
        <img
          src={video?.thumbnail}
          alt={video._id}
          className="mx-auto h-48 rounded-lg mb-4 object-cover"
        />
      </Skeleton>
      {/* 
          <span className="bg-[#F3EDFF] px-2 py-1 text-xs rounded-md leading-none font-sans text-[#6B6B6B]">
            Blackhead
          </span> */}
      <p className="font-sans font-bold text-lg leading-5 truncate hover:text-clip  mb-3">
        {video?.title}
      </p>

      <p className="font-sans text-sm italic leading-5 truncate mb-2 text-[#6B6B6B]">
        {video?.description}
      </p>
      <div className="flex gap-1 items-center absolute bottom-0 left-0 mb-3 ml-3 text-[#6B6B6B]">
        <EyeIcon size={18} />
        <span className="font-sans text-xs leading-5 truncate">
          {video?.views}
        </span>
      </div>
    </Box>
  )
}
