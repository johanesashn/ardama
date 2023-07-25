import { Link } from "react-router-dom"
import service1 from "/assets/service1.png"
import service2 from "/assets/service2.png"
import service3 from "/assets/service3.png"
import service4 from "/assets/service4.png"
import service5 from "/assets/service5.png"
import service6 from "/assets/service6.png"
import service7 from "/assets/service7.png"
import service8 from "/assets/service8.png"
import service9 from "/assets/service9.png"
import service10 from "/assets/service10.png"
import service11 from "/assets/service11.png"
import service12 from "/assets/service12.png"
import service13 from "/assets/service13.png"
import service14 from "/assets/service14.png"
import service15 from "/assets/service15.png"
import service16 from "/assets/service16.png"
import service17 from "/assets/service17.png"
import service18 from "/assets/service18.png"
import service19 from "/assets/service19.png"
import service20 from "/assets/service20.png"
import service21 from "/assets/service21.png"

export default function Services(){
    return (
        <div className="services" id="service">
            <div className="container-banner" data-aos="fade-right" data-aos-duration="500">SERVICES</div>
            <div className="services-content">
                <ul className="services-list">
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0">
                         <Link 
                            to={`services/Piping`}
                        >
                            Piping
                        </Link>
                    </li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
                         <Link 
                            to={`services/Electrical Instalation`}
                        >
                            Electrical Instalation
                        </Link>
                    </li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"> 
                         <Link 
                            to={`services/Civil Works`}
                        >
                            Civil Works
                        </Link>
                    </li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600">
                         <Link 
                            to={`services/Electrical Panel Instalation`}
                        >
                            Electrical Panel Instalation
                        </Link>
                    </li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800">
                         <Link 
                            to={`services/Maintenance Service`}
                        >
                            Maintenance Service
                        </Link>
                    </li>
                </ul>
                <div className="services-images">
                    <img src={service1} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service2} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600"/>
                    <img src={service3} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service4} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"/>
                    <img src={service5} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"/>
                    <img src={service6} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900"/>
                    <img src={service7} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service8} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service9} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service10} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service11} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0"/>
                    <img src={service12} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"/>
                    <img src={service13} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service14} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100"/>
                    <img src={service15} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service16} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"/>
                    <img src={service17} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service18} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service19} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"/>
                    <img src={service20} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"/>
                    <img src={service21} alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600"/>
                </div>
            </div>
        </div>
    )
}