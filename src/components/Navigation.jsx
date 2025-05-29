import './navigation.css'

export default function Navigation() {
    return (
        <div className="w-full navigation">
            <div>
                <span>Xurya</span>
            </div>
            <div>
                <ul className="flex gap-2">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="flex gap-2">
                <a href="#">Login</a>
                <a href="#">Get in touch</a>
            </div>
        </div>
    )
}