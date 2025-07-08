
'use client'
import {
    Sheet,
    SheetTitle,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IconMenu } from '@tabler/icons-react';

import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Separator } from "./ui/separator";

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section>
            <Sheet aria-describedby='menu' >
                <SheetTrigger asChild>
                    <Button variant="secondary" size="icon" className="size-8 border rounded-full">
                        <IconMenu />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="px-3 py-6 ">
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
                            <span className="text-2xl font-bold text-gray-900 tracking-widest dark:text-white font-qurova">
                                CHAIN <span className="text-bankGradient">fUND</span>.
                            </span>
                        </Link>
                    </SheetHeader>
                    
                    <div className="mb-6 px-4 ">
                        <Separator />
                    </div>

                    <nav className="grid gap-3 px-4">

                        {sidebarLinks.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                            return (
                                <SheetClose asChild key={item.route}>
                                    <Link
                                        href={item.route}
                                        className={cn(
                                            "flex items-center gap-4 rounded-lg px-3 py-2 text-2xl font-medium transition-colors hover:bg-muted",
                                            {
                                                "bg-bank-gradient text-white shadow-sm": isActive,
                                                "text-gray-700 dark:text-gray-300": !isActive,
                                            }
                                        )}>
                                        <Icon
                                            className={cn("size-6", {
                                                "text-white": isActive,
                                                "text-gray-500 dark:text-gray-400": !isActive,
                                            })}
                                        />
                                        <span className="text-sm">{item.label}</span>
                                    </Link>
                                </SheetClose>
                            );
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </section>

    )
}

export default MobileNav
