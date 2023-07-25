import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import back from "/assets/back.png"
import NavbarMini from "./NavbarMini";

// images
import Piping1 from "/assets/Piping1.png"
import Piping2 from "/assets/Piping2.png"
import Piping3 from "/assets/Piping3.png"
import ElectricalInstalation1 from "/assets/Electrical Instalation1.png"
import ElectricalInstalation2 from "/assets/Electrical Instalation2.png"
import ElectricalInstalation3 from "/assets/Electrical Instalation3.png"
import CivilWorks1 from "/assets/Civil Works1.png"
import CivilWorks2 from "/assets/Civil Works2.png"
import CivilWorks3 from "/assets/Civil Works3.png"
import ElectricalPanelInstalation1 from "/assets/Electrical Panel Instalation1.png"
import ElectricalPanelInstalation2 from "/assets/Electrical Panel Instalation2.png"
import ElectricalPanelInstalation3 from "/assets/Electrical Panel Instalation3.png"
import MaintenanceService1 from "/assets/Maintenance Service1.png"
import MaintenanceService2 from "/assets/Maintenance Service2.png"
import MaintenanceService3 from "/assets/Maintenance Service3.png"

export default function Service(){
    const { service } = useParams();
    let paragraph = ""
    let images = []

    useEffect(() => {
        window.scrollTo({
            top: 0, 
            behavior: "instant"
          })
    }, [])

    if (service === "Piping"){
        paragraph = "adalah system pemipaan yang mengalirkan fluida dari satu atau beberapa peralatan (ekuipment) pada suatu fasilitas pengolahan. Karena untuk diolah dalam satu fasilitas yang mana letak ekuipmetnya tidak berjauhan, maka pipa yang menghubungkan pun tidak terlalu panjang."
        images = [Piping1, Piping2, Piping3]
    } else if (service === "Electrical Instalation"){
        paragraph = "adalah jaringan perlengkapan yang membangkitkan, memakai, mengubah, mengatur, mengalihkan, mengumpulkan atau membagikan tenaga listrik pada sebuah bangunan."
        images = [ElectricalInstalation1, ElectricalInstalation2, ElectricalInstalation3]
    } else if (service === "Civil Works"){
        paragraph = "adalah penyedia jasa bidang pekerjaan sipil biasa disebut jasa konstruksi sipil. Beberapa contoh dari bidang pekerjaan sipil yaitu pembuatan jaringan pengairan atau prasarana sumber daya air, geoteknik, struktur bangunan gedung, konstruksi pabrik dan tambang termasuk perawatannya, dan pekerjaan penghancuran bangunan (demolition)."
        images = [CivilWorks1, CivilWorks2, CivilWorks3]
    } else if (service === "Electrical Panel Instalation"){
        paragraph = "panel listrik (juga dikenal sebagai panel servis, kotak pemutus, atau kotak pemutus arus) memastikan bahwa Anda dapat menggunakan listrik dengan cara yang aman, efektif, dan efisien. Ini terutama berlaku untuk rumah yang masih menggunakan kotak sekering lama. Teknisi listrik kami membantu."
        images = [ElectricalPanelInstalation1, ElectricalPanelInstalation2, ElectricalPanelInstalation3]
    } else if (service === "Maintenance Service"){
        paragraph = "panel listrik (juga dikenal sebagai panel servis, kotak pemutus, atau kotak pemutus arus) memastikan bahwa Anda dapat menggunakan listrik dengan cara yang aman, efektif, dan efisien. Ini terutama berlaku untuk rumah yang masih menggunakan kotak sekering lama. Teknisi listrik kami membantu."
        images = [MaintenanceService1, MaintenanceService2, MaintenanceService3]
    }

    return (
        <div className="service-container">
            <NavbarMini/>
            <div className="service-header">
                <Link to={`/#service`}>
                    <div href="" className="container-banner service" data-aos="fade-right" data-aos-duration="500"><img src={back} alt="" /></div>
                </Link>
                <p className="container-caption" data-aos="zoom-in" data-aos-duration="500"><span className="title">{service}</span> {paragraph}</p>
            </div>
            <div className="images">
                <img src={images[0]} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0"/>
                <img src={images[1]} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"/>
                <img src={images[2]} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"/>
            </div>
        </div>
    )
}