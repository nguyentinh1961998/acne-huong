'use client'

import { VideoListPage } from 'components/videos/VideoListPage'
import { useGetData } from 'hooks/useGetData'
import React from 'react'

export default function VideoPage() {
  const { data } = useGetData({
    url: 'api/categories',
  })
  const {
    data: videoData,
    loading: loadingVideo,
    pagination,
    onChangePage,
  } = useGetData({
    url: 'api/items',
  })

  return (
    <div className="flex flex-col gap-10 mb-10">
      {data && (
        <VideoListPage
          videos={videoData?.slice(0, 8)}
          onChangePage={onChangePage}
          loadingVideo={loadingVideo}
          title="Newest videos"
        />
      )}
      {data && (
        <VideoListPage
          categories={data}
          videos={videoData}
          pagination={pagination}
          onChangePage={onChangePage}
          loadingVideo={loadingVideo}
          title="Trending videos"
        />
      )}
    </div>
  )
}
