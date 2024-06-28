import PlayIcon from '../../images/icons/play-icon.png';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const WatchButton = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const videoUrl = 'https://www.youtube.com/watch?v=dEbe0rS4Z2A';

  const playVideo = () => {
    setShowPlayer(true);
  };

  const closePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <div className="relative">
      <button
        className="w-48 h-12 flex items-center justify-center font-bold text-base gap-3 py-3 px-6 bg-white rounded hover:opacity-40"
        onClick={playVideo}
      >
        <img src={PlayIcon} alt="play icon" />
        VER AGORA
      </button>
      {showPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button onClick={closePlayer} className="absolute top-4 left-4">
            <svg
              width="19"
              height="33"
              viewBox="0 0 19 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7719 0.627133C16.9357 -0.209044 15.5876 -0.209044 14.7514 0.627133L0.570558 14.808C-0.0949711 15.4736 -0.0949711 16.5486 0.570558 17.2142L14.7514 31.3951C15.5876 32.2312 16.9357 32.2312 17.7719 31.3951C18.6081 30.5589 18.6081 29.2108 17.7719 28.3746L5.41698 16.0026L17.789 3.63055C18.6081 2.81143 18.6081 1.44625 17.7719 0.627133Z"
                fill="white"
              />
            </svg>
          </button>
          <ReactPlayer
            url={videoUrl}
            controls
            playing
            width="100%"
            height="100%"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default WatchButton;
