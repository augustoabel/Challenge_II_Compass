import LoginBg from '../images/icons/login.png'
import CompassLogo from '../images/image-logo/compassLogin.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { getToken, loginGuest } from '../api/auth.ts'
import Loading from '../components/UI/Loading.tsx'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await getToken();
      console.log(result)
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <>
    {isLoading ? <Loading /> : 
        <div className="w-screen h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${LoginBg})` }}>
          <div className="relative z-10 flex flex-col items-center justify-center h-full ms-2 me-2">
            <div className="p-5 blurLogin rounded-2xl bg-opacity-50 bg-[#353843C9] sm:w-[400px] sm:h-[450px] lg:w-[750px] lg:h-[450px]">
              <h1 className="font-bold mb-6 text-white text-center text-4xl mt-7">Compass Video</h1>
              <div className='w-[270px] m-auto'>
                <h2 className="text-lg mb-[24px] font-light text-white text-center">Acesse sua conta para ver novos títulos</h2>
              </div>
              <div className='flex justify-center items-center'>
                <button onClick={handleLogin} className="bg-[#037AEB] text-white w-[370px] py-3 rounded w-full font-medium tracking-widest">
                  INICIAR SESSÃO COM TMDB
                </button>
              </div>
              <div className='justify-center items-center text-center mt-6'>
                <span className='text-[#FFFFFF99] text-sm font-light'>Não tem conta? </span>
                <span className='text-white text-sm font-light'><button onClick={loginGuest}> Acesse como convidado</button></span>

              </div>
              <div className='flex justify-center items-center'>
                <img src={CompassLogo} alt="Compass Logo" className='w-80'></img>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Login