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
    <div className="flex items-center justify-between gap-4 px-4 py-6 border-b-[2px] border-neutral-200">
      <div className="flex items-center gap-4">
        <span className="bg-active w-8 h-8 rounded-full flex items-center justify-center text-white">
          <PhoneIcon size={20} />
        </span>
        <span className="text-neutral-500 hover:text-primary cursor-pointer text-lg mx-2">
          +0936635536
        </span>
        <span className="bg-active w-8 h-8 rounded-full flex items-center justify-center text-white">
          <MailIcon size={20} />
        </span>
        <span className="text-neutral-500 hover:text-primary cursor-pointer text-lg mx-2">
          email@gmail.com
        </span>
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon
          className="mx-10 hover:text-primary cursor-pointer"
          size={32}
        />
        <FacebookIcon className="hover:text-primary cursor-pointer" />
        <InstagramIcon className="hover:text-primary cursor-pointer" />
        <LinkedinIcon className="hover:text-primary cursor-pointer" />
        <TwitterIcon className="hover:text-primary cursor-pointer" />
        <YoutubeIcon className="hover:text-primary cursor-pointer" />
      </div>
    </div>
  )
}
