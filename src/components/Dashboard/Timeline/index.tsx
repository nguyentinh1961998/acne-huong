'use client'

import { useEffect, useRef, useState } from 'react'
import HorizontalTimeline from 'react-horizontal-timeline'
import Slider, { Settings } from 'react-slick'
import dayjs from 'dayjs'
import styled from 'styled-components'
import TimelineItem, { TimelineItemType } from './TimelineItem'

interface TimelineProps {
  items?: TimelineItemType[]
}

const StyledTimeline = styled(HorizontalTimeline)`
  background-color: red !important;
`

export default function Timeline({ items = [] }: TimelineProps) {
  const carouselRef = useRef<Slider>(null)
  const [currentId, setCurrentId] = useState<number>(
    Number(items?.[0]?.id ?? 0),
  )

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    swipeToSlide: false,
  }

  useEffect(() => {
    carouselRef.current?.slickGoTo(currentId)
  }, [currentId])

  return (
    <div className="w-full h-screen p-4 px-20 bg-[url(/images/timeline-bg-pink.jpg)] flex flex-col items-center justify-center">
      <div className="text-[64px] text-white font-header font-light">
        Our Spa History.
      </div>
      <div className="h-28 w-full ">
        <StyledTimeline
          index={currentId}
          indexClick={(index: number) => {
            setCurrentId(index)
          }}
          values={items.map((item) => dayjs(item.date))}
          getLabel={(date: Date) => dayjs(date).format('YYYY').toString()}
        />
      </div>
      <Slider className="h-[300px]" ref={carouselRef} {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <TimelineItem {...item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
