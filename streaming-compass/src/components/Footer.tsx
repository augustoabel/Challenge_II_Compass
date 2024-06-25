import CompassLogo from '../images/image-logo/compass.uol.png';

const Footer = () => {
  return (
    <>
      <div className="bg-custom-neutral p-6 flex  justify-center items-center gap-16 flex-col font-lato font-normal ">
        <img src={CompassLogo} alt="Compass Logo" className="md:w-52 md:h-16" />

        <div className="flex   w-96 md:w-screen ">
          <nav className="text-white flex  flex-wrap lg:flex-nowrap md:flex-wrap gap-4 text-base md:text-center  ml-auto mr-auto pl-4">
            <ul>
              <li>Politica de privacidade</li>
            </ul>
            <ul>
              <li>Acordo de inscrição</li>
            </ul>
            <ul>
              <li>Ajuda</li>
            </ul>
            <ul>
              <li>Dispositivos compatíveis</li>
            </ul>
            <ul>
              <li>Publicidad personalizada</li>
            </ul>
          </nav>
        </div>
        <div className="text-white md:w-2/5 w-96">
          <p className="text-center text-base">
            Disney+ es un servicio por suscripción de pago, su contenido está
            sujeto a disponibilidad. El servicio Disney+ es comercializado por
            Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
          </p>
        </div>

        <div className="text-white text-base">
          <p>© Disney. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
