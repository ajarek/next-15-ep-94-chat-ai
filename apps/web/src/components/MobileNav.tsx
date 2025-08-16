'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

const MobileNav = () => {
   const pathname = usePathname()
  const links = [
   
    { to:"/contact", label: "Contact" },
    { to:"/ui/generateText", label: "Generate Text" },
    { to:"/ui/streamText", label: "Stream Text" },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetClose asChild>
        <SheetContent
          side='left'
          className='w-[200px] border-none bg-background/80 text-foreground shadow-none p-4 sm:hidden'
          aria-describedby='mobile-nav'
        >
          <SheetTitle className=''>
            <Link
              href='/'
              aria-label='Home'
              className={`hover:underline text-xl ${pathname === '/' ? 'text-blue-500 font-bold' : 'text-foreground'}`}
            >
             Home
            </Link>
          </SheetTitle>
          <div className='flex flex-col gap-4 text-xl mt-4 sm:hidden '>
            {links.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className={`hover:underline ${pathname === to ? 'text-blue-500 font-bold' : 'text-foreground'}`}>
                {label}
              </Link>
            );
          })}
           
          </div>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </SheetClose>
    </Sheet>
  )
}

export default MobileNav