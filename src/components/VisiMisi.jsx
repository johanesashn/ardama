import visimisi from "/assets/visimisi.png"

export default function VisiMisi(){
    return (
        <div className="visimisi">
            <img src={visimisi} alt="" className="visimisi-background"/>
            <div className="visi">
                <div className="container-banner home" data-aos="fade-right" data-aos-duration="500">VISI</div>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">Menjadi perusahaan jasa yang profesional dan mitra terpercaya dalam industri konstruksi.</p>
            </div>
            <div className="misi">
                <div className="container-banner home" data-aos="fade-right" data-aos-duration="500">MISI</div>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">Kepuasan customer sebagai komitmen utama perusahaan menempatkan mitra kerja sebagai bagian integral dari tim kerja membangun teknologi dan informasi yang baik guna mendukung perusahaan membangun kreatifitas, produktivitas dan produktivitas dan profesionalita SDM perusahaan memberikan nilai tambah bagi para pemegang saham.</p>
            </div>
        </div>
    )
}