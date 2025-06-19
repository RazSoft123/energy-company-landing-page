export default function QualitySection() {
    return (
        <section className="w-full flex bg-gray-200 flex-col justify-center items-center">
            <div className="mt-[100px] mb-[50px]">
                <h3 className="text-4xl text-gray-400"><span className="text-black">We offer quality</span>, with the <br/> best materials and service</h3>
            </div>
            <div className="grid grid-cols-3 gap-[1px] rounded-2xl overflow-hidden max-w-[80%] mb-[100px]">
                <QualityDiv header="Layred security" paragraph="With the layred sequrity, we ensure safety of every unit we provided" icon='' />
                <QualityDiv header="Quality control of each part" paragraph="Every unit we send is checked for every detail" icon='' />
                <QualityDiv header="Reliable customer service" paragraph="Our customer service is avilable 24 hour a week with qualified peoples" icon='' />
                <QualityDiv header="Maintenance manual book" paragraph="We provide a guide book that can be used to ensure maximum care" icon='' />
                <QualityDiv header="Delivered safely" paragraph="Every unit we send will arrive quickly and safely without any drama" icon='' />
                <QualityDiv header="Based on artifical intelligence" paragraph="You can control and view each unit from your phone, It's very easy to use. " icon='' />
            </div>
        </section>
    );
}

function QualityDiv({icon, paragraph, header}) {
    return (
        <div className="bg-white p-8">
            <div>{icon}</div>
            <h4 className="text-lg mb-2">{header}</h4>
            <p className="text-sm text-slate-800">{paragraph}</p>
        </div>
    )
}