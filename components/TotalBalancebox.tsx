import AnimatedCounter from '@/components/AnimatedCounter'
import DoughnutChart from '@/components/DoughnutChart'

const TotalBalancebox = ({
    accounts = [],
    totalBanks,
    totalCurentBalance,
}: TotalBalanceBoxProps) => {

    return (
        <section className='total-balance' >
            <div className="total-balance-chart">
                < DoughnutChart 
                accounts={accounts}
                />
            </div>

            <div className="flex flex-col gap-6 ">
                <h2 className="header-2">
                    Bank Acounts: {totalBanks}
                </h2>
                <div className='flex flex-col gap-2' >
                    <p className="total-balance-label">
                        Total Current Balance:
                    </p>
                    <p className='total-balance-amount flex-center gap-2' >
                        <AnimatedCounter
                            amount={totalCurentBalance}
                        />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TotalBalancebox