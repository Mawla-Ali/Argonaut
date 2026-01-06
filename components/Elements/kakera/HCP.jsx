import Tombol from "../Button/Bu";

const starters = [
  {
    id: 1,
    img: "/Img/Pricing/respon.svg",
    desk: "Desain Responsif (Mobile, Tablet, dan Desktop) ",
  },
  {
    id: 2,
    img: "Img/Pricing/wa.svg",
    desk: "Form Kontak Langsung ke WhatsApp",
  },
  {
    id: 3,
    img: "Img/Pricing/page1.svg",
    desk: "Halaman Utama Terdiri dari Home, About, Services, Contact",
  },
  {
    id: 4,
    img: "Img/Pricing/map.svg",
    desk: "Integrasi Google Maps (Lokasi Perusahaan)",
  },
  {
    id: 5,
    img: "Img/Pricing/hosting.svg",
    desk: "Shared Hosting (6 Bulan)",
  },
  {
    id: 6,
    img: "Img/Pricing/ssl.svg",
    desk: "Free SSL",
  },
  {
    id: 7,
    img: "Img/Pricing/email.svg",
    desk: "1 Email Bisnis ",
  },
  {
    id: 8,
    img: "Img/Pricing/storage.svg",
    desk: "2 GB Disk Storage",
  },
  {
    id: 11,
    img: "Img/Pricing/rev.svg",
    desk: "2x Revisi Gratis",
  },
  {
    id: 9,
    img: "Img/Pricing/hammer.svg",
    desk: "Garansi Maintenance 15 Hari",
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
    img: "Img/Pricing/page1.svg",
    desk: "Hingga 5-7 Halaman (Home, About, Services, Portofolio, Galrei, Contact, FAQ)",
  },
  {
    id: 3,
    img: "Img/Pricing/galeri.svg",
    desk: "Galeri Visual Interaktif",
  },
  {
    id: 4,
    img: "Img/Pricing/wa.svg",
    desk: "Form Kontak dan Integrasi ke WhatsApp",
  },
  {
    id: 5,
    img: "Img/Pricing/hosting.svg",
    desk: "Hosting dan Domain 1 Tahun",
  },
  {
    id: 6,
    img: "Img/Pricing/email.svg",
    desk: "2 Email Bisnis",
  },
  {
    id: 7,
    img: "Img/Pricing/storage.svg",
    desk: "10 GB Disk Storage",
  },
  {
    id: 8,
    img: "Img/Pricing/seo.svg",
    desk: "Basic SEO On-Page",
  },
  {
    id: 9,
    img: "Img/Pricing/rev.svg",
    desk: "3x Revisi Gratis",
  },
  {
    id: 10,
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
    img: "Img/Pricing/page.svg",
    desk: "Hingga 8-10 Halaman (Termasuk Career, Blog, atau Request Khusus)",
  },
  {
    id: 3,
    img: "Img/Pricing/ig.svg",
    desk: "Integrasi Instagram Feed / Youtube Embed",
  },
  {
    id: 4,
    img: "Img/Pricing/mode.svg",
    desk: "Fitur Dark/Light Mode (Opsional)",
  },
  {
    id: 5,
    img: "Img/Pricing/bahasa.svg",
    desk: "Fitur Dua Bahasa (Inggris dan Indonesia)",
  },
  {
    id: 12,
    img: "Img/Pricing/req.svg",
    desk: "Request Fitur Tambahan",
  },
  {
    id: 6,
    img: "Img/Pricing/seo.svg",
    desk: "Speed Optimization",
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
const Company = (props) => {
  const { hubung, cincin, variant, jen } = props;
  return (
    <div className="relative ">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 place-items-center md:flex md:justify-center md:max-w-3/4 md:w-full md:-mt-20 md:gap-x-12 lg:flex lg:justify-center lg:max-w-7xl lg:w-full lg:gap-x-12 lg:-mt-[73px]">
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-11 md:pb-48 pb-24 drop-shadow-2xl ring-1 ring-slate-400 ">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Starter</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 2.500.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Cocok untuk bisnis yang baru mulai terjun ke dunia digital, dan ingin website profesional</p>
            <Hkal />
            <div className="flex justify-center  ">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Company%20Profile%20paket%20starter">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-11  md:pb-48 pb-24 drop-shadow-2xl ring-4 ring-[#1446DB]">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Growth</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 4.000.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Website rapi dan fungsional untuk kebutuhan bisnis yang profesional </p>
            <Hgrow />
            <div className="flex justify-center md:mt-16  lg:mt-10">
              <Tombol variant="b" jen="b" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Company%20Profile%20paket%20growth">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-full rounded-2xl mt-[88px] p-7 md:p-11  md:pb-48 pb-24 drop-shadow-2xl ring-1 ring-slate-400">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Premium</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 6.500.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Website terintegrasi untuk mendukung operasional dengan cara profesional</p>
            <Hpre />
            <div className="flex justify-center md:mt-4  lg:-mt-0.5">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Company%20Profile%20paket%20premium">
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
            <p className="mx-5 text-xs">{starter.desk}</p>
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
            <p className="mx-5 text-xs">{growth.desk}</p>
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
            <p className="mx-5 text-xs">{premium.desk}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Company;
