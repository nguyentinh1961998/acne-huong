import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'

export default function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4 p-4 px-6 border-b border-neutral-200">
      <div className="flex items-center gap-4">
        <span className="bg-active w-5 h-5 rounded-full flex items-center justify-center text-white">
          <PhoneIcon size={12} />
        </span>
        <span className="text-neutral-500 hover:text-primary cursor-pointer font-light text-sm mr-2">
          +0936635536
        </span>
        <span className="bg-active w-5 h-5 rounded-full flex items-center justify-center text-white">
          <MailIcon size={12} />
        </span>
        <span className="text-neutral-500 hover:text-primary cursor-pointer font-light text-sm">
          email@gmail.com
        </span>
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
