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
    desk: "Struktur Landing Page Dasar (Hero, About, Service, CTA)",
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
    desk: "Garansi Maintenance 10 Hari",
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
  {
    id: 11,
    img: "Img/Pricing/wa.svg",
    desk: "Direct WhatsApp Chat",
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
    desk: "Desain Visual Lebih Kompleks (Form atau Galeri)",
  },
  {
    id: 3,
    img: "Img/Pricing/mode.svg",
    desk: "Desain Dark atau Light Mode (Optional)",
  },
  {
    id: 4,
    img: "Img/Pricing/social.svg",
    desk: "Direct Social Media",
  },
  {
    id: 5,
    img: "Img/Pricing/email.svg",
    desk: "5 Email Bisnis",
  },
  {
    id: 6,
    img: "Img/Pricing/storage.svg",
    desk: "50 GB Disk Storage",
  },
  {
    id: 7,
    img: "Img/Pricing/seo.svg",
    desk: "Basic SEO On-Page",
  },
  {
    id: 8,
    img: "Img/Pricing/section.svg",
    desk: "Gratis 1 Section Tambahan (Testimoni / Keunggulan)",
  },
  {
    id: 9,
    img: "Img/Pricing/hosting.svg",
    desk: "Hosting dan Domain 1 tahun",
  },
  {
    id: 10,
    img: "Img/Pricing/rev.svg",
    desk: "3x Revisi Gratis",
  },
  {
    id: 11,
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
    img: "Img/Pricing/check.svg",
    desk: "Desain Interaktif (Animated Scroll, Parallax, dll)",
  },
  {
    id: 3,
    img: "Img/Pricing/bahasa.svg",
    desk: "Penggunaan 2 bahasa (Inggris dan Indonesia)",
  },
  {
    id: 4,
    img: "Img/Pricing/req.svg",
    desk: "Request Fitur Khusus (Popup, Fade in,Bouncing, dll)",
  },
  {
    id: 5,
    img: "Img/Pricing/section.svg",
    desk: "Up to 2 Halaman Tambahan (Testimoni / Keunggulan / FAQ)",
  },
  {
    id: 6,
    img: "Img/Pricing/rev.svg",
    desk: "5x Revisi Gratis",
  },
  {
    id: 7,
    img: "Img/Pricing/hammer.svg",
    desk: "Garansi Maintenance 45 Hari",
  },
];
const Hlp = (props) => {
  const { hubung, cincin, variant, jen } = props;
  return (
    <div className="relative ">
      <div className="flex justify-center md:-mt-18">
        <div className="grid grid-cols-1 place-items-center md:flex md:justify-center md:max-w-3/4 md:w-full md:gap-x-12 lg:flex lg:justify-center lg:max-w-7xl lg:w-full lg:gap-x-12 lg:-mt-1">
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-11 md:pb-48 pb-24 drop-shadow-2xl lg:max-w-xl lg:w-full ring-1 ring-slate-400 ">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Starter</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 1.500.000</h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Cocok untuk bisnis baru yang ingin mulai tampil digital dengan landing page profesional</p>
            <Hkal />
            <div className="flex justify-center md:-mt-3 lg:mt-3">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Landing%20Page%20paket%20starter">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-11 md:pb-24 pb-24 drop-shadow-2xl ring-4 lg:max-w-7xl lg:w-full ring-[#1446DB]">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Growth</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 2.750.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Cocok untuk kamu yang ingin tampil lebih profesional dengan fitur yang melimpah </p>
            <Hgrow />
            <div className="flex justify-center md:mt-4 lg:mt-4">
              <Tombol variant="b" jen="b" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Landing%20Page%20paket%20growth">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-11 md:pb-24 pb-24 drop-shadow-2xl ring-1 lg:max-w-7xl lg:w-full ring-slate-400 ">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Premium</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 3.500.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Solusi terima beres, untuk kamu yang ingin hasil maksimal tanpa stress</p>
            <Hpre />
            <div className="flex justify-center pt-36 md:-mt-2 lg:mt-0.5">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Landing%20Page%20paket%20premium">
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
    <div className="grid pb-9">
      {starters.map((starter) => (
        <ul className="" key={starter.id}>
          <li className="flex items-center border-b-2 py-2 ">
            <img src={starter.img} alt="" className="" />
            <p className="mx-5 text-xs lg:text-[15px]">{starter.desk}</p>
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
            <p className="mx-5 text-xs lg:text-[15px]">{growth.desk}</p>
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
            <p className="mx-5 text-xs lg:text-[15px]">{premium.desk}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Hlp;
