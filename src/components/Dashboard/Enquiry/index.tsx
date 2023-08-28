import Form from './Form'
import Information from './Information'
import { InformationItemType } from './InformationItem'

interface EnquiryProps {
  items: InformationItemType[]
}

export default function Enquiry({ items }: EnquiryProps) {
  return (
    <div className="h-screen px-24 grid grid-cols-12 gap-16">
      <div className="col-span-6">
        <Information items={items} />
      </div>
      <div className="col-span-6">
        <Form />
      </div>
    </div>
  )
}
