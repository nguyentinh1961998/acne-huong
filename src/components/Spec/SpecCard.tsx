import Image from 'next/legacy/image'

interface SpecCardProps {
  src: string
  title?: string
  description?: string
  className?: string
}

export type SpecCardItem = SpecCardProps & { id: string }

export default function SpecCard({
  src,
  description,
  title,
  className,
}: SpecCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 max-w-[360px] min-h-[320px] text-center ${className}`}
    >
      <Image width={200} height={124} objectFit="contain" src={src} />
      <span className="text-xl my-2 font-header font-light">{title}</span>
      <span className="text-xs text-neutral-500 max-w-[300px] leading-6">
        {description}
      </span>
    </div>
  )
}
