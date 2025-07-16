import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'
import Image from 'next/image'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className="right-sidebar no-scrollbar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-4xl tracking-tight font-semibold text-blue-500 select-none">
                            <Image
                                src={'/avatars/av_1.png'}
                                alt='avatar'
                                fill
                            />
                        </span>
                    </div>

                    <div className="profile-details">
                        <h1 className='profile-name'>
                            {user.name}
                        </h1>
                        <p className="profile-email">
                            {user.email}
                        </p>
                    </div>
                </div>
            </section>

            <section className='banks'>
                <div className="flex justify-between">
                    <span className="text-[16px] font-semibold" >
                        Banks
                    </span>
                    <Link href={'/'} className='flex gap-2 text-gray-500 hover:text-gray-800'>
                        <IconPlus
                            size={22} />
                        <h2 className='text-[14px] font-semibold'>Add Bank</h2>
                    </Link>
                </div>

                {banks?.length > 0 && (
                    <div className='relative flex flex-1 items-center justify-center h-[200px]'>
                        <div className='relative w-[320px]'>

                            <div className="absolute z-20 left-0 top-0 transition-all duration-300">
                                <BankCard
                                    key={banks[0].$id}
                                    account={banks[0]}
                                    userName={`${user.firstName} ${user.lastName}`}
                                    showBalance={false}
                                />
                            </div>

                            {banks[1] && (
                                <div className="absolute left-3 top-3 z-10 opacity-90 scale-[0.98]  hover:z-30 hover:scale-100 hover:opacity-100  transition-all duration-300 ease-in-out">
                                    <BankCard
                                        key={banks[1].$id}
                                        account={banks[1]}
                                        userName={`${user.firstName} ${user.lastName}`}
                                        showBalance={false}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}


            </section>
        </aside>
    )
}

export default RightSidebar