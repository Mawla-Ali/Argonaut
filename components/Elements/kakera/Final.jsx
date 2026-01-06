import Tombol from "../Button/Bu";

const Akhir = () => {
  return (
    <div className="relative ">
      <div className="h-full pb-28 bg-slate-100 mt-6">
        <div className="flex justify-center">
          <h1 className="py-24 flex justify-center text-[#14C5DB] max-w-7xl text-center text-3xl md:text-5xl font-bold mx-2">Mulai Website Profesional Anda Hari Ini</h1>
        </div>
        <p className="flex justify-center -mt-18 mx-4 md:mx-auto max-w-3xl text-center md:text-[14px] text-[12px] ">
          Kami membantu berbagai jenis bisnis dari semua skala, mulai dari UMKM, startup, hingga perusahaan yang ingin memperkuat kehadiran digitalnya. Setiap website kami rancang secara strategis, dengan desain modern, struktur yang jelas,
          dan fokus pada tujuan bisnis agar dapat digunakan secara optimal oleh siapa pun yang ingin berkembang secara digital.
        </p>
        <p className="md:text-[18px] text-[14px] text-[#14C5DB] flex justify-center mt-5 font-bold">Gratis konsultasi & penawaran cepat via WhatsApp</p>
        <p className="text-center md:text-[16px] text-[12px] font-semibold">Klik tombol di bawah untuk mulai diskusi secepatnya</p>
        <div className="flex justify-center mt-3 ">
          <Tombol jen="a" hubung="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20pembuatan%20website">
            Konsultasi via WhatsApp
          </Tombol>
        </div>
      </div>
    </div>
  );
};

export default Akhir;
