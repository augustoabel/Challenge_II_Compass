import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TitleSection from './TitleSection';
import Info from './Info';
import WatchButton from './WatchButton';
import TrailerButton from './TrailerButton';
import Description from './Description';
import ReactPlayer from 'react-player';

interface Episodes {
    still_path: string;
    name: string;
    overview: string;
    runtime: number;
}

interface InfoTempProps {
    id?: number;
}

const InfoTemporada: React.FC<InfoTempProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [backdropPath, setBackdropPath] = useState()
    const [season, setSeason] = useState('1')
    const [assessment, setAssessment] = useState(1)
    const [description, setDescription] = useState('')
    const [load, setLoad] = useState(false)
    const [episodes, setEpisodes] = useState<Episodes[]>([])
    const [showPlayer, setShowPlayer] = useState(false)
    const videoUrl = 'https://www.youtube.com/watch?v=dEbe0rS4Z2A';

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/${id}`,
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTg0MjAzMy4wNzAwMDksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.deJUW--bPu3C50WpmI04qiPKDfmNmXyQxK942JzGlgI'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                setBackdropPath(response.data.backdrop_path);
                setSeason(response.data.seasons[1].season_number);
                setAssessment(response.data.vote_average.toFixed(1));
                setDescription(response.data.overview)
            })
            .catch(function (error) {
                console.error(error);
            });

        const options2 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/${id}/season/1`,
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTg0MjAzMy4wNzAwMDksInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.deJUW--bPu3C50WpmI04qiPKDfmNmXyQxK942JzGlgI'
            }
        };

        axios
            .request(options2)
            .then(function (response) {
                setEpisodes(response.data.episodes)
                setLoad(true)
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [load])

    const playVideo = () => {
        setShowPlayer(true);
    };

    const closePlayer = () => {
        setShowPlayer(false);
    };


    return (
        <>
            <div
                className="bg-no-repeat bg-cover  bg-center min-h-screen"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropPath})`,
                    backgroundPosition: 'top ',
                }}
            >
                <Header />
                <div className=" md:h-[75vh] pt-20  ">
                    <div className={`flex flex-row gap-2.5 mb-8 mx-4 md:mt-9  md:mx-20 `}>
                        <TitleSection name={`Temporada ${season}`} />
                    </div>
                    <div className="flex flex-col gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
                        <Info info={`2021 - ${assessment}`} />
                    </div>
                    <div className="flex flex-col gap-6 mx-4 mb-6 md:flex-row md:mx-20 ">
                        <WatchButton />
                        <TrailerButton />
                    </div>
                    <div className="flex flex-col gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
                        <Description description={description} />
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 mx-4 md:mt-9 md:mx-20 mb-0">
                    <h4 className="font-sans font-bold text-xl text-white ml-3 mb-4 mt-12 ">
                        Episódios
                    </h4>
                    <div className="flex mx-2 overflow-hidden shadow-lg justify-center items-center mb-5">
                        <div className='grid grid-cols-2 gap-4'>
                            {load && (
                                episodes.map((e, index) => (
                                    <div className='bg-gray-800 rounded-xl grid grid-cols-12 gap-4' onClick={playVideo}>
                                        <img className=" w-full rounded-tl-xl rounded-bl-xl h-full border-none col-span-7" style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${e.still_path})`,
                                            backgroundPosition: 'top ',
                                            backgroundSize: 'cover',
                                        }} />
                                        <div className="p-4 flex flex-col justify-between col-span-5">
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{`${index + 1}. ${e.name}`} <span className="mt-4 text-sm text-gray-500">{e.runtime} min</span></h3>

                                                <p className="mt-2 text-gray-400">{e.overview}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )))}
                                {showPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button onClick={closePlayer} className="absolute top-4 left-4">
            <svg
              width="19"
              height="33"
              viewBox="0 0 19 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7719 0.627133C16.9357 -0.209044 15.5876 -0.209044 14.7514 0.627133L0.570558 14.808C-0.0949711 15.4736 -0.0949711 16.5486 0.570558 17.2142L14.7514 31.3951C15.5876 32.2312 16.9357 32.2312 17.7719 31.3951C18.6081 30.5589 18.6081 29.2108 17.7719 28.3746L5.41698 16.0026L17.789 3.63055C18.6081 2.81143 18.6081 1.44625 17.7719 0.627133Z"
                fill="white"
              />
            </svg>
          </button>
          <ReactPlayer
            url={videoUrl}
            controls
            playing
            width="100%"
            height="100%"
            className="max-w-full max-h-full"
          />
        </div>
      )}
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default InfoTemporada