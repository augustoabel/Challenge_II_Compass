import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useItem } from "../context/exportContext";

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

const SectionGrid: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [halloweenCollections, setHalloweenCollections] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "276c8dd1a63ee21cfe68c83fd88f5107",
              language: "pt-BR",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar os filmes:", error);
      }
    };

    const fetchHalloweenCollections = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/list/1",
          {
            params: {
              api_key: "276c8dd1a63ee21cfe68c83fd88f5107",
              language: "pt-BR",
            },
          }
        );
        setHalloweenCollections(response.data.items);
      } catch (error) {
        console.error("Erro ao buscar as coleções de Halloween:", error);
      }
    };

    const fetchPopularSeries = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/tv/popular",
          {
            params: {
              api_key: "276c8dd1a63ee21cfe68c83fd88f5107",
              language: "pt-BR",
            },
          }
        );
        setPopularSeries(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar as séries populares:", error);
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

  const navigate = useNavigate();
  const { setSelectedItem } = useItem();
  const { setIdSeries } = useItem();
  const { setIdMovies } = useItem();

  const onClickCard = (item: Item) => {
    setSelectedItem(item);
    setIdSeries(item.id);
    navigate("/InfoSeries");
    window.scrollTo(0, 0);
  };
  const onClickMovies = (item: Item) => {
    setSelectedItem(item);
    setIdSeries(item.id);
    setIdMovies(item.id);
    navigate("/infoMovies");
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-gray-900 text-white p-20">
      <div className="pt-10 h-[400px]">
        <p className="text-xm pl-2">Coleções de Halloween</p>
        <Slider {...settings} className="mt-1 cursor-pointer">
          {halloweenCollections.length > 0 ? (
            halloweenCollections.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]"
                style={{ width: 240 }}
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
      </div>
      <div className="pt-16 h-[400px]">
        <p className="text-xm pl-2">Séries em Alta</p>
        <Slider {...settings} className="mt-1 cursor-pointer">
          {popularSeries.length > 0 ? (
            popularSeries.map((series) => (
              <div
                key={series.id}
                className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]"
                style={{ width: 240 }}
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
      <div className="pt-16 h-[400px]">
        <p className="text-xm pl-2">Filmes em Alta</p>
        <Slider {...settings} className="mt-2 cursor-pointer">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-[15px] border-8 border-gray-900 h-[361px] cursor-pointer"
                style={{ width: 240 }}
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
