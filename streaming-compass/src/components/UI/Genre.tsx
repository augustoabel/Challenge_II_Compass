import React from 'react';

interface GenreProps {
  genreGlobal: { genres: { id: number; name: string }[] };
  globalIdGenre: number[];
}

const Genre: React.FC<GenreProps> = ({ genreGlobal, globalIdGenre }) => {
  // Função para obter o nome do gênero com base no id
  const getGenreName = (id: number) => {
    const genre = genreGlobal.genres.find((genre) => genre.id === id);
    return genre ? genre.name : '';
  };

  return (
    <div className="text-white font-normal text-xs">
      {globalIdGenre.map((id, index) => (
        <span
          key={index}
          className="inline-block  text-white  py-1 text-xs font-base mr-2 mb-2"
        >
          {getGenreName(id)}
        </span>
      ))}
    </div>
  );
};

export default Genre;
