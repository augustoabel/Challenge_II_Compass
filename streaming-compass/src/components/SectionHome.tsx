import Title from "./UI/Title";
import Info from "./UI/Info";
import Genre from "./UI/Genre";
import Description from "./UI/Description";
import WatchButton from "./UI/WatchButton";
import InfoButton from "./UI/InfoButton";
import ListButton from "./UI/ListButton";
import FavoriteButton from "./UI/FavoriteButton";
import Header from "../components/Header";
import BGImage from "../images/cover.png";

const SectionHome = () => {
  return (
    <div className="bg-no-repeat bg-cover" style={{backgroundImage: `url(${BGImage})`}}>
    <div className="flex flex-col justify-start font-sans bg-gradient-to-tr from-blue-gradient md:justify-center">
      <Header />
      <div className="flex flex-col pt-52 gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
        <Title title="Luca"/>
        <Info />
        <Genre />
        <Description />
      </div>
      <div className="flex flex-col gap-6 mx-4 mb-6 md:flex-row md:mx-20">
        <WatchButton />
        <InfoButton />
        <div className="flex gap-6 pb-52">
          <ListButton />
          <FavoriteButton />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionHome;
