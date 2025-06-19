import './hero_section.css'
import project_img from './../assets/project.jpg'

export default function HeroSection() {
    return (
        <section className="hero-section w-full h-dvh mt-2 flex  items-center justify-between px-16">
            <div className='flex flex-col gap-5 text-white'>
                <p>#1 Energy provider in the world</p>
                <h1 className='text-8xl'>New Energy <br/>for the Future</h1>
                <div className='flex gap-8'>
                    <a className='border-b-2 pb-2 px-2' href="#">Get in touch</a>
                    <a className='border-b-2 pb-2 px-2' href="#">Our services</a>
                </div>
            </div>
            <div className='absolute right-16 top-24 bg-white/10 backdrop-blur-sm p-4 rounded-xl'>
                <div className='flex justify-between w-[300px]'>
                    <div className='flex justify-between w-full'>
                        <div className='w-[200px] h-[200px] overflow-hidden rounded-2xl'>
                            <img src={project_img} alt="project image" />
                        </div>
                        <div className='flex gap-1 w-fit'>
                            <span className='w-1 h-1 bg-white rounded-full'></span>
                            <span className='w-1 h-1 bg-white rounded-full'></span>
                            <span className='w-1 h-1 bg-white rounded-full'></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-8 text-white'>
                    <a className='border border-white rounded-full w-fit h-fit p-4' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                    <p>Discover our <br/> recent project</p>
                </div>
            </div>

            <div className='absolute bg-white bottom-0 right-0 p-8 rounded-[30px]'>
                <div className='rev-border'></div>
                <div className='rev-border-2'></div>
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