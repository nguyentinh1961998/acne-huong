import { MoveRightIcon } from 'lucide-react'

interface ServiceCardProps {
  icon?: string | JSX.Element
  title?: string
  description?: string
  onBtnClick?: () => void
  className?: string
}

export type ServiceCardItem = ServiceCardProps & { id: string }

export default function ServiceCard({
  description,
  icon,
  onBtnClick,
  title,
  className,
}: ServiceCardProps) {
  return (
    <span
      className={`p-6 max-w-[380px] min-h-[480px] flex flex-col justify-center items-center gap-8 shadow-xl bg-white ${className}`}
    >
      <div className="w-36 h-36 flex items-center justify-center rounded-full bg-[#feefec] p-2">
        {icon}
      </div>
      <div className="text-xl font-light font-header">{title}</div>
      <div className="text-xs w-[70%] text-center text-neutral-400">
        {description}
      </div>
      <button
        className="flex text-[9px] font-light items-center gap-4"
        onClick={onBtnClick}
      >
        LEARN MORE
        <MoveRightIcon size={10} />
      </button>
    </span>
  )
}
