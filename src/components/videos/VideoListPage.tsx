import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Pagination } from 'antd'
import { PAGE_SIZE } from 'constants/video.constants'
import VideoItem from './VideoItem'

type VideoListProps = {
  categories?: any
  videos: any
  onChangePage: (newPage: number) => void
  pagination?: {
    nextPage: number
    page: number
    pageSize: number
    prevPage: number
    total: number
    totalPages: number
  }
  loadingVideo: boolean
  title: string
}

export function VideoListPage({
  categories,
  videos,
  onChangePage,
  pagination,
  loadingVideo,
  title,
}: VideoListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categories?.[0]?.title || '',
  )

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const handleCategoryKeyPress = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    categoryId: string,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCategoryClick(categoryId)
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <p className="mb-5 font-sans text-3xl font-bold tracking-wide uppercase">
        {title}
      </p>
      <div
        className={twMerge(
          'flex gap-3 flex-wrap sm:flex-nowrap ',
          categories && 'mb-5',
        )}
      >
        {categories?.map(({ _id, title }: any) => (
          <span
            key={_id}
            role="button"
            tabIndex={0}
            onClick={() => handleCategoryClick(_id)}
            onKeyPress={(event) => handleCategoryKeyPress(event, title)}
            className={twMerge(
              'whitespace-nowrap font-sans text-lg px-1 py-1 cursor-pointer flex justify-center items-center',
              title === activeCategory &&
                'border-inherit border-b-4 border-b-solid border-b-red-500 transition duration-300 text-red-500 font-semibold',
            )}
          >
            {title}
          </span>
        ))}
      </div>
      <VideoItem videos={videos} loading={loadingVideo} />
      {pagination && (
        <Pagination
          onChange={onChangePage}
          current={pagination?.page}
          total={pagination?.total}
          pageSize={PAGE_SIZE}
          hideOnSinglePage
          showSizeChanger={false}
        />
      )}
    </div>
  )
}
