
'use client'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IconMenu } from '@tabler/icons-react';

import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Separator } from "@/components/ui/separator"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w[264px]">
            <Sheet>
                <SheetTrigger>
                    <Button variant="secondary" size="icon" className="size-8 border rounded-full">
                        <IconMenu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="border-none">
                    <SheetHeader className="mt-4" >
                        <Link href="/" className='cursor-pointer flex items-center gap-1 px-4 '>
                        <Image
                            src="/icons/antv.svg"
                            alt="chain funds logo icon"
                            width={28}
                            height={28}
                            className="size-[29px] mx-xl:size-[14] invert-0 dark:invert"
                        />
                        <span className="text-2xl text-gray-800 dark:text-white font-qurova">
                            CHAIN <span className="text-bankGradient">fUND</span> .
                        </span>
                    </Link>
                    <Separator className="mb-4 mt-4"/>
                    </SheetHeader>



                    {sidebarLinks.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                        return (
                            <Link href={item.route} key={item.label}
                                className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                                <span className={cn("relative size-6", { 'brightness-[3] invert-0': isActive })}>
                                    <Icon className={cn('sidebar-link-icon')} />
                                </span>
                                <p className={cn('sidebar-label', { '!text-white': isActive })}>{item.label}</p>
                            </Link>
                        )
                    }
                    )}
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
