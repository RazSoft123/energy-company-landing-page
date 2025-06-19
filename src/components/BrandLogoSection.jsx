export default function BrandLogoSection() {
    
    return (
        <section className="flex flex-col w-full px-28 py-4">
            <div className="flex gap-16 items-center justify-center mt-16">
                <h3 className="w-1/2 text-5xl">Focusing on quality, <span className="text-gray-500">we maintain customer trust</span></h3>
                <p className="w-1/2 text-xl text-gray-700"> We ensure that every installation we build has strict quality checks. Sustainbale for an environmentally friendly and renewable future</p>
            </div>
            <div className="flex gap-1 w-full justify-around items-center mt-16 mb-24">
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
        <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center bg-gray-200">
            { logo }
        </div>
    );
}