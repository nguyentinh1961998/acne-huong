import Slider, { Settings } from 'react-slick'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import { useRef } from 'react'
import InformationItem, { InformationItemType } from './InformationItem'

interface InformationProps {
  items?: InformationItemType[]
}

export default function Information({ items = [] }: InformationProps) {
  const carouselRef = useRef<Slider>(null)
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: false,
  }

  return (
    <div className="flex flex-col gap-4 py-16">
      <span className="text-[48px] font-header font-light">
        Get in Touch With Us And We’ll Help Your Health!
      </span>
      <span className="text-lg font-light tracking-widest mb-14">
        Interested in our spa services? We want your spa experience to be a
        memorable one.
      </span>
      <div className="relative">
        <div className="absolute flex gap-4 right-0 z-20 text-neutral-500">
          <ArrowLeftIcon
            size={16}
            className="hover:text-primary cursor-pointer"
            onClick={() => carouselRef?.current?.slickPrev()}
          />
          <ArrowRightIcon
            size={16}
            className="hover:text-primary cursor-pointer"
            onClick={() => carouselRef?.current?.slickNext()}
          />
        </div>

        <Slider ref={carouselRef} {...settings}>
          {items.map((item) => (
            <InformationItem key={item.id} {...item} />
          ))}
        </Slider>
      </div>
      <div className="mt-16 flex items-center gap-8">
        <div className="text-xs flex items-center gap-3 hover:text-primary">
          <FacebookIcon size={14} fill="currentColor" />
          <span className="font-light tracking-[0.3rem]">FACEBOOK</span>
        </div>
        <div className="text-xs flex items-center gap-3 hover:text-primary">
          <TwitterIcon size={14} fill="currentColor" />
          <span className="font-light tracking-[0.3rem]">TWITTER</span>
        </div>
        <div className="text-xs flex items-center gap-3 hover:text-primary">
          <LinkedinIcon size={14} fill="currentColor" />
          <span className="font-light tracking-[0.3rem]">LINKEDIN</span>
        </div>
      </div>
    </div>
  )
}
