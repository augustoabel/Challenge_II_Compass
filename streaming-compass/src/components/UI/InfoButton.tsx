import { useNavigate } from 'react-router-dom';
import InfoIcon from '../../images/icons/icon-info.png';

const InfoButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/InfoMovies');
  };
  return (
    <div
      className="flex items-center justify-center text-white font-bold text-base gap-3 py-3.5 px-6 border-white/90 border border-solid rounded w-72 h-12 hover:bg-white hover:opacity-30 hover:text-black cursor-pointer "
      onClick={handleClick}
    >
      <img src={InfoIcon} alt="information icon" />
      MAIS INFORMAÇÕES
    </div>
  );
};

export default InfoButton;
