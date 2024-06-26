import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SectionGrid = () => {
  const [movies, setMovies] = useState([]);
  const [halloweenCollections, setHalloweenCollections] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
            language: 'pt-BR',
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };

    const fetchHalloweenCollections = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/list/1', { // Ajuste o endpoint para as coleções de Halloween
          params: {
            api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
            language: 'pt-BR',
          },
        });
        setHalloweenCollections(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar as coleções de Halloween:', error);
      }
    };

    const fetchPopularSeries = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
          params: {
            api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
            language: 'pt-BR',
          },
        });
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

  return (
    <div className="bg-custom-neutral p-20 text-white">
      <p className="text-xl">Coleções de Halloween</p>

      <Slider {...settings} className="mt-10">
        {halloweenCollections.length > 0 ? (
          halloweenCollections.map((item) => (
            <div key={item.id} className="bg-blue-500 h-80 rounded-[30px] border-8 border-custom-neutral">
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="h-full w-full object-cover rounded-[15px]" />
              <p className="text-center mt-2">{item.title}</p>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </Slider>

      <div className="mt-10">
        <p className="text-xl">Séries em Alta</p>

        <Slider {...settings} className="mt-1">
          {popularSeries.length > 0 ? (
            popularSeries.map((series) => (
              <div key={series.id} className="bg-blue-500 h-80 rounded-[30px] border-8 border-custom-neutral">
                <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} className="h-full w-full object-cover rounded-[15px]" />
                <p className="text-center mt-2">{series.name}</p>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </Slider>
      </div>

      <div className="mt-10">
        <p className="text-xl">Filmes em Alta</p>

        <Slider {...settings} className="mt-2">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="bg-blue-500 h-80 rounded-[33px] border-8 border-custom-neutral">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-full w-full object-cover rounded-[30px]" />
                <p className="text-center mt-2">{movie.title}</p>
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
