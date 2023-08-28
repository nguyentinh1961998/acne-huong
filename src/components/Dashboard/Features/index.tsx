import FeatureItem, { FeatureItemType } from './FeatureItem'

interface FeaturesProps {
  items?: FeatureItemType[]
}

export default function Features({ items = [] }: FeaturesProps) {
  return (
    <div className="flex justify-center items-center">
      {items.map((item) => (
        <FeatureItem key={item.id} {...item} />
      ))}
    </div>
  )
}
