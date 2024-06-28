import CompassLogo from '../images/image-logo/compass.uol.png';
import IconBusca from '../images/icons/icon-busca.png';
import IconAdd from '../images/icons/icon-add.png';
import Avatar from '../images/icons/Avatar.png';
import IconCloseBusca from '../images/icons/iconCloseBusca.png';
import IconElipse from '../images/icons/Ellipse 9.png';
import IconRonald from '../images/icons/icon-Ronald.png';
import IconCreateProfile from '../images/icons/IconCreatProfile.png';
import { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
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
      <header className="bg-gradient-to-b from-custom-neutral to-transparent pr-6  md:flex md:items-center py-6 md:py-2">
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
            <nav className="md:justify-center md:items-center font-sans font-semibold ">
              <ul className="flex space-x-4 w-80 justify-between md:w-full text-white flex-wrap md:flex-nowrap gap-6">
                <li className="flex items-center ">
                  <NavLink
                    to="/home"
                    className={` ${
                      location.pathname === '/home' ? 'text-blue-500' : ''
                    }`}
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`inline-block align-text-top mr-2  ${
                        location.pathname === '/home'
                          ? 'text-blue-500'
                          : 'text-gray-300'
                      }`}
                    >
                      <path
                        d="M7.99998 16.0007V11.0007H12V16.0007C12 16.5507 12.45 17.0007 13 17.0007H16C16.55 17.0007 17 16.5507 17 16.0007V9.0007H18.7C19.16 9.0007 19.38 8.4307 19.03 8.1307L10.67 0.600703C10.29 0.260703 9.70998 0.260703 9.32998 0.600703L0.969976 8.1307C0.629976 8.4307 0.839976 9.0007 1.29998 9.0007H2.99998V16.0007C2.99998 16.5507 3.44998 17.0007 3.99998 17.0007H6.99998C7.54998 17.0007 7.99998 16.5507 7.99998 16.0007Z"
                        fill="currentColor"
                      />
                    </svg>
                    Início
                  </NavLink>
                </li>
                <li className="flex items-center">
                  <NavLink
                    to="/series"
                    className={`flex items-center ${
                      location.pathname === '/series' ? 'text-blue-500' : ''
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`inline-block align-text-top mr-2 ${
                        location.pathname === '/series'
                          ? 'text-blue-500'
                          : 'text-gray-300'
                      }`}
                    >
                      <path
                        d="M12.56 7.97699H17.0413C17.7486 7.97699 18.4269 8.25794 18.927 8.75804C19.427 9.25814 19.708 9.93641 19.708 10.6437V17.3337C19.708 18.0409 19.427 18.7192 18.927 19.2193C18.4269 19.7194 17.7486 20.0003 17.0413 20.0003H6.91667C6.20942 20.0003 5.53115 19.7194 5.03105 19.2193C4.53095 18.7192 4.25 18.0409 4.25 17.3337V10.6437C4.25 9.93641 4.53095 9.25814 5.03105 8.75804C5.53115 8.25794 6.20942 7.97699 6.91667 7.97699H11.0573L8.40333 5.32299C8.33137 5.25107 8.27428 5.16568 8.23531 5.07169C8.19635 4.97771 8.17628 4.87697 8.17625 4.77522C8.17622 4.67348 8.19622 4.57273 8.23513 4.47872C8.27404 4.38471 8.33108 4.29929 8.403 4.22732C8.47492 4.15536 8.56031 4.09826 8.6543 4.0593C8.74828 4.02034 8.84902 4.00027 8.95076 4.00024C9.05251 4.0002 9.15326 4.02021 9.24727 4.05912C9.34128 4.09803 9.4267 4.15507 9.49867 4.22699L11.8087 6.53699L14.118 4.22699C14.2633 4.08165 14.4605 4 14.666 4C14.8715 4 15.0687 4.08165 15.214 4.22699C15.3593 4.37233 15.441 4.56945 15.441 4.77499C15.441 4.98053 15.3593 5.17765 15.214 5.32299L12.5593 7.97699H12.56ZM16.8453 13.1303C17.1491 13.1303 17.4404 13.0097 17.6552 12.7949C17.87 12.5801 17.9907 12.2888 17.9907 11.985C17.9907 11.6812 17.87 11.3899 17.6552 11.1751C17.4404 10.9603 17.1491 10.8397 16.8453 10.8397C16.5416 10.8397 16.2503 10.9603 16.0355 11.1751C15.8207 11.3899 15.7 11.6812 15.7 11.985C15.7 12.2888 15.8207 12.5801 16.0355 12.7949C16.2503 13.0097 16.5416 13.1303 16.8453 13.1303ZM16.8453 17.1377C16.998 17.1413 17.1499 17.1145 17.292 17.0586C17.4342 17.0027 17.5637 16.9189 17.673 16.8122C17.7823 16.7056 17.8692 16.5781 17.9285 16.4373C17.9878 16.2966 18.0183 16.1454 18.0183 15.9927C18.0183 15.8399 17.9878 15.6887 17.9285 15.548C17.8692 15.4072 17.7823 15.2798 17.673 15.1731C17.5637 15.0664 17.4342 14.9826 17.292 14.9267C17.1499 14.8709 16.998 14.844 16.8453 14.8477C16.5464 14.8549 16.2622 14.9787 16.0534 15.1926C15.8445 15.4066 15.7276 15.6937 15.7276 15.9927C15.7276 16.2916 15.8445 16.5788 16.0534 16.7927C16.2622 17.0066 16.5464 17.1304 16.8453 17.1377Z"
                        fill="currentColor"
                      />
                    </svg>
                    Séries
                  </NavLink>
                </li>
                <li className="flex items-center">
                  <NavLink
                    to="/filmes"
                    className={` flex items-center ${
                      location.pathname === '/filmes' ? 'text-blue-500' : ''
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`inline-block align-text-top mr-2 ${
                        location.pathname === '/filmes'
                          ? 'text-blue-500'
                          : 'text-gray-300'
                      }`}
                    >
                      <path
                        d="M16.4733 13.38C16.6602 13.1968 16.809 12.9784 16.911 12.7374C17.0129 12.4964 17.0661 12.2376 17.0674 11.9759C17.0688 11.7142 17.0182 11.4548 16.9187 11.2128C16.8191 10.9707 16.6726 10.7508 16.4875 10.5658C16.3025 10.3807 16.0826 10.2342 15.8406 10.1347C15.5985 10.0351 15.3392 9.98456 15.0775 9.98588C14.8158 9.98721 14.5569 10.0404 14.3159 10.1424C14.0749 10.2443 13.8565 10.3931 13.6733 10.58C13.3082 10.9526 13.1049 11.4542 13.1075 11.9759C13.1101 12.4975 13.3185 12.9971 13.6874 13.3659C14.0563 13.7348 14.5558 13.9432 15.0775 13.9458C15.5991 13.9485 16.1008 13.7451 16.4733 13.38ZM8.29867 13.38C8.48558 13.1968 8.63432 12.9784 8.7363 12.7374C8.83827 12.4964 8.89146 12.2376 8.89278 11.9759C8.8941 11.7142 8.84353 11.4548 8.744 11.2128C8.64446 10.9707 8.49793 10.7508 8.31288 10.5658C8.12783 10.3807 7.90793 10.2342 7.6659 10.1347C7.42387 10.0351 7.16451 9.98456 6.90281 9.98588C6.64111 9.98721 6.38227 10.0404 6.14126 10.1424C5.90024 10.2443 5.68184 10.3931 5.49867 10.58C5.13354 10.9526 4.9302 11.4542 4.93283 11.9759C4.93547 12.4975 5.14386 12.9971 5.51274 13.3659C5.88161 13.7348 6.38115 13.9432 6.90281 13.9458C7.42447 13.9485 7.92609 13.7451 8.29867 13.38ZM12.414 6.50667C12.231 6.31924 12.0127 6.16998 11.7716 6.06756C11.5306 5.96513 11.2716 5.91157 11.0097 5.90997C10.7478 5.90837 10.4881 5.95878 10.2458 6.05826C10.0035 6.15774 9.7834 6.30432 9.59817 6.4895C9.41294 6.67468 9.26631 6.89479 9.16677 7.13706C9.06723 7.37933 9.01677 7.63895 9.0183 7.90086C9.01984 8.16278 9.07334 8.42179 9.17571 8.66287C9.27808 8.90396 9.42728 9.12233 9.61467 9.30533C9.9873 9.66925 10.4884 9.87162 11.0092 9.86857C11.53 9.86551 12.0287 9.65729 12.397 9.28903C12.7654 8.92078 12.9737 8.42218 12.9769 7.90133C12.9801 7.38049 12.7778 6.87939 12.414 6.50667ZM12.414 14.6813C12.231 14.4939 12.0127 14.3447 11.7716 14.2422C11.5306 14.1398 11.2716 14.0862 11.0097 14.0846C10.7478 14.083 10.4881 14.1334 10.2458 14.2329C10.0035 14.3324 9.7834 14.479 9.59817 14.6642C9.41294 14.8494 9.26631 15.0695 9.16677 15.3117C9.06723 15.554 9.01677 15.8136 9.0183 16.0755C9.01984 16.3374 9.07334 16.5965 9.17571 16.8375C9.27808 17.0786 9.42728 17.297 9.61467 17.48C9.9873 17.8439 10.4884 18.0463 11.0092 18.0432C11.53 18.0402 12.0287 17.832 12.397 17.4637C12.7654 17.0954 12.9737 16.5968 12.9769 16.076C12.9801 15.5552 12.7778 15.0541 12.414 14.6813ZM11.3847 11.5953C11.3323 11.5429 11.2702 11.5014 11.2017 11.473C11.1333 11.4446 11.06 11.43 10.9859 11.43C10.9118 11.4299 10.8385 11.4445 10.77 11.4728C10.7016 11.5011 10.6394 11.5426 10.587 11.595C10.5346 11.6474 10.493 11.7095 10.4647 11.7779C10.4363 11.8464 10.4217 11.9197 10.4216 11.9938C10.4216 12.0678 10.4362 12.1412 10.4645 12.2096C10.4928 12.2781 10.5343 12.3403 10.5867 12.3927C10.6924 12.4985 10.8358 12.558 10.9854 12.558C11.135 12.5581 11.2785 12.4987 11.3843 12.393C11.4902 12.2873 11.5496 12.1438 11.5497 11.9942C11.5498 11.8446 11.4904 11.7012 11.3847 11.5953ZM23.4247 11.166C21.2047 15.7747 17.9813 17.7847 15.668 18.6593C13.9547 19.3067 12.4933 19.4447 11.702 19.4647C11.47 19.486 11.2367 19.5 11.0007 19.5C6.858 19.5 3.5 16.142 3.5 12C3.5 7.858 6.858 4.5 11 4.5C15.1427 4.5 18.5 7.858 18.5 12C18.502 13.7118 17.9151 15.3722 16.838 16.7027C18.726 15.628 20.734 13.7813 22.2633 10.6073C22.3429 10.4628 22.4749 10.3542 22.632 10.3039C22.7892 10.2537 22.9597 10.2655 23.1084 10.337C23.2571 10.4086 23.3728 10.5344 23.4316 10.6885C23.4904 10.8427 23.4879 11.0136 23.4247 11.166Z"
                        fill="currentColor"
                      />
                    </svg>
                    Filmes
                  </NavLink>
                </li>
                <li className="flex md:flex-row items-center justify-center flex-1 mt-4 md:mt-0">
                  <NavLink
                    to="/actors"
                    className={` flex items-center  ${
                      location.pathname === '/actors' ? 'text-blue-500' : ''
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`inline-block align-text-top mr-1 ${
                        location.pathname === '/actors'
                          ? 'text-blue-500'
                          : 'text-gray-300'
                      }`}
                    >
                      <path
                        d="M11.75 17.352L6.96 20L7.87533 14.392L4 10.4207L9.35533 9.602L11.75 4.5L14.1447 9.602L19.5 10.4207L15.6247 14.392L16.54 20L11.75 17.352Z"
                        fill="currentColor"
                      />
                    </svg>
                    Celebridades
                  </NavLink>
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
                        <li className="px-4 py-2">Editar perfis</li>
                        <li className="px-4 py-2">Preferências</li>
                        <li className="px-4 py-2 text-blue-400">
                          Minha assinatura
                        </li>
                        <li className="px-4 py-2">Minha conta</li>
                        <li className="px-4 py-2">Ajuda</li>
                        <li className="px-4 py-2">
                          <Link to="/">Sair</Link>
                        </li>
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
