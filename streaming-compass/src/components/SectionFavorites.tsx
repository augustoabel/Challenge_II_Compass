import { useEffect, useState } from "react";
import Header from "./Header";
import Title from "./UI/Title";
import Description from "./UI/Description";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";

const SectionFavorites = () => {

    const [favoritesMovies, setFavoritesMovies] = useState([]);
    const [favoritesSeries, setFavoritesSeries] = useState([]);
    const [laterMovies, setlaterMovies] = useState([]);
    const [laterSeries, setlaterSeries] = useState([]);


  return (
    <div className="bg-gray-900 text-white h-screen">
        <Header />
        <div className="p-16">
            <Title title="Minhas listas" />
            <Description description="Listas criadas por você de acordo com seus gostos" />
        </div>
    </div>
  )
}

export default SectionFavorites