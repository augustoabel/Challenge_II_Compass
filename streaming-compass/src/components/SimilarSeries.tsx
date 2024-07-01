import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useItem } from '../context/exportContext';

interface SimilarSeries {
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

const SimilarSeries = () => {
  const location = useLocation();
  const [cardSeriesItem, setCardSeriesItem] = useState<SimilarSeries[]>([]);
  const { idSeries } = useItem();

  useEffect(() => {
    const SimilarMovies = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/${idSeries}/similar?language=en-US&page=1`,
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
      },
    };

    axios
      .request(SimilarMovies)
      .then(function (response) {
        setCardSeriesItem(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [location, idSeries]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  const { setIdSeries } = useItem();
  const navigate = useNavigate();

  const onClickSeries = (item: SimilarSeries) => {
    setSelectedItem(item);
    setIdSeries(item.id);
    navigate('/InfoSeries');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Slider
        {...settings}
        className="bg-gradient-to-tr from-gray-900 cursor-pointer"
      >
        {cardSeriesItem.length > 0 ? (
          cardSeriesItem
            .filter((item) => item.poster_path)
            .map((item) => (
              <div
                key={item.id}
                className="rounded-[8px] h-[361px] px-2"
                style={{ width: 240 }}
              onClick={() => onClickSeries(item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>
            ))
        ) : (
          <p>Carregando...</p>
        )}
      </Slider>
    </div>
  );
};

export default SimilarSeries;
