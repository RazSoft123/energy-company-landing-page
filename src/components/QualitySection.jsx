export default function QualitySection() {
    return (
        <section>
            <h3>We offer quality, with the best materials and service</h3>
            <div>
                <QualityDiv header="Layred security" paragraph="paragraph is " icon='' />
                <QualityDiv header="Quality control of each part" paragraph="paragraph is " icon='' />
                <QualityDiv header="Reliable customer service" paragraph="paragraph is " icon='' />
                <QualityDiv header="Maintenance manual book" paragraph="paragraph is " icon='' />
                <QualityDiv header="Delivered safely" paragraph="paragraph is " icon='' />
                <QualityDiv header="Based on artifical intelligence" paragraph="paragraph is " icon='' />
            </div>
        </section>
    );
}

function QualityDiv({icon, paragraph, header}) {
    return (
        <div>
            <div>{icon}</div>
            <h4>{header}</h4>
            <p>{paragraph}</p>
        </div>
    )
}