interface InfoProps {
  info: string;
}

const Info: React.FC<InfoProps> = ({ info }) => {
  return <div className="text-white font-normal text-base">{info}</div>;
};

export default Info;
