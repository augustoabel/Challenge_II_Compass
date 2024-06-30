import { useState } from "react";
import Header from "./Header";
import Title from "./UI/Title";
import Description from "./UI/Description";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useItem } from "../context/getCards";

const SectionFavorites = () => {
  const [favoritesSeries, setFavoritesSeries] = useState([]);
  const [laterMovies, setlaterMovies] = useState([]);
  const [laterSeries, setlaterSeries] = useState([]);
  const { selectedFavorite } = useItem();


  const settings = {
    dots: true,
    infinite: false,
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
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white h-screen">
      <Header />
      <div className="px-16 pt-16" >
        <Title title="Minhas listas" />
        <Description description="Listas criadas por você de acordo com seus gostos" />
      </div>
      <div className="px-16 py-12 bg-gray-900">
        <div className="mt-10 h-[400px]">
          <p className="text-xm pl-2">Filmes favoritos</p>
          <Slider {...settings} >
          {selectedFavorite.length > 0 ? (
          selectedFavorite.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]" 
              style={{width: 240}}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${item}`}
                alt=""
                className="h-full w-full object-cover rounded-[8px]"
              />
            </div>
          ))
        ) : (
          <div
              className="flex place-content-center bg-gray-700 rounded-[8px] h-[361px]" 
              style={{width: 240}}
            >
            <p className="text-xs text-center">Você ainda não adicionou filmes favoritos</p>
          </div>
        )}
          </Slider>
        </div>
        <div className="mt-10 h-[400px]">
        <p className="text-xm pl-2">Séries favoritas</p>
          <Slider {...settings}>
          {favoritesSeries.length > 0 ? (
          favoritesSeries.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]" 
              style={{width: 240}}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="h-full w-full object-cover rounded-[8px]"
              />
            </div>
          ))
        ) : (
          <div
              className="flex place-content-center bg-gray-700 rounded-[8px] h-[361px]" 
              style={{width: 240}}
            >
            <p className="text-xs text-center">Você ainda não adicionou séries favoritas</p>
          </div>
        )}
          </Slider>
        </div>
        <div className="mt-10 h-[400px]">
          <p className="text-xm pl-2">Filmes para ver mais tarde</p>
          <Slider {...settings}>
          {laterMovies.length > 0 ? (
          laterMovies.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]" 
              style={{width: 240}}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="h-full w-full object-cover rounded-[8px]"
              />
            </div>
          ))
        ) : (
          <div
              className="flex place-content-center bg-gray-700 rounded-[8px] h-[361px]" 
              style={{width: 240}}
            >
            <p className="text-xs text-center">Você ainda não adicionou filmes para ver mais tarde</p>
          </div>
        )}
          </Slider>
        </div>
        <div className="mt-10 h-[400px]">
          <p className="text-xm pl-2">Séries para ver mais tarde</p>
          <Slider {...settings}>
          {laterSeries.length > 0 ? (
          laterSeries.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]" 
              style={{width: 240}}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="h-full w-full object-cover rounded-[8px]"
              />
            </div>
          ))
        ) : (
          <div
              className="flex place-content-center bg-gray-700 rounded-[8px] h-[361px]" 
              style={{width: 240}}
            >
            <p className="text-xs text-center">Você ainda não adicionou séries para ver mais tarde</p>
          </div>
        )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionFavorites;
