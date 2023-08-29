/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface FeatureItemProps {
  title?: string
  onClick?: () => void
  iconSrc?: string
  className?: string
}

export type FeatureItemType = FeatureItemProps & {
  id: string
}

export default function FeatureItem({
  iconSrc,
  onClick,
  title,
  className,
}: FeatureItemProps) {
  return (
    <div
      className={`relative flex items-center flex-col min-w-[350px] min-h-[380px] justify-center gap-4 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="bg-light absolute w-full h-full opacity-0 hover:opacity-70 transition-all duration-300" />
      <div className="p-4 rounded-full aspect-square flex items-center justify-center w-20 h-2w-20 bg-neutral-200 z-10">
        <img src={iconSrc} alt="icon" />
      </div>
      <span className="text-3xl text-white font-header z-10">{title}</span>
    </div>
  )
}
