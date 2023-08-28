/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface TimelineItemProps {
  title: string
  description?: string
  onClick?: () => void
  image: string
}

export type TimelineItemType = TimelineItemProps & {
  id: string
  date: string
}

export default function TimelineItem({
  description,
  onClick,
  title,
  image,
}: TimelineItemProps) {
  return (
    <div className="flex gap-4 items-center">
      <img src={image} alt="" width={400} height={300} />
      <span className="flex flex-col gap-4">
        <span className="font-header">{title}</span>
        <span>{description}</span>
        <span onClick={onClick}>LEARN MORE</span>
      </span>
    </div>
  )
}
