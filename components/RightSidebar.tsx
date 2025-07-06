import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className="right-sidebar no-scrollbar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-semibold text-blue-500">{user.firstName[0]}</span>
                    </div>

                    <div className="profile-details">
                        <h1 className='profile-name'>
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="profile-email">
                            {user.email}
                        </p>
                    </div>
                </div>
            </section>



            <section className='banks'>
                <div className="flex w-full justify-between">
                    <span className="text-[16px] font-semibold text-gray-500  " >
                        My Banks
                    </span>
                    <Link href={'/'} className='flex gap-2'>
                        <IconPlus
                            stroke={1.8}
                            size={20}
                            className=' text-gray-500' />
                        <h2 className=' text-[14px] font-semibold text-gray-500' >Add Bank</h2>
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
                                <div className="absolute left-4 top-4 z-10 opacity-90 scale-[0.98]  hover:z-30 hover:scale-100 hover:opacity-100  transition-all duration-300 ease-in-out">
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