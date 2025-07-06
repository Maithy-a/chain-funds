
'use client'
import {
    Sheet,
    SheetTitle,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetClose,
    SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IconMenu } from '@tabler/icons-react';

import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section >
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="secondary" size="icon" className="size-8 border rounded-full">
                        <IconMenu />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="border-none">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <Link href="/" className='cursor-pointer flex items-center gap-1 px-4 '>
                            <Image
                                src="/icons/antv.svg"
                                alt="chain funds logo icon"
                                width={30}
                                height={30}
                                className="invert-0 dark:invert"
                            />
                            <span className="text-2xl text-gray-800 dark:text-white font-qurova">
                                CHAIN <span className="text-bankGradient">fUND</span>.
                            </span>
                        </Link>
                    </SheetHeader>

                    <div className="mobilenav-sheet">
                        <SheetClose asChild >
                            <nav className="grid gap-3" >
                                {sidebarLinks.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                                    return (
                                        <SheetClose asChild key={item.route} >

                                            <Link href={item.route} key={item.label}
                                                className={cn('mobilenav-sheet_close', { 'bg-bank-gradient': isActive })}>
                                                <span className={cn("relative size-6", { 'brightness-[3] invert-0': isActive })}>
                                                    <Icon className={cn('navlink-item', { '!text-white': isActive })}/>
                                                </span>
                                                <p className={cn('navlink-item', { '!text-white': isActive })}>{item.label}</p>
                                            </Link>

                                        </SheetClose>
                                    )
                                }
                                )}

                                {/* USER-- Render User */}
                            </nav>
                        </SheetClose>
                    </div>
                    {/* Render FOOTER */}
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>

                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
