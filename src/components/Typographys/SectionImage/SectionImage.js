const SectionImage = ({ src }) => {
  return (
    <>
      <div className="2xl:w-100 xl:w-97 2xl:h-99 xl:h-96 mt-14">
        <img src={src} alt="factoryImage" />
      </div>
    </>
  );
};

export default SectionImage;
