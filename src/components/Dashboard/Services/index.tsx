import ServiceCard, { ServiceCardItem } from './ServiceCard'

interface ServicesProps {
  items?: ServiceCardItem[]
  className?: string
}

export default function Services({ items = [], className }: ServicesProps) {
  return (
    <div className={`flex justify-center items-center ${className} p-6 px-24`}>
      {items.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
    </div>
  )
}
