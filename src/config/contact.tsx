import { MailIcon, PhoneIcon } from 'lucide-react'
import { ContactConfig } from 'types'

export const listContact: ContactConfig = {
  contacts: [
    {
      icon: <PhoneIcon size={16} />,
      label: '093.663.5536',
      href: 'tel:0936635536',
    },
    {
      icon: <MailIcon size={16} />,
      label: 'acnehuong@gmail.com',
      href: 'mailto:acnehuong@gmail.com',
    },
  ],
}
