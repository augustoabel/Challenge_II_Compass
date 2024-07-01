import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useItem } from '../context/exportContext';

interface SimilarMovies {
  id: number;
  poster_path: string;
  title: string;
  name: string;
  release_date: string;
  backdrop_path: string;
  overview: string;
  first_air_date: string;
  genre_ids: [];
}

interface Item {
  id: number;
  title: string;
  poster_path: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  backdrop_path: string;
  genre_ids: [];
}

const SimilarMovies = () => {
  const location = useLocation();
  const [cardMoviesItem, setCardMoviesItem] = useState<SimilarMovies[]>([]);
  const { idMovies } = useItem();

  useEffect(() => {
    const SimilarMovies = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${idMovies}/similar?language=en-US&page=1`,
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
      },
    };

    axios
      .request(SimilarMovies)
      .then(function (response) {
        setCardMoviesItem(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [location, idMovies]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const { setSelectedItem } = useItem();
  const navigate = useNavigate();
  const onClickMovies = (item: Item) => {
    setSelectedItem(item);
    navigate('/infoMovies');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Slider
        {...settings}
        className="bg-gradient-to-tr from-gray-900 cursor-pointer"
      >
        {cardMoviesItem.length > 0 ? (
          cardMoviesItem
            .filter((item) => item.poster_path)
            .map((item) => (
              <div
                key={item.id}
                className="rounded-[8px] h-[361px] px-2"
                style={{ width: 240 }}
                onClick={() => onClickMovies(item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>
            ))
        ) : (
          <p className="py-6 text-white text-lg">Carregando...</p>
        )}
      </Slider>
    </div>
  );
};

export default SimilarMovies;
