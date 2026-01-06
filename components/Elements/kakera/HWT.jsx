import Tombol from "../Button/Bu";

const starters = [
  {
    id: 1,
    img: "/Img/Pricing/p12em.svg",
    desk: "1 Halaman Landing Page (scroll panjang)",
  },
  {
    id: 2,
    img: "Img/Pricing/respon.svg",
    desk: "Desain Responsif (Mobile, Tablet, dan Desktop)",
  },
  {
    id: 3,
    img: "Img/Pricing/page1.svg",
    desk: "Struktur Website Dasar (Home, About, Tour Packages, Contact)",
  },
  {
    id: 4,
    img: "Img/Pricing/hosting.svg",
    desk: "Shared Hosting (6 Bulan)",
  },
  {
    id: 5,
    img: "Img/Pricing/email.svg",
    desk: "1 Email Bisnis",
  },
  {
    id: 6,
    img: "Img/Pricing/storage.svg",
    desk: "2 GB Disk Storage",
  },
  {
    id: 7,
    img: "Img/Pricing/ssl.svg",
    desk: "Free SSL",
  },
  {
    id: 8,
    img: "Img/Pricing/hammer.svg",
    desk: "Garansi Maintenance 15 Hari",
  },
  {
    id: 11,
    img: "Img/Pricing/wa.svg",
    desk: "Direct WhatsApp Chat",
  },
  {
    id: 9,
    img: "Img/Pricing/rev.svg",
    desk: "1x Revisi Gratis",
  },
  {
    id: 10,
    img: "Img/Pricing/video.svg",
    desk: "Video Panduan Akses Website",
  },
];
const growth = [
  {
    id: 1,
    img: "/Img/Pricing/check.svg",
    desk: "Semua yang ada di Starter, plus:",
  },
  {
    id: 2,
    img: "Img/Pricing/form.svg",
    desk: "Hingga 5-7 Halaman Utama (Home, About Us, Tour Packages, Galerry, Blog, Contact, Testimoni)",
  },
  {
    id: 3,
    img: "Img/Pricing/page.svg",
    desk: "Halaman Detail untuk Setiap Paket Wisata",
  },
  {
    id: 4,
    img: "Img/Pricing/wa.svg",
    desk: "CTA di Setiap Halaman Paket",
  },
  {
    id: 5,
    img: "Img/Pricing/galeri.svg",
    desk: "Galeri Foto Tiap Paket",
  },
  {
    id: 6,
    img: "Img/Pricing/check.svg",
    desk: "Desain Interaktif ",
  },
  {
    id: 7,
    img: "Img/Pricing/filter.svg",
    desk: "Tambahan Fitur Filter atau Fitur Search",
  },
  {
    id: 8,
    img: "Img/Pricing/seo.svg",
    desk: "Basic SEO On-Page",
  },
  {
    id: 13,
    img: "Img/Pricing/hosting.svg",
    desk: "Hosting dan Domain 1 Tahun",
  },
  {
    id: 9,
    img: "Img/Pricing/email.svg",
    desk: "2 Email Bisnis",
  },
  {
    id: 10,
    img: "Img/Pricing/storage.svg",
    desk: "10 GB Disk Storage",
  },
  {
    id: 11,
    img: "Img/Pricing/rev.svg",
    desk: "3x Revisi Gratis",
  },
  {
    id: 12,
    img: "Img/Pricing/hammer.svg",
    desk: "Garansi Maintenance 30 Hari",
  },
];
const premium = [
  {
    id: 1,
    img: "/Img/Pricing/check.svg",
    desk: "Semua yang ada di Growth, plus:",
  },
  {
    id: 2,
    img: "Img/Pricing/bayar.svg",
    desk: "Integrasi Payment Gateway",
  },
  {
    id: 3,
    img: "Img/Pricing/book.svg",
    desk: "Fitur Book dan Bayar di Setiap Halaman Paket",
  },
  {
    id: 4,
    img: "Img/Pricing/orang.svg",
    desk: "Sistem Booking Lengkap (Tanggal, Jumlah Peserta)",
  },
  {
    id: 5,
    img: "Img/Pricing/kalender.svg",
    desk: "Fitur Kalender Jadwal Ketersediaan",
  },
  {
    id: 6,
    img: "Img/Pricing/excel.svg",
    desk: "Export Data Excel",
  },
  {
    id: 7,
    img: "Img/Pricing/email.svg",
    desk: "5 email bisnis",
  },
  {
    id: 8,
    img: "Img/Pricing/storage.svg",
    desk: "50 GB Disk Storage",
  },
  {
    id: 9,
    img: "Img/Pricing/bahasa.svg",
    desk: "Fitur Dua Bahasa (Inggris dan Indonesia)",
  },
  {
    id: 10,
    img: "Img/Pricing/rev.svg",
    desk: "5x Revisi Gratis",
  },
  {
    id: 11,
    img: "Img/Pricing/hammer.svg",
    desk: "Garansi Maintenance 45 Hari",
  },
];
const Travel = (props) => {
  const { hubung, cincin, variant, jen } = props;
  return (
    <div className="relative ">
      <div className="flex justify-center md:-mt-20">
        <div className="grid grid-cols-1 place-items-center md:flex md:justify-center md:max-w-3/4 md:w-full md:-mt-3.5 md:gap-x-12 lg:flex lg:justify-center lg:max-w-7xl lg:w-full lg:gap-x-12 lg:mt-0.5">
          <div className="max-h-5/6 h-full bg-[#ffffff] max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-10  md:pb-48 pb-24 drop-shadow-2xl ring-1 ring-slate-400">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Starter</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 2.500.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Cocok untuk bisnis travel yang baru mulai terjun ke dunia digital, dan ingin website profesional</p>
            <Hkal />
            <div className="flex justify-center md:mt-40 lg:mt-18">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Travel%20&%20Tour%20paket%20starter">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-[#ffffff] max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-10  md:pb-48 pb-24 drop-shadow-2xl ring-4 ring-[#1446DB]">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Growth</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 4.750.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Website rapi dan fungsional untuk kebutuhan travel yang profesional </p>
            <Hgrow />
            <div className="flex justify-center md: md:mt-12 lg:-mt-0.5">
              <Tombol variant="b" jen="b" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Travel%20&%20Tour%20paket%20growth">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-[#ffffff] max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-10  md:pb-48 pb-24 drop-shadow-2xl ring-1 ring-slate-400 ">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Premium</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 11.500.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Website terintegrasi untuk mendukung operasional dengan cara profesional</p>
            <Hpre />
            <div className="flex justify-center md:mt-62 md: lg:mt-18">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Travel%20&%20Tour%20paket%20premium">
                Free Consult
              </Tombol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hkal = () => {
  return (
    <div className="grid grid-cols-1 pb-9">
      {starters.map((starter) => (
        <ul className="" key={starter.id}>
          <li className="flex items-center border-b-2 py-2 ">
            <img src={starter.img} alt="" className="" />
            <p className="mx-5 text-[12px]">{starter.desk}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
const Hgrow = () => {
  return (
    <div className="grid pb-9">
      {growth.map((growth) => (
        <ul className="" key={growth.id}>
          <li className="flex items-center border-b-2 py-2 ">
            <img src={growth.img} alt="" className="" />
            <p className="mx-5 text-[12px]">{growth.desk}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
const Hpre = () => {
  return (
    <div className="grid pb-9">
      {premium.map((premium) => (
        <ul className="" key={premium.id}>
          <li className="flex items-center border-b-2 py-2 ">
            <img src={premium.img} alt="" className="" />
            <p className="mx-5 text-[12px]">{premium.desk}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Travel;
