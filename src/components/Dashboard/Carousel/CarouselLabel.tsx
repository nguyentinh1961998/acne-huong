interface CarouselLabelProps {
  title?: string
  description?: string
  className?: string
}

export default function CarouselLabel({
  description,
  title,
  className,
}: CarouselLabelProps) {
  return (
    <div className={`flex text-center text-white flex-col ${className}`}>
      <div className="font-bold text-[72px] font-header">{title}</div>
      <h4 className="text-neutral-200 text-xs">{description}</h4>
    </div>
  )
}
