const FilterGenre = () => {
  return (
    <select className="ml-2  bg-custom-gender text-center  text-white  md:w-32 border  h-11 rounded-full border-white md:ml-6  ">
      <option value="filmes">Gêneros</option>
      <option value="series">Feminino</option>
      <option value="celebridades">Masculino</option>
    </select>
  );
};

export default FilterGenre;
