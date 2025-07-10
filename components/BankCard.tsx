'use client'

import Image from 'next/image'
import Link from 'next/link'

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card relative">

        <div className="absolute inset-0 z-0 rounded-2xl bg-[url('/gradient/Worldmap.svg')] bg-cover bg-no-repeat opacity-30" />

        <div className="bank-card_content z-10 relative flex flex-col justify-between h-full">
          <div>
            <h1 className="text-sm font-medium tracking-widest uppercase font-qurova mb-4 text-white">
              CHAINFUNDS
            </h1>

            <p className="text-lg sm:text-xl tracking-widest font-semibold mb-6 text-white">
              •••• •••• ••••{' '}
              <span className="inline-block">{account.mask || '1234'}</span>
            </p>
          </div>

          <div className="flex items-end justify-between text-xs text-white">
            <div className="flex flex-col gap-0.5">
              <p className="uppercase text-[10px] opacity-70">Card holder</p>
              <p className="text-[13px] font-semibold">{userName}</p>
            </div>
            <div className="flex flex-col gap-0.5 text-right">
              <p className="uppercase text-[10px] opacity-70">Expires</p>
              <p className="text-[13px] font-semibold">02/30</p>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <Image
            src="/icons/visa.svg"
            alt="visa"
            width={40}
            height={15}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  )
}

export default BankCard
