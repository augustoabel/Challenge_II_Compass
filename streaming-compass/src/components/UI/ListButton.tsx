import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import DoneIcon from '../../images/icons/done_black.png'

const ListButton = () => {
  const [tooltipContent, setTooltipContent] = useState('Adicionar à "assistir mais tarde"');
  const [checked, setChecked] = useState(false);
  const [add, setAdd] = useState("block");
  const [done, setDone] = useState("hidden");

  const handleOnClickList = () => {
    if(!checked){
      setTooltipContent('à "assistir mais tarde"');
      setAdd("hidden")
      setDone("block")
      setChecked(true)
    } else {
      setTooltipContent('Adicionar à "assistir mais tarde"');
      setAdd("block")
      setDone("hidden")
      setChecked(false)
    }
  }

  return (
    <div>
      <button
        data-tooltip-id="list-button"
        data-tooltip-content={tooltipContent}
        data-tooltip-place="top"
        data-tooltip-style="light"
        onClick={handleOnClickList}
        className="w-12 h-12 flex justify-center items-center text-white border-white/90 border border-solid rounded-full p-2 hover:bg-white hover:text-black hover:transition-opacity hover:delay-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className={add}
        >
          <path
            d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
            fill="currentColor"
          />
        </svg>
        <img 
        src={DoneIcon} 
        alt="Done Icon"
        className={done} 
        />
      </button>
      <Tooltip id="list-button" style={{ backgroundColor: "white", color: "black", fontWeight: "700"}} />
    </div>
  );
};

export default ListButton;
