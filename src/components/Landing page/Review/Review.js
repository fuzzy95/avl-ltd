const ReviewComponent = ({ para, src, rname }) => (
  <div className="lg:w-1/3 w-full flex flex-col items-center">
    <i className="fas fa-quote-right text-white italic text-5xl" />
    <p className="text-center font-light text-xl text-white mt-10">{para}</p>
    <div className="flex flex-col items-center space-y-4 mt-14">
      <img className="h-28 w-28 rounded-full" src={src} alt="reviewimage" />
      <h3 className="text-white text-lg">{rname}</h3>
    </div>
  </div>
);

const Review = () => {
  return (
    <>
      <div className="text-black bg-yellow skew font-roboto">
        <div className="skewrev container mx-auto lg:px-20 px-4 py-12 mt-20">
          <h1 className="font-semibold uppercase font-oswald lg:text-6xl text-4xl lg:text-left text-center">
            Satisfied <span className="text-white">Customer</span>
          </h1>
          <div className="flex lg:flex-row flex-col lg:justify-evenly lg:-space-y-8 space-y-16 mt-20">
            <ReviewComponent
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod
      assumenda possimus optio soluta in blanditiis, labore vitae. Ex, similique
      doloremque vel corrupti aut est ad officiis animi ullam necessitatibus."
              src="/img/factory1.jpg"
              rname="Julia Miltese"
            />
            <ReviewComponent
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod
      assumenda possimus optio soluta in blanditiis, labore vitae. Ex, similique
      doloremque vel corrupti aut est ad officiis animi ullam necessitatibus."
              src="/img/factory1.jpg"
              rname="Sara Williams"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
