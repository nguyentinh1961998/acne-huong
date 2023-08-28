import Image from 'next/legacy/image'

interface LogoProps {
  isFooter?: boolean
}

export default function Logo({ isFooter }: LogoProps) {
  return (
    <Image
      width={isFooter ? 175 : 71}
      height={53}
      src={isFooter ? '/images/logo_footer.png' : '/images/logo_brown_main.png'}
      alt="Logo"
    />
  )
}
