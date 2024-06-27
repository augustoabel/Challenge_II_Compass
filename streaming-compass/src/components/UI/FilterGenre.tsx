import React from 'react';

interface Genre {
  name: string;
}

interface GenreProps {
  genre: Genre[];
}

const FilterGenre: React.FC<GenreProps> = ({ genre }) => {
  return (
    <select className="ml-2 bg-custom-genre text-center text-white md:w-32 border h-11 rounded-full border-white md:ml-6">
      {genre.map((i) => (
        <option key={i.name} value={i.name}>
          {i.name}
        </option>
      ))}
    </select>
  );
};

export default FilterGenre;
