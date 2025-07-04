'use client'
import CountUp from "react-countup"


const AnimatedCounter = (
    { amount }: { amount: number }

) => {
    return (
        <span className="w-full">
            <CountUp
                end={amount}
                duration={3.75}
                decimals={2}
                prefix="$"
            />
        </span>
    )
}

export default AnimatedCounter