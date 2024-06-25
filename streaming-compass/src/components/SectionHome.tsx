import Title from "./UI/Title"
import Info from "./UI/Info"
import Genre from "./UI/Genre"
import Description from "./UI/Description"
import WatchButton from "./UI/WatchButton"
import InfoButton from "./UI/InfoButton"
import ListButton from "./UI/ListButton"
import FavoriteButton from "./UI/FavoriteButton"



const SectionHome = () => {
  return (
    <div className="flex flex-col justify-end font-sans h-982 w-screen bg-gradient-to-tr bg-gradient-br from-blue-gradient">
      <div className="flex flex-col gap-2.5 mb-8 mx-4">
        <Title />
        <Info />
        <Genre />
        <Description />
      </div>
      <div className="flex flex-col gap-6 mx-4 mb-6">
        <WatchButton />
        <InfoButton />
        <div className="flex gap-6">
          <ListButton />
          <FavoriteButton />
        </div>
      </div>
    </div>
  )
}

export default SectionHome