import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = (
    { account, userName, showBalance = true }: CreditCardProps
) => {
    return (
        <div className='flex flex-col' >
            <Link href={'/'} className='bank-card' >
                <div className="bank-card_content">
                    <div>
                        <h1 className="text-[16px] font-semibold text-white">
                            {account.name || userName}
                        </h1>
                        <p className="text-[18px] font-semibold text-white mt-2">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>
                    <article className="flex flex-col gap-2 mt-9">
                        <div className="flex justify-between">
                            <h1 className='text-[13px] font-semibold' >
                                {userName}
                            </h1>
                            <h2 className='text-[15px] font-semibold' >
                                ** / **
                            </h2>
                        </div>
                        <p className='text-[15px] font-semibold tracking-[1.1px]'>
                            **** **** ****
                            <span className='text-[12px]' >
                                {account.mask}
                            </span>
                        </p>
                    </article>
                </div>

                <div className="bank-card_icon">
                    <Image
                        src='/icons/Paypass.svg'
                        alt='pay'
                        width={20}
                        height={20}
                    />
                    <Image
                        src={'/icons/mastercard.svg'}
                        width={40}
                        height={25}
                        alt='mastercard'                       
                        />
                </div>

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/icons/lines.svg"
                        alt="line"
                        fill className="object-cover"
                    />
                </div>
            </Link>
        </div>
    )
}

export default BankCard