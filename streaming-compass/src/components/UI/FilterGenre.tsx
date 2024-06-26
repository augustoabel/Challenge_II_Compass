const FilterGenre = () => {
  return (
    <select className="ml-2  bg-custom-genre text-center  text-white  md:w-32 border  h-11 rounded-full border-white md:ml-6  ">
      <option value="genre">Gêneros</option>
      <option value="drama">Drama</option>
      <option value="comedia">Comédia</option>
    </select>
  );
};

export default FilterGenre;
