export default function ServicesSection() {
    return (
        <section>
            <div>
                <img src="null" alt="" />
            </div>
            <div>
                <div>
                    <h3>Trusted services, for your various need</h3>
                    <a href="">Get in touch</a>
                </div>
                <div>
                    <ServiceCard number='01' text="Solar panels for home" link="#" />
                    <ServiceCard number='02' text="Solar panels for industry" link="#" />
                    <ServiceCard number='03' text="Solar panels for chargers" link="#" />
                    <ServiceCard number='04' text="wind power generator" link="#" />
                </div>
            </div>
        </section>
    );
}

function ServiceCard({number, text, link}) {
    return (
        <div>
            <span>{number}</span>
            <p>{text}</p>
            <a href={link} >view details</a>
        </div>
    )
}