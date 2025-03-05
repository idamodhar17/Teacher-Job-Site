import React from 'react'
import CountUp from 'react-countup'

export default function Admin() {
    return (
        <>
            <section className="red-hat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-2 items-center gap-20">
                    <div className="w-full bg-gray-400 flex justify-center items-center flex-col gap-3 text-white py-20 rounded-3xl font-semiboldbold ">
                        <p className="text-5xl font-bold">
                            <CountUp end={1000} duration={2} delay={0.5} />+
                        </p>
                        <p className="text-xl">Registered Schools</p>
                    </div>

                    <div className="w-full bg-gray-400 flex justify-center items-center flex-col gap-3 text-white py-20 rounded-3xl font-semiboldbold ">
                        <p className="text-5xl font-bold">
                            <CountUp end={100} duration={2} delay={0.5} />+
                        </p>
                        <p className="text-xl">Registered Teacher</p>
                    </div>

                    <div className="w-full bg-gray-400 flex justify-center items-center flex-col gap-3 text-white py-20 rounded-3xl font-semiboldbold ">
                        <p className="text-5xl font-bold">
                            <CountUp end={500} duration={2} delay={0.5} />+
                        </p>
                        <p className="text-xl">This many people recruitment from this platform</p>
                    </div>

                </div>
            </section>
        </>
    )
}
