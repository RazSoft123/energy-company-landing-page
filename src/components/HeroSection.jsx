import './hero_section.css'

export default function HeroSection() {
    return (
        <section className="hero-section w-full h-dvh mt-2 flex border-2 items-center justify-between px-16">
            <div className='flex flex-col gap-5 text-white'>
                <p>#1 Energy provider in the world</p>
                <h1 className='text-8xl'>New Energy <br/>for the Future</h1>
                <div className='flex gap-8'>
                    <a className='border-b-2 pb-2 px-2' href="#">Get in touch</a>
                    <a className='border-b-2 pb-2 px-2' href="#">Our services</a>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <img src="project.jpg" alt="project image" />
                    <div className='flex gap-1'>
                        <span className='w-1 h-1 bg-white rounded-full'></span>
                        <span className='w-1 h-1 bg-white rounded-full'></span>
                        <span className='w-1 h-1 bg-white rounded-full'></span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <a href="#">arrow</a>
                    <p>Discover our recent project</p>
                </div>
            </div>

            <div className='absolute bg-white bottom-0 right-0 p-8 rounded-[30px]'>
                <div className='rev-border'></div>
                <div className='flex gap-4'>

                    <div className='w-[150px]'>
                        <span>6 mil</span>
                        <p>The company's anual net income</p>
                    </div>

                    <div className='w-[150px]'>
                        <span>315</span>
                        <p>Projects completed wordwide</p>
                    </div>

                    <div className='w-[150px]'>
                        <span>120K</span>
                        <p>employes in all parts of world</p>
                    </div>

                </div>
            </div>
        </section>
    )
}