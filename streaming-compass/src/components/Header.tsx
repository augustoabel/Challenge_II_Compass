import CompassLogo from '../images/image-logo/compass.uol.png';
import IconBusca from '../images/icons/icon-busca.png';
import IconAdd from '../images/icons/icon-add.png';
import Avatar from '../images/icons/Avatar.png';
import IconStart from '../images/icons/icon-inicio.png';
import IconSeries from '../images/icons/icon.series.png';
import IconFilmes from '../images/icons/icon-filmes.png';
import IconStar from '../images/icons/icon-star.png';
import IconCloseBusca from '../images/icons/iconCloseBusca.png';
import IconElipse from '../images/icons/Ellipse 9.png';
import IconRonald from '../images/icons/icon-Ronald.png';
import IconCreateProfile from '../images/icons/IconCreatProfile.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header
        className="bg-gradient-to-b from-custom-gray-900 via-custom-gray-800 py-6 to-transparent md:flex md:items-center "
        style={{ backgroundSize: '100% 400%' }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:w-full gap-6 md:justify-start">
          <div className="ml-3">
            <img
              src={CompassLogo}
              alt="Compass Logo"
              className="md:w-48"
              style={{ minWidth: '120px', minHeight: '40px' }}
            />
          </div>

          <div className="order-2 md:order-1">
            <nav className="md:justify-center md:items-center font-sans font-semibold">
              <ul className="flex space-x-4 w-80 justify-between md:w-full text-white flex-wrap md:flex-nowrap gap-6">
                <li className="flex items-center">
                  <img
                    src={IconStart}
                    className="mr-2 mb-1"
                    alt="Ícone Início"
                  />
                  <Link to="/home"> Início</Link>
                </li>
                <li className="flex items-center">
                  <img
                    src={IconSeries}
                    className="mr-2 mb-1"
                    alt="Ícone Séries"
                  />
                  <Link to="/series">Séries </Link>
                </li>
                <li className="flex items-center">
                  <img
                    src={IconFilmes}
                    className="mr-2 mb-1"
                    alt="Ícone Filmes"
                  />
                  <Link to="/filmes">Filmes </Link>
                </li>
                <li className="flex md:flex-row items-center justify-center flex-1 mt-4 md:mt-0">
                  <img
                    src={IconStar}
                    className="mr-2 mb-1"
                    alt="Ícone Celebridades"
                  />
                  <Link to="/actors">Celebridades</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:ml-auto order-1 md:order-2 mr-2">
            <nav className="items-center mx-auto w-80 md:w-full font-sans font-semibold ">
              <ul className="flex space-x-4 md:w-82 justify-between text-white">
                {searchOpen ? (
                  <div className="flex items-center bg-custom-neutral rounded-md p-2 w-full  flex-col md:flex-row">
                    <input
                      type="text"
                      placeholder="Filme, série ou celebridade"
                      className="w-full p-2 bg-custom-neutral text-white  md:w-64  "
                    />
                    <div className="md:flex md:items-center mr-12 md:mr-0">
                      <select className="ml-2 bg-custom-neutral text-white  md:w-32 border  h-11  border-custom-border md:ml-6  ">
                        <option value="filmes">Filmes</option>
                        <option value="series">Séries</option>
                        <option value="celebridades">Celebridades</option>
                      </select>
                      <button className="ml-4  ">
                        <img src={IconBusca} />
                      </button>
                      <button
                        onClick={toggleSearch}
                        className="ml-4 md:h-6 md:w-4 "
                      >
                        <img src={IconCloseBusca} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <li
                      className="flex items-center cursor-pointer"
                      onClick={toggleSearch}
                    >
                      <img
                        src={IconBusca}
                        className="mr-2 mb-1"
                        alt="Ícone Buscar"
                      />
                      Buscar
                    </li>
                    <li className="flex items-center  md:w-32  whitespace-nowrap">
                      <img
                        src={IconAdd}
                        className="mr-2 mb-1 flex"
                        alt="Ícone Minha lista "
                      />
                      Minha lista
                    </li>
                  </>
                )}
                <li
                  className="relative flex items-center cursor-pointer"
                  onClick={toggleMenu}
                >
                  <img src={Avatar} alt="Avatar" />
                  {menuOpen && (
                    <div className="absolute right-0 mt-6 w-52 bg-custom-neutral text-white rounded-md shadow-lg z-10 top-full ">
                      <ul>
                        <li className="px-4 py-2 flex items-center">
                          <img
                            src={IconElipse}
                            className="w-8 h-8 rounded-full mr-2"
                            alt="User 1"
                          />
                          Leslie Alexander
                        </li>
                        <li className="px-4 py-2 flex items-center">
                          <img
                            src={IconRonald}
                            className="w-8 h-8 rounded-full mr-2"
                            alt="User 2"
                          />
                          Ronald Richards
                        </li>

                        <li className="px-4 py-2 flex items-center">
                          <img
                            src={IconCreateProfile}
                            className=" w-8 h-8 rounded-full mr-2"
                            alt="Add Profile"
                          />
                          Criar perfil
                        </li>
                        <li className="px-4 py-2  border">Editar perfis</li>
                        <li className="px-4 py-2">Preferências</li>
                        <li className="px-4 py-2 text-blue-400">
                          Minha assinatura
                        </li>
                        <li className="px-4 py-2">Minha conta</li>
                        <li className="px-4 py-2">Ajuda</li>
                        <li className="px-4 py-2">Sair</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
