import Title from './UI/Title';
import Info from './UI/Info';
import Genre from './UI/Genre';
import Description from './UI/Description';
import WatchButton from './UI/WatchButton';
import InfoButton from './UI/InfoButton';
import ListButton from './UI/ListButton';
import FavoriteButton from './UI/FavoriteButton';

const SectionHome = () => {
  return (
    <div className="flex flex-col justify-end font-sans py-52  w-screen bg-gradient-to-tr from-blue-gradient md:justify-center">
      <div className="flex flex-col gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
        <Title />
        <Info />
        <Genre />
        <Description />
      </div>
      <div className="flex flex-col gap-6 mx-4 mb-6 md:flex-row md:mx-20">
        <WatchButton />
        <InfoButton />
        <div className="flex gap-6">
          <ListButton />
          <FavoriteButton />
        </div>
      </div>
    </div>
  );
};

export default SectionHome;
