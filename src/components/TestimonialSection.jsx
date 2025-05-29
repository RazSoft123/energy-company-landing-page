export default function TestimonialSection() {
    return (
        <section>
            <div>
                <h3>See how we solve <br/> problems, <span>right on target</span></h3>
            </div>
            <div>
                <TestimonialCard />
            </div>
        </section>
    )
}

function TestimonialCard() {
    return (
        <div>
            <div>
                <h3>Medtronic</h3>
                <p>We have used services form xurya for the most of our stations this is our stratgic step to continue to increse the number of solar panels uses for our stations, We are very stisfied with the services from Xurya</p>
                <a href="">View full review</a>

                <div>
                    <p>jennifer <span>CTO EV Medtronic</span></p>
                </div>
            </div>
            <div>
                <img src="null" alt="" />
            </div>
        </div>
    )
}