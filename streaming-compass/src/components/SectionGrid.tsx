import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useItem } from '../context/exportContext';

interface Item {
  id: number;
  title: string;
  poster_path: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  backdrop_path: string;
  genre_ids: number[];
}

const SectionGrid: React.FC = () => {
  const [movies, setMovies] = useState<Item[]>([]);  
  const [halloweenCollections, setHalloweenCollections] = useState<Item[]>([]);  
  const [popularSeries, setPopularSeries] = useState<Item[]>([]);  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };

    const fetchHalloweenCollections = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/list/1',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setHalloweenCollections(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar as coleções de Halloween:', error);
      }
    };

    const fetchPopularSeries = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/tv/popular',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setPopularSeries(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar as séries populares:', error);
      }
    };

    fetchMovies();
    fetchHalloweenCollections();
    fetchPopularSeries();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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

  const navigate = useNavigate();
  const { setSelectedItem } = useItem();
  const { setIdSeries } = useItem();
  const { setIdMovies } = useItem();

  const onClickCard = (item: Item) => {
    setSelectedItem(item);
    setIdSeries(item.id);
    navigate('/InfoSeries');
    window.scrollTo(0, 0);
  };
  const onClickMovies = (item: Item) => {
    setSelectedItem(item);
    setIdSeries(item.id);
    setIdMovies(item.id);
    navigate('/infoMovies');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-900 p-20 text-white">
      <p className="text-xl">Coleções de Halloween</p>

      <Slider {...settings} className="mt-10 cursor-pointer">
        {halloweenCollections.length > 0 ? (
          halloweenCollections.map((item: Item) => (  
            <div
              key={item.id}
              className="rounded-[8px]  h-full  px-2"
              onClick={() => onClickMovies(item)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="h-full w-full object-cover rounded-[8px]"
              />
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </Slider>

      <div className="mt-10">
        <p className="text-xl">Séries em Alta</p>

        <Slider {...settings} className="mt-1 cursor-pointer">
          {popularSeries.length > 0 ? (
            popularSeries.map((series: Item) => (  
              <div
                key={series.id}
                className="rounded-[8px]  h-full  px-2"
                onClick={() => onClickCard(series)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </Slider>
      </div>

      <div className="mt-10">
        <p className="text-xl">Filmes em Alta</p>

        <Slider {...settings} className="mt-2 cursor-pointer">
          {movies.length > 0 ? (
            movies.map((movie: Item) => ( 
              <div
                key={movie.id}
                className="rounded-[8px]  h-full  px-2"
                onClick={() => onClickMovies(movie)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default SectionGrid;
