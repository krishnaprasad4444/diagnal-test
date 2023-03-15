const ThumbnailCard = ({ owner, imageUrl }) => {
  const getImage = () => {
    let image = null;
    try {
      image = require(`../../assets/images/${imageUrl}`);
    } catch (e) {
      image = require(`../../assets/images/placeholder_for_missing_posters.png`);
    }
    return image;
  };

  return (
    <div className="w-full overflow-hidden">
      <img
        className="w-full h-64 2xl:h-96 object-center"
        src={getImage()}
        alt={"poster"}
      />
      <div className="mt-3 2xl:mt-6">
        <div className="font-regular text-white text-sm sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
          {owner}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCard;
