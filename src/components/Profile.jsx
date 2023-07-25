import profile from "/assets/profile.png"

export default function Profile(){
    return (
        <div className="profile" id="about">
            <div className="container-banner home" data-aos="fade-right" data-aos-duration="500">PROFILE</div>
            <div className="profile-content">
                <div className="profile-caption">
                    <p data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">PT Ardama Mitra Perkasa telah berdiri sejak tahun 2005 yang bergerak di bidang Kontraktor Civil, Mechanical, dan Electrical. Perusaahaan kami berdiri dengan semangat "Profesionalisme, unggul dalam bidang mekanikal dan elektrikal untuk mencapat kepuasan Customer". Penerapan cara kerja dan pelayanan secara profesional dan tanggung jawab yang tinggi, kami menjamin akan tercapainya hasil kerja yang berkualitas maksimal, efisien, dan tepat waktu.</p>
                    <p data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">Dalam upaya di atas, peralatan, material atau komponen yang kami pergunakan untuk instalasi dan konstruksi pekerjaan mekanikal dan elektrikal selalu berdasarkan seleksi yang memenuhi standar kualitas di Indonesia (SII) atau bahkan Standar Internasional seperti IEC, JIS, JEM, VDE, dan ANSI.</p>
                </div>
                <img src={profile} alt="" data-aos="fade-left" data-aos-duration="700" data-aos-delay="0"/>
            </div>
        </div>
    )
}