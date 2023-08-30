import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon?: string | JSX.Element
  title?: string
  description?: string
  className?: string
  href?: string
}

export type ServiceCardItem = ServiceCardProps & { id: string }

export default function ServiceCard({
  description,
  icon,
  title,
  className,
  href,
}: ServiceCardProps) {
  return (
    <span
      className={`p-6 max-w-[380px] min-h-[480px] flex flex-col justify-center items-center gap-8 shadow-xl bg-white ${className}`}
    >
      <div className="w-36 h-36 flex items-center justify-center rounded-full bg-light p-2">
        {icon}
      </div>
      <div className="text-xl font-light font-header">{title}</div>
      <div className="text-xs w-[70%] text-center text-neutral-400">
        {description}
      </div>
      <Link
        href={href ?? '#'}
        className="flex text-[9px] font-light items-center gap-4 hover:text-primary transition duration-300"
      >
        LEARN MORE
        <MoveRightIcon size={10} />
      </Link>
    </span>
  )
}
