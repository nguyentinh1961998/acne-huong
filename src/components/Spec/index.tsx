import SpecCard, { SpecCardItem } from './SpecCard'

interface SpecProps {
  items?: SpecCardItem[]
}

export default function Spec({ items = [] }: SpecProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      {items.map((item) => (
        <SpecCard key={item.id} {...item} />
      ))}
    </div>
  )
}
