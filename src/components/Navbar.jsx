import image from "/assets/navLogo.png"

export default function Navbar(){
    return (
        <nav>
            <div className="navbar-header">
                <img src={image} alt="" className="navbar-img"/>
                <a href="mailto:ardama.amp@gmail.com" target="_blank" className="contact" data-aos="fade-left" data-aos-duration="500">Contact Us</a>
            </div>
            <ul className="navbar-list">
                <li data-aos="zoom-out" data-aos-duration="500" data-aos-delay="0"><a href="#">Home</a></li>
                <li data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300"><a href="#about">About Us</a></li>
                <li data-aos="zoom-out" data-aos-duration="500" data-aos-delay="600"><a href="#service">Service</a></li>
            </ul>
        </nav>
    )
}