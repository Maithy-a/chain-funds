'use client'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { IconMenu } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Separator } from './ui/separator'
import Footer from './Footer'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="secondary"
                    size="icon"
                    className="size-8 border rounded-full"
                    aria-label="Toggle mobile menu"
                >
                    <IconMenu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" aria-describedby={undefined} className="w-[280px] px-4 py-6 sm:w-[320px]">
                <SheetHeader className="mb-6">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/icons/antv.svg"
                            alt="Chain Funds Logo"
                            width={30}
                            height={30}
                            className="invert-0 dark:invert"
                        />
                        <span className="text-xl font-semibold text-gray-900 dark:text-white font-qurova tracking-wide">
                            CHAIN <span className="text-bankGradient">fUND</span>.
                        </span>
                    </Link>
                </SheetHeader>

                <Separator className="mb-6" />

                <nav className="grid gap-2">
                    {sidebarLinks.map((item) => {
                        const Icon = item.icon
                        const isActive =
                            pathname === item.route || pathname.startsWith(`${item.route}/`)

                        return (
                            <SheetClose asChild key={item.route}>
                                <Link
                                    href={item.route}
                                    className={cn(
                                        'flex items-center gap-4 rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted',
                                        {
                                            'bg-bank-gradient text-white shadow-sm ring-3 ring-blue-200 dark:ring-gray-700': isActive,
                                            'text-gray-700 dark:text-gray-300': !isActive,
                                        }
                                    )}  >
                                    <Icon
                                        className={cn('size-5', {
                                            'text-white': isActive,
                                            'text-gray-500 dark:text-gray-400': !isActive,
                                        })}
                                    />
                                    <span>{item.label}</span>
                                </Link>
                            </SheetClose>
                        )
                    })}
                </nav>
                <Footer user={user}  type="mobile" />
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
