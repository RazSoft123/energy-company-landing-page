import solar_fil from './../assets/solar_fit.jpg';

export default function ServicesSection() {
    return (
        <section className="w-full px-[200px] py-[100px] flex justify-around gap-7">
            
            <div className="flex flex-col justify-around  flex-1/3">
                <div className='flex flex-col'>
                    <h3 className='text-4xl text-gray-400'><span className='text-black'>Trusted services,</span> for your <br /> various need</h3>
                    <a href="#" className='bg-green-500 inline-block w-fit text-white mt-8 py-3 px-5 rounded-4xl'>Get in touch</a>
                </div>
                <div className='grid grid-cols-2 gap-4 w-fit'>
                    <ServiceCard number='01' text="Solar panels for home" link="#" />
                    <ServiceCard number='02' text="Solar panels for industry" link="#" />
                    <ServiceCard number='03' text="Solar panels for chargers" link="#" />
                    <ServiceCard number='04' text="wind power generator" link="#" />
                </div>
            </div>
            <div className='w-[450px] overflow-hidden rounded-4xl flex-1/4'>
                <img src={solar_fil} alt="" />
            </div>
        </section>
    );
}

function ServiceCard({number, text, link}) {
    return (
        <div className='border-2 border-slate-300 max-w-[200px] p-4 rounded-2xl'>
            <span className='text-slate-300'>{number}</span>
            <p className='mb-2'>{text}</p>
            <a href={link} className='underline' >view details</a>
        </div>
    )
}