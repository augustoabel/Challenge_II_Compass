import Title from '../components/UI/Title';
import Info from '../components/UI/Info';
import Genre from '../components/UI/Genre';
import Description from '../components/UI/Description';
import WatchButton from '../components/UI/WatchButton';
import InfoButton from '../components/UI/InfoButton';
import ListButton from '../components/UI/ListButton';
import FavoriteButton from '../components/UI/FavoriteButton';
import FilterGenre from '../components/UI/FilterGenre';
import TitleSection from '../components/UI/TitleSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SectionGrid from '../components/SectionGrid';
import { useItem } from '../context/exportContext';
import TrailerButton from '../components/UI/TrailerButton';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimilarMovies from '../components/SimilarMovies';
import SimilarSeries from '../components/SimilarSeries';
import Actors from './Actors';

interface SectionProps {
  name: string;
}

const Section: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const [genre, setGenre] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [description, setDescription] = useState('');
  const [genreGlobal, setGenreGlobal] = useState({ genres: [] });
  const [globalIdGenre, setGlobalIdGenre] = useState<number[]>([]);
  const [backImage, setBackImage] = useState('');
  const { selectedItem } = useItem();
  const { idSeries } = useItem();
  const [cardTemporadaItems, setCardTemporadasItem] = useState<Seasons[]>([]);

  interface Seasons {
    id: number;
    poster_path: string;
  }

  useEffect(() => {
    if (name === 'InfoSeries') {
      const Seasons = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${idSeries}?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
        },
      };

      axios
        .request(Seasons)
        .then(function (response) {
          setCardTemporadasItem(response.data.seasons);
        })
        .catch(function (error) {
          console.error(error);
        });

      if (selectedItem) {
        if (selectedItem.title) {
          setTitle(selectedItem.title);
        } else {
          setTitle(selectedItem.name);
        }

        if (selectedItem.release_date) {
          setReleaseDate(selectedItem.release_date);
        } else {
          setReleaseDate(selectedItem.first_air_date);
        }
        setDescription(selectedItem.overview);
        setBackImage(selectedItem.backdrop_path);
        setGlobalIdGenre(selectedItem.genre_ids);
      }
    } else if (name === 'infoMovies') {
      if (selectedItem) {
        if (selectedItem.title) {
          setTitle(selectedItem.title);
        } else {
          setTitle(selectedItem.name);
        }

        if (selectedItem.release_date) {
          setReleaseDate(selectedItem.release_date);
        } else {
          setReleaseDate(selectedItem.first_air_date);
        }
        setDescription(selectedItem.overview);
        setBackImage(selectedItem.backdrop_path);
        setGlobalIdGenre(selectedItem.genre_ids);
      }
    } else {
      if (name === 'Filmes') {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };

        axios
          .request(options)
          .then(function (response) {
            setGenre(response.data.genres);
            setGenreGlobal(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });

        const optionsTitle = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };
        axios
          .request(optionsTitle)
          .then(function (response) {
            setTitle(response.data.results[0].title);
            setReleaseDate(response.data.results[0].release_date);
            setDescription(response.data.results[0].overview);
            setGlobalIdGenre(response.data.results[0].genre_ids);
            setBackImage(response.data.results[0].backdrop_path);
          })
          .catch(function (error) {
            console.error(error);
          });
      } else if (name === 'Séries') {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/genre/tv/list?language=en',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };

        axios
          .request(options)
          .then(function (response) {
            setGenre(response.data.genres);
            setGenreGlobal(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });

        const optionsTitle = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/tv/popular',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };

        axios
          .request(optionsTitle)
          .then(function (response) {
            setTitle(response.data.results[0].name);
            setReleaseDate(response.data.results[0].first_air_date);
            setDescription(response.data.results[0].overview);
            setGlobalIdGenre(response.data.results[0].genre_ids);
            setBackImage(response.data.results[0].backdrop_path);
          })
          .catch(function (error) {
            console.error(error);
          });
      } else if (name === 'Home') {
        const HomePage = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/list/1',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };

        axios
          .request(HomePage)
          .then(function (response) {
            setTitle(response.data.items[4].title);
            setReleaseDate(response.data.items[4].release_date);
            setDescription(response.data.items[4].overview);
            setGlobalIdGenre(response.data.items[4].genre_ids);
            setBackImage(response.data.items[4].backdrop_path);
          })
          .catch(function (error) {
            console.error(error);
          });
        const GenreHome = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };
        axios
          .request(GenreHome)
          .then(function (response) {
            setGenre(response.data.genres);
            setGenreGlobal(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      } else if (name === 'Actors') {
        const Actors = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };

        axios
          .request(Actors)
          .then(function (response) {
            setTitle(response.data.results[0].known_for[0].title);
            setReleaseDate(response.data.results[0].known_for[0].release_date);
            setDescription(response.data.results[0].known_for[0].overview);
            setBackImage(response.data.results[0].known_for[0].backdrop_path);
            setGlobalIdGenre(response.data.results[0].known_for[0].genre_ids);
          })
          .catch(function (error) {
            console.error(error);
          });
        const Genres = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/genre/tv/list?language=en',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew',
          },
        };

        axios
          .request(Genres)
          .then(function (response) {
            setGenre(response.data.genres);
            setGenreGlobal(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }
  }, [location, idSeries, globalIdGenre, name, selectedItem]);
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
    <>
      <div
        className="bg-no-repeat bg-cover  bg-center min-h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backImage})`,
          backgroundPosition: 'center ',
        }}
      >
        <div className="flex flex-col justify-start font-sans bg-gradient-to-tr from-gray-900 md:justify-center ">
          <Header />
          <div className=" md:h-screen py-40  ">
            <div
              className={`flex flex-row gap-2.5 mb-8 mx-4 md:mt-9  md:mx-20 ${
                name === 'Home' ||
                name === 'Actors' ||
                name === 'infoMovies' ||
                name === 'InfoSeries'
                  ? 'hidden'
                  : ''
              }`}
            >
              <TitleSection name={name} />

              <FilterGenre genre={genre} />
            </div>

            <div className="flex flex-col gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
              <Title title={title} />
              <Info info={releaseDate} />
              <Genre genreGlobal={genreGlobal} globalIdGenre={globalIdGenre} />
              <Description description={description} />
            </div>

            <div className="flex flex-col gap-6 mx-4 mb-6 md:flex-row md:mx-20 ">
              <WatchButton />
              <div className={`${name === 'InfoSeries' ? '' : 'hidden'}`}>
                <TrailerButton />
              </div>
              <div className={`${name === 'InfoSeries' ? 'hidden' : ''}`}>
                <InfoButton />
              </div>

              <div className="flex gap-6">
                <div className={`${name === 'Home' ? '' : 'hidden'}`}>
                  <ListButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'Séries' ? '' : 'hidden'}`}>
                  <ListButton selectedSerie={backImage} selectedMovie="" />
                </div>
                <div className={`${name === 'Filmes' ? '' : 'hidden'}`}>
                  <ListButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'Actors' ? '' : 'hidden'}`}>
                  <ListButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'InfoSeries' ? '' : 'hidden'}`}>
                  <ListButton selectedSerie={backImage} selectedMovie="" />
                </div>
                <div className={`${name === 'infoMovies' ? '' : 'hidden'}`}>
                  <ListButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'Home' ? '' : 'hidden'}`}>
                  <FavoriteButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'Séries' ? '' : 'hidden'}`}>
                  <FavoriteButton selectedSerie={backImage} selectedMovie="" />
                </div>
                <div className={`${name === 'Filmes' ? '' : 'hidden'}`}>
                  <FavoriteButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'Actors' ? '' : 'hidden'}`}>
                  <FavoriteButton selectedMovie={backImage} selectedSerie="" />
                </div>
                <div className={`${name === 'InfoSeries' ? '' : 'hidden'}`}>
                  <FavoriteButton selectedSerie={backImage} selectedMovie="" />
                </div>
                <div className={`${name === 'infoMovies' ? '' : 'hidden'}`}>
                  <FavoriteButton selectedMovie={backImage} selectedSerie="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-10">
        <div
          className={`${
            name === 'InfoSeries' ? '' : 'hidden'
          } h-[400px] items-center`}
        >
          <h4 className="font-sans font-bold text-xm text-white pl-3 pb-4 pt-12 ">
            Temporadas
          </h4>
          <Slider {...settings} className="cursor-pointer">
            {cardTemporadaItems.length > 0 ? (
              cardTemporadaItems
                .filter((item) => item.poster_path)
                .map((item) => (
                  <a href={`infoSeason/${idSeries}`}>
                    <div
                      key={item.id}
                      style={{ width: 240 }}
                      className="rounded-[8px] px-2 h-[361px]"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        className="h-full w-full object-cover rounded-[8px]"
                      />
                    </div>
                  </a>
                ))
            ) : (
              <p>Carregando...</p>
            )}
          </Slider>
        </div>
        <div
          className={`${name === 'InfoSeries' ? '' : 'hidden'} h-[400px] my-10`}
        >
          <h4 className="font-sans font-bold text-xm text-white pl-3 pb-2 pt-12">
            Similares
          </h4>
          <SimilarSeries />
        </div>
      </div>
      <div
        className={`${name === 'infoMovies' ? '' : 'hidden'} p-10 bg-gray-900`}
      >
        <h4 className="font-sans font-bold text-xm text-white ml-3 mb-2">
          Similares
        </h4>
        <SimilarMovies />
      </div>
      <div
        className={`${
          name === 'InfoSeries' || name === 'infoMovies' || name === 'Actors'
            ? 'hidden'
            : ''
        } bg-gray-900`}
      >
        <SectionGrid />
      </div>
      <div className={`${name === 'Actors' ? '' : 'hidden'} bg-gray-900`}>
        <Actors />
      </div>
      <Footer />
    </>
  );
};

export default Section;
