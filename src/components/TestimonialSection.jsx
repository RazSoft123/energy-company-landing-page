import solar_review from './../assets/solar_review.jpg';

export default function TestimonialSection() {
    return (
        <section className="w-full my-8">
            <div className="w-full flex items-center justify-center mb-16">
                <h3 className="text-center text-4xl">See how we solve <br/> problems, <span className="text-gray-400">right on target</span></h3>
            </div>
            <div className="w-full flex items-center justify-center p-8">
                <TestimonialCard />
            </div>
        </section>
    )
}

function TestimonialCard() {
    return (
        <div className="w-[70%] bg-gray-300 rounded-xl flex p-3 gap-8">
            <div className='p-8 flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    <h3 className="font-bold text-xl">Medtronic</h3>
                    <p>We have used services form xurya for the most of our stations this is our stratgic step to continue to increse the number of solar panels uses for our stations, We are very stisfied with the services from Xurya</p>
                    <a className="w-fit px-4 py-2 bg-green-500 rounded-4xl text-gray-200 text-sm" href="">View full review</a>
                </div>
                

                <div>
                    <p className='text-black font-bold'>jennifer - <span className='text-slate-100'>CTO EV Medtronic</span></p>
                </div>
            </div>
            <div className='rounded-xl overflow-hidden'>
                <img src={solar_review} alt="" />
            </div>
        </div>
    )
}