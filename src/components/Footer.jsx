export default function Footer() {
    return (
        <footer className="mt-5 bg-black text-white pt-28 px-28">
            <div className="flex">
                <div className="flex flex-col">
                    <h3 className="text-4xl mb-8">It's time to support zero pollution, <span className="text-slate-300">with renewable resources</span></h3>
                    <ul className="flex gap-8 w-full">
                        <li>Exprienced for more than 10 years</li>
                        <li>Support for the new technology</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-16">
                    By remembring the effectiveness and efficiency of electricity of technology labs, The labs of renewable application in many prcticals use in all industries. 
                    </p>
                    <a className="w-fit bg-green-500 px-8 py-4 rounded-4xl" href="">Get in touch</a>
                </div>
            </div>
            <div className="mt-18 mb-8">
                <nav className="flex w-full justify-between">
                    <div>Xurya</div>
                    <ul className="flex gap-8">
                        <li>Home</li>
                        <li>About us</li>
                        <li>features</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="flex gap-8">
                        <li>In</li>
                        <li>X</li>
                        <li>F</li>
                        <li>insta</li>
                    </ul>
                </nav>
            </div>
            <div><hr /></div>
            <div className="flex justify-between mt-16 pb-16">
                <p>© 2025 xurya inc. All rights reserved</p>
                <p className="flex gap-8">
                    <a href="#">Terms of service</a>
                    <a href="#">Privacy policy</a>
                </p>
            </div>
            
        </footer>
    )
}