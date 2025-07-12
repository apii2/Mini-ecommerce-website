import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const navList = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Cart',
      url: '/cart'
    }
  ];
  
  return (
    <section className='flex justify-around items-center mb-6'>
        <NavigationMenu>
        <NavigationMenuList>
            {navList.map(item=>(
            <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild>
                <Link href={item.url}>{item.name}</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            ))}
        </NavigationMenuList>
        </NavigationMenu>

        <Button asChild>
        <Link href="/admin/login">Login</Link>
        </Button>
    </section>
  )
}
