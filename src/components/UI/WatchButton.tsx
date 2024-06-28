import PlayIcon from "../../images/icons/play-icon.png"

const WatchButton = () => {
  return (
    <button className="w-48 h-12 flex items-center justify-center font-bold text-base gap-3 py-3 px-6 bg-white rounded hover:opacity-40">
        <img src={PlayIcon} alt="play icon" />
        VER AGORA
    </button>
  )
}

export default WatchButton