interface TitleSectionProps {
  name: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ name }) => {
  return <h1 className="text-white text-4xl font-bold">{name}</h1>;
};

export default TitleSection;
