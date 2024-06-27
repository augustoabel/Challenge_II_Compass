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

interface SeriesProps {
  name: string;
}


const Section: React.FC<SeriesProps> = ({ name }) => {
  const location = useLocation()
  const [genre, setGenre] = useState([])
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    if (name == 'Filmes') {
      // console.log(name)
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setGenre(response.data.genres);
        })
        .catch(function (error) {
          console.error(error);
        });

        const optionsTitle = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew'
          }
        };
        
        axios
          .request(optionsTitle)
          .then(function (response) {
            setTitle(response.data.results[0].title);
          })
          .catch(function (error) {
            console.error(error);
          });
    } 
    else if (name === 'Séries') {
      // console.log(name)
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/tv/list?language=en',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setGenre(response.data.genres);
        })
        .catch(function (error) {
          console.error(error);
        });

        const optionsTitle = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/tv/popular',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTQxMDUzMC40NDI1NjksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7TiUaD5YIp9NQDfqrQZulx2_BRpLuOft5XSu8sQ-ew'
          }
        };
    
        axios
          .request(optionsTitle)
          .then(function (response) {
            setTitle(response.data.results[0].name);
          })
          .catch(function (error) {
            console.error(error);
          });
    }


  }, [location])


  return (
    <>
      <div className="flex flex-col justify-end font-sans py-40 w-screen bg-gradient-to-tr from-blue-gradient md:justify-center  ">
        <div className="flex flex-row gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
          <TitleSection name={name} />
          <FilterGenre genre={genre} />
        </div>

        <div className="flex flex-col gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20">
          <Title title={title} />
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
      <Footer />
    </>
  );
};

export default Section;
