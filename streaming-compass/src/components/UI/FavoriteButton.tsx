import { Tooltip } from 'react-tooltip';
import { useState, useEffect } from 'react';
import { useItem } from '../../context/exportContext';
import DoneIcon from '../../images/icons/done_black.png';

interface SelectedFavoriteProp {
  selectedMovie: string;
  selectedSerie: string;
}

const FavoriteButton: React.FC<SelectedFavoriteProp> = ({
  selectedMovie,
  selectedSerie,
}) => {
  const [tooltipContent, setTooltipContent] = useState(
    'Adicionar aos favoritos'
  );
  const [checked, setChecked] = useState(false);
  const [add, setAdd] = useState('block');
  const [done, setDone] = useState('hidden');

  const { favoriteMovie, setFavoriteMovie } = useItem();
  const { favoriteSerie, setFavoriteSerie } = useItem();

  useEffect(() => {
    if (
      favoriteMovie.includes(selectedMovie) ||
      favoriteSerie.includes(selectedSerie)
    ) {
      setTooltipContent('aos favoritos');
      setAdd('hidden');
      setDone('block');
      setChecked(true);
    } else {
      setTooltipContent('Adicionar aos favoritos');
      setAdd('block');
      setDone('hidden');
      setChecked(false);
    }
  }, [selectedMovie, favoriteMovie, selectedSerie, favoriteSerie]);

  const handleOnClickFavorite = (movie: string, serie: string) => {
    let newFavoriteMovie;
    let newFavoriteSerie;

    if (!checked) {
      newFavoriteMovie = [...favoriteMovie, movie];
      setFavoriteMovie(newFavoriteMovie);
      newFavoriteSerie = [...favoriteSerie, serie];
      setFavoriteSerie(newFavoriteSerie);
    } else {
      newFavoriteMovie = favoriteMovie.filter((item) => item !== movie);
      setFavoriteMovie(newFavoriteMovie);
      newFavoriteSerie = favoriteSerie.filter((item) => item !== serie);
      setFavoriteSerie(newFavoriteSerie);
    }
  };

  return (
    <div>
      <button
        data-tooltip-id="favorite-button"
        data-tooltip-content={tooltipContent}
        data-tooltip-place="top"
        onClick={() => handleOnClickFavorite(selectedMovie, selectedSerie)}
        className="w-12 h-12 flex justify-center items-center text-white border-white/90 border border-solid rounded-full p-2 hover:text-black hover:bg-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={add}
        >
          <path
            d="M11.75 17.352L6.96 20L7.87533 14.392L4 10.4207L9.35533 9.602L11.75 4.5L14.1447 9.602L19.5 10.4207L15.6247 14.392L16.54 20L11.75 17.352Z"
            fill="currentColor"
          />
        </svg>
        <img src={DoneIcon} alt="Done Icon" className={done} />
      </button>
      <Tooltip
        id="favorite-button"
        style={{ backgroundColor: 'white', color: 'black', fontWeight: '700' }}
      />
    </div>
  );
};

export default FavoriteButton;
