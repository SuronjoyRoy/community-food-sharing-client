import CountUp from "react-countup";

const CoutUp = () => {
    return (
        <div className="py-5">
            <div className='max-w-6xl mx-auto text-black p-12 flex justify-around border-2 border-green-500 mb-12 rounded-lg'>
                <div className='flex flex-col items-center justify-center text-center space-y-5'>
                    <div className='text-4xl font-bold'><CountUp start={1} end={100} duration={7} delay={1}></CountUp> k+</div>
                    <span className='text-lg font-semibold'>Completed Food Supply</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center space-y-5'>
                    <div className='text-4xl font-bold'><CountUp start={1} end={500} duration={7} delay={1}></CountUp> k+</div>
                    <span className='text-lg font-semibold'>Worldwide Food Donate</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center space-y-5'>
                    <div className='text-4xl font-bold'><CountUp start={1} end={600} duration={7} delay={1}></CountUp> k+</div>
                    <span className='text-lg font-semibold'>Dollar Payout</span>
                </div>

            </div>
        </div>
    );
};

export default CoutUp;