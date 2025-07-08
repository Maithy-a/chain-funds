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

                <div className="bank-card_content font-semibold text-white">
                    <div>
                        <h1 className="text-[17px] tracking-widest font-qurova mb-2 ">
                            Chainfunds
                        </h1>
                        <p className="text-[16px]">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>
                    <article className="flex flex-col gap-2 mt-9 text-[13px]">
                        <div className="flex justify-between">
                            <h1 className='text-[13.5px]' >
                                {userName}
                            </h1>
                            <h2>
                                •• / ••
                            </h2>
                        </div>
                        <p className='tracking-[1.2px] '> •••• •••• •••• <span>  {/* {account.mask} */}1234 </span></p>
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
                        height={20}
                        alt='mastercard'
                    />
                </div>

                {/* <div className="inset">
                    <Image
                        src="/gradient/Worldmap.svg"
                        alt="line"
                        fill className="object-cover opacity-20 "
                    />
                </div> */}
            </Link>

            {/* COPY */}

        </div>
    )
}

export default BankCard