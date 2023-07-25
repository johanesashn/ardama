import logo from "/logo.png"

export default function NavbarMini(){
    return (
        <nav>
            <div className="navbar-header">
                <img src={logo} alt="" className="navbar-img"/>
            </div>
        </nav>
    )
}