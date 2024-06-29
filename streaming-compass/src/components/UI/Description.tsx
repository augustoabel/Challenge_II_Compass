interface PropDescription {
  description: string;
}

const Description: React.FC<PropDescription> = ({ description }) => {
  return (
    <div className="text-white font-normal text-xl md:max-w-719">
      {description}
    </div>
  );
};

export default Description;
