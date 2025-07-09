'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const Sidebar = ({ user }: { user: any }) => {
    const pathname = usePathname()

    return (
        <aside className="hidden md:flex sticky top-0 left-0 h-screen w-[250px] 2xl:w-[335px] flex-col border-r bg-white dark:bg-neutral-950 text-white px-4 py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 px-2 mb-6">
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

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
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

            {/* Footer */}
            <div className="mt-auto text-xs text-muted-foreground px-2 pt-4">
                {/* Add settings, version, or logout link here */}
                Footer
            </div>
        </aside>
    )
}

export default Sidebar
