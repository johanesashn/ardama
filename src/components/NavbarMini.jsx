import logo from "/logo.png"

export default function NavbarMini(){
    return (
        <nav>
            <div className="navbar-header">
                <img src={logo} alt="" className="navbar-img"/>
                <a href="mailto:johanesalbertosiahaan15092003@gmail.com" target="_blank" className="contact" data-aos="fade-left" data-aos-duration="500">Contact Us</a>
            </div>
        </nav>
    )
}