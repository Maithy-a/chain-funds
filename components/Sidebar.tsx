'use client'
import Link from 'next/link'
import React, { use } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();

    return (
        <section className='sidebar ' >
            <nav className='flex flex-col gap-3' >
                <Link href="/" className='mb-12 cursor-pointer items-center flex gap-1 w-fit' >
                    <Image
                        src="/icons/antv.svg"
                        alt="chain funds logo icon"
                        width={100}
                        height={100}
                        className="size-[32px] text-black mx-xl:size-[14]"
                    />
                    <span className="sidebar-logo text-black font-qurova" >
                        CHAIN
                        <span className="bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">fUND</span>.
                    </span>
                </Link>

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
            </nav>
        </section>
    )
}

export default Sidebar