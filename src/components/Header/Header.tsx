import { IconLogo } from 'components/icons/components/IconLogo'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from 'components/ui/navigation-menu'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="p-6 py-8 flex items-center bg-[#18113d]">
      <div className="w-60">
        <IconLogo />
      </div>

      <NavigationMenu>
        <NavigationMenuList className="text-white gap-x-4">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Popular
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Categories
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
