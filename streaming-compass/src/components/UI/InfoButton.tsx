import InfoIcon from "../../images/icons/icon-info.png";

const InfoButton = () => {
  return (
    <div 
    className="flex items-center justify-center text-white font-bold text-base gap-3 py-3.5 px-6 border-white/90 border border-solid rounded w-72 h-12 hover:bg-white hover:opacity-30 hover:text-black"
    >
      <img src={InfoIcon} alt="information icon" />
      MAIS INFORMAÇÕES
    </div>
  );
};

export default InfoButton;
