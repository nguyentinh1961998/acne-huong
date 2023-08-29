import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { listContact } from 'config/contact'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SearchIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'
import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4 p-4 px-6 border-b border-neutral-200">
      <div className="flex items-center gap-4">
        {listContact.contacts.map((contact, index) => (
          <Box key={index} className="flex gap-x-2 items-center cursor-pointer">
            <Box className="bg-primary h-8 w-8 flex items-center justify-center rounded-full text-white">
              {contact.icon}
            </Box>

            <Link
              href={contact.href || ''}
              className="text-dark hover:text-primary cursor-pointer font-light text-sm mr-2"
            >
              <Text as="b">{contact.label}</Text>
            </Link>
          </Box>
        ))}
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon
          className="mx-6 hover:text-primary cursor-pointer"
          size={20}
        />
        <FacebookIcon className="hover:text-primary cursor-pointer" size={14} />
        <InstagramIcon
          className="hover:text-primary cursor-pointer"
          size={14}
        />
        <LinkedinIcon className="hover:text-primary cursor-pointer" size={14} />
        <TwitterIcon className="hover:text-primary cursor-pointer" size={14} />
        <YoutubeIcon className="hover:text-primary cursor-pointer" size={14} />
      </div>
    </div>
  )
}
