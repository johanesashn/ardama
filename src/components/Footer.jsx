import house from "/assets/house.png"
import phone from "/assets/phone.png"

export default function Footer(){
    return (
        <footer>
            <div className="footer-contact">
                <img src={house}  alt="" />
                <div className="caption">
                    <p>Ruko Grande Cikarang Square</p>
                    <p>Blok B No.37 Cikarang - Bekasi</p>
                </div>
            </div>
            <div className="footer-contact">
                <img src={phone} alt="" />
                <div className="caption">
                    <p>Telp. (021) 29094395</p>
                    <p>Fax. (021) 29094395</p>
                </div>
            </div>
            <a href="mailto:johanesalbertosiahaan15092003@gmail.com" target="_blank" className="contact">Contact Us</a>
        </footer>
    )
}