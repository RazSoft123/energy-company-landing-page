export default function BrandLogoSection() {
    
    return (
        <section>
            <div>
                <h3>Focusing on quality, <span>we maintain customer trust</span></h3>
                <p>We ensure that every installation we build has strict quality checks. Sustainbale for an environmentally friendly and renewable future</p>
            </div>
            <div>
                <BrandLogo logo="TREND" />
                <BrandLogo logo="Telia Cygate" />
                <BrandLogo logo="Business" />
                <BrandLogo logo="headspace" />
                <BrandLogo logo="Medtronic" />
            </div>
        </section>
    )
}

function BrandLogo({logo}) {
    return (
        <div>
            { logo }
        </div>
    );
}