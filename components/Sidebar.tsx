'use client'
import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Separator } from "@/components/ui/separator"


const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();

    return (
        <aside className='sidebar' >
            <nav className='flex flex-col gap-3' >
                <Link href="/" className='cursor-pointer w-fit 
                flex gap-4 items-center text-nowrap py-1 md:p-3 2xl:p-3.5 justify-center xl:justify-start 
                '>
                    <Image
                        src="/icons/antv.svg"
                        alt="chain funds logo icon"
                        width={30}
                        height={30}
                        className="size-[29px] mx-xl:size-[14] invert-0 dark:invert"
                    />
                    <span className="sidebar-logo text-gray-800 dark:text-white font-qurova">
                        CHAIN <span className="text-bankGradient">fUND</span>.
                    </span>
                </Link>
                <Separator className='mb-6 ' />

                {sidebarLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (

                        <Link href={item.route} key={item.label}
                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                            <span className={cn("relative size-6", { 'brightness-[3] invert-0': isActive })}>
                                <Icon className={cn('navlink-item', { '!text-white': isActive })} />
                            </span>
                            <p className={cn('navlink-item', { '!text-white': isActive })}>{item.label}</p>
                        </Link>
                    )
                }
                )}

            <section className='footer' >
               FOOTER
            </section>
            </nav>

        </aside>
    )
}

export default Sidebar