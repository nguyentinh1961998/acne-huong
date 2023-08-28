import LocationItem, { LocationItemType } from './LocationItem'

interface LocationsProps {
  items?: LocationItemType[]
}

export default function Locations({ items = [] }: LocationsProps) {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-center text-[42px] font-header">
        Where To Find Our Salon
      </span>
      <div className="flex items-center justify-center gap-24">
        {items.map((item) => (
          <LocationItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
