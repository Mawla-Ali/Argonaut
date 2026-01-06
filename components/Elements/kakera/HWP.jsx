import Tombol from "../Button/Bu";

const starters = [
  {
    id: 1,
    img: "/Img/Pricing/respon.svg",
    desk: "Satu Halaman Undangan Panjang",
  },
  {
    id: 2,
    img: "Img/Pricing/wa.svg",
    desk: "Desain Responsif",
  },
  {
    id: 3,
    img: "Img/Pricing/page1.svg",
    desk: "Struktur Halaman Dasar (Home, Story, Tanggal Acara)",
  },
  {
    id: 4,
    img: "Img/Pricing/text.svg",
    desk: "Teks Cerita Singkat",
  },
  {
    id: 5,
    img: "Img/Pricing/kalender.svg",
    desk: "Info Acara (Tanggal, Waktu, Tempat)",
  },
  {
    id: 6,
    img: "Img/Pricing/ssl.svg",
    desk: "Free SSL",
  },
  {
    id: 7,
    img: "Img/Pricing/hosting.svg",
    desk: "Shared Hosting 1 Bulan",
  },
  {
    id: 8,
    img: "Img/Pricing/rev.svg",
    desk: "2x Revisi Gratis",
  },
  {
    id: 9,
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
    desk: "4 Section Utama (Home, Story, Event, Gallery)",
  },
  {
    id: 4,
    img: "Img/Pricing/buku.svg",
    desk: "Guestbook (Tamu Bisa Tinggalkan Pesan)",
  },
  {
    id: 10,
    img: "Img/Pricing/mode.svg",
    desk: "Fitur Dark/Light Mode (Opsional)",
  },
  {
    id: 5,
    img: "Img/Pricing/alarm.svg",
    desk: "Countdown Timer ke Hari H",
  },
  {
    id: 6,
    img: "Img/Pricing/slider.svg",
    desk: "Slider Galeri Foto",
  },
  {
    id: 7,
    img: "Img/Pricing/lagu.svg",
    desk: "Musik Latar",
  },
  {
    id: 11,
    img: "Img/Pricing/map.svg",
    desk: "Integrasi Google Maps Sebagai Penunjuk Arah",
  },
  {
    id: 8,
    img: "Img/Pricing/nav.svg",
    desk: "Anchor Navigation (Scroll ke Section)",
  },
  {
    id: 9,
    img: "Img/Pricing/rev.svg",
    desk: "3x Revisi Gratis",
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
    desk: "Page Galeri Lebih Banyak",
  },
  {
    id: 9,
    img: "Img/Pricing/bayar.svg",
    desk: "Integrasi Payment Gateway",
  },
  {
    id: 3,
    img: "Img/Pricing/video.svg",
    desk: "RSVP Lengkap (Nama, Jumlah Tamu, Pesan)",
  },
  {
    id: 12,
    img: "Img/Pricing/excel.svg",
    desk: "RSVP yang Terintegrasi Excel/Google Sheet",
  },
  {
    id: 8,
    img: "Img/Pricing/req.svg",
    desk: "Request Fitur Khusus (PopUp, Bouncing, Fade In/Out, dll)",
  },
  {
    id: 5,
    img: "Img/Pricing/bahasa.svg",
    desk: "Fitur Dua Bahasa (EN & ID)",
  },
  {
    id: 6,
    img: "Img/Pricing/seo.svg",
    desk: "Basic SEO",
  },
  {
    id: 7,
    img: "Img/Pricing/email.svg",
    desk: "5x Revisi Gratis",
  },
];
const Rabi = (props) => {
  const { hubung, cincin, variant, jen } = props;
  return (
    <div className="relative ">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 place-items-center md:flex md:justify-center md:max-w-3/4 md:w-full md:-mt-18 md:gap-x-12 lg:flex lg:justify-center lg:max-w-7xl lg:w-full lg:gap-x-12 lg:-mt-18">
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-[525px] rounded-2xl mt-[88px] p-7 md:p-11 md:pb-48 pb-24 drop-shadow-2xl lg:max-w-xl lg:w-full ring-1 ring-slate-400 ">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Starter</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 1.000.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Undangan digital sederhana untuk berbagi kabar bahagia</p>
            <Hkal />
            <div className="flex justify-center md:mt-32 lg:mt-24">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Undangan%20Pernikahan%20paket%20starter">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-[525px] rounded-2xl mt-[88px] p-7 md:p-11 md:pb-48 pb-24 drop-shadow-2xl lg:max-w-xl lg:w-full ring-4 ring-[#1446DB]">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Growth</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 2.500.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Undangan Interaktif dengan Sentuhan Personal dan Cerita Cinta</p>
            <Hgrow />
            <div className="flex justify-center md:mt-4 lg:-mt-px ">
              <Tombol variant="b" jen="b" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Undangan%20Pernikahan%20paket%20growth">
                Free Consult
              </Tombol>
            </div>
          </div>
          <div className="max-h-5/6 h-full bg-white max-w-11/12 w-[525px] rounded-2xl mt-[88px] p-7 md:p-11 md:pb-48 pb-24 drop-shadow-2xl lg:max-w-xl lg:w-full ring-1 ring-slate-400 ">
            <h1 className="flex justify-center font-bold text-4xl text-slate-800 py-3">Premium</h1>
            <h2 className="text-4xl flex justify-center font-bold text-slate-800 ">Rp 3.000.000 </h2>
            <p className=" text-slate-500 text-xs justify-center flex py-6">Undangan digital eksklusif untuk momen sekali seumur hidup</p>
            <Hpre />
            <div className="flex justify-center md:mt-9 lg:mt-10">
              <Tombol variant="ab" jen="p" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website%20Undangan%20Pernikahan%20paket%20premium">
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
export default Rabi;
