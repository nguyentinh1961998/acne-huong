/* eslint-disable no-underscore-dangle */
import React from 'react'
import VideoCard from './VideoCard'

type VideoItemProps = {
  videos?: any
  loading: boolean
}

export default function VideoItem({ videos, loading }: VideoItemProps) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 mb-10">
      {videos?.map((video: any) => (
        <VideoCard video={video} loading={loading} />
      ))}
    </div>
  )
}
