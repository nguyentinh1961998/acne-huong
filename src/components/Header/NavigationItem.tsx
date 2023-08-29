import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  href: string
  label: string
}

export default function NavigationItem({ href, label }: Props) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="text-sm text-primary flex items-center gap-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && <MoveRightIcon fill="#f59b90" />}

      <Link className="uppercase" href={href}>
        {label}
      </Link>
    </div>
  )
}
