interface LocationItemProps {
  email?: string
  phone?: string
  city?: string
  address?: string
}

export type LocationItemType = LocationItemProps & {
  id: string
}

export default function LocationItem({
  city,
  email,
  address,
  phone,
}: LocationItemProps) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <span className="font-header text-xl font-light">{city}</span>
      <span className="text-sm font-light text-neutral-500 mb-4">
        {address}
      </span>
      <span className="text-sm font-light text-neutral-500 cursor-pointer hover:text-primary">
        {email}
      </span>
      <span className="text-sm font-light text-neutral-500 cursor-pointer hover:text-primary">
        {phone}
      </span>
    </div>
  )
}
