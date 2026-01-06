const styles = {
  ab: "hover:ring-sky-700 hover:bg-sky-200",
  b: "hover:ring-sky-700 hover:bg-[#1446DB]",
};
const jenis = {
  p: "bg-white",
  b: "bg-[#0284C7] text-white",
  a: "bg-[#4ADE80]",
};
const Tombol = (props) => {
  const { children, hubung, variant, jen, type, onClick, harga } = props;
  return (
    <div className="">
      <div className={`${jenis[jen]} ring-1 ${styles[variant]} ring-[#475569] border md:border-hidden max-w-2xl w-full drop-shadow-xl p-4 rounded max-h-xl h-full flex justify-center`}>
        <a href={hubung} className="">
          <button className={`font-bold `} type={type} onClick={onClick}>
            {children}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Tombol;
