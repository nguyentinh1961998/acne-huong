import { LocateFixedIcon, MailIcon, PhoneIcon } from 'lucide-react'

interface ItemProps {
  title?: string
  address?: string
  phone?: string
  email?: string
}

export type InformationItemType = ItemProps & {
  id?: string
}

export default function InformationItem({
  address,
  email,
  phone,
  title,
}: ItemProps) {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-header text-2xl mb-2">{title}</span>
      <span className="flex items-center gap-4">
        <div className="w-6 h-6 flex items-center justify-center bg-active rounded-full text-white">
          <LocateFixedIcon size={16} />
        </div>
        <span className="text-neutral-500 text-base font-light">{address}</span>
      </span>
      <span className="flex items-center gap-4">
        <div className="w-6 h-6 flex items-center justify-center bg-active rounded-full text-white">
          <PhoneIcon size={16} />
        </div>
        <span className="text-neutral-500 text-base font-light">{phone}</span>
      </span>
      <span className="flex items-center gap-4">
        <div className="w-6 h-6 flex items-center justify-center bg-active rounded-full text-white">
          <MailIcon size={16} />
        </div>
        <span className="text-neutral-500 text-base font-light">{email}</span>
      </span>
    </div>
  )
}
