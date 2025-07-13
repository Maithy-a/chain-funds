'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import ModeToggle from './themes/ModeToggle'

const Sidebar = ({ user }: { user: any }) => {
    const pathname = usePathname()

    return (
        <aside className="sidebar">
            <Link href="/" className="sidebar-logo">
                <Image
                    src="/icons/antv.svg"
                    alt="Chain Funds Logo"
                    width={30}
                    height={30}
                    className="invert-0 dark:invert"
                />
                <span className="text-base sm:text-lg xl:text-xl font-semibold tracking-wide text-gray-900 dark:text-white font-qurova text-nowrap">
                    CHAIN <span className="text-bankGradient">fUND</span>.
                </span>
            </Link>

            <Separator className="mb-6" />

            <nav className="flex flex-col gap-3">
                {sidebarLinks.map((item) => {
                    const Icon = item.icon
                    const isActive =
                        pathname === item.route || pathname.startsWith(`${item.route}/`)

                    return (
                        <Link
                            key={item.route}
                            href={item.route}
                            className={cn(
                                'flex items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted',
                                {
                                    'bg-bank-gradient text-white shadow-sm': isActive,
                                    'text-gray-700 dark:text-gray-300': !isActive,
                                }
                            )}
                        >
                            <Icon
                                className={cn('size-5', {
                                    'text-white': isActive,
                                    'text-gray-500 dark:text-gray-400': !isActive,
                                })}
                            />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>


            <div className="mt-auto text-xs text-muted-foreground px-2 pt-4">
                <ModeToggle/>
            </div>
        </aside>
    )
}

export default Sidebar
