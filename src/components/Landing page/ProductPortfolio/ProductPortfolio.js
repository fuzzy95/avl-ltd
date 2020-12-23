import GreenButton from "../../Typographys/Buttons/GreenButton";
import PrimaryHeader from "../../Typographys/Headers/PrimaryHeader";
import SectionImage from "../../Typographys/SectionImage/SectionImage";

const ProductPortfolio = () => {
  return (
    <>
      <div className="text-black">
        <div className="container font-roboto mx-auto py-32 lg:px-20 px-4 mt-32">
          <div className="w-full flex lg:flex-row flex-col lg:justify-between items-center mt-4 lg:space-x-4 space-x-0">
            <div className="flex flex-col lg:items-around items-center">
              <div className="mb-2 lg:self-start self-center">
                <PrimaryHeader text="Product Portfolio" />
              </div>
              <div className="w-full py-4 mb-6">
                <div className="flex flex-wrap justify-start space-x-4">
                  <span className="2xl:text-base text-xs font-medium cursor-pointer hover:text-yellow">
                    ALL
                  </span>
                  <span className="2xl:text-base text-xs font-medium cursor-pointer hover:text-yellow">
                    HR
                  </span>
                  <span className="2xl:text-base text-xs font-medium cursor-pointer hover:text-yellow">
                    CSR
                  </span>
                </div>
              </div>
              <div className="flex flex-col 2xl:-space-y-20 space-y-16">
                <SectionImage src="/img/factory1.jpg" />
                <SectionImage src="/img/factory1.jpg" />
              </div>
            </div>
            <div className="lg:-mt-20 mt-auto flex flex-col items-between">
              <div className="flex flex-1 flex-col 2xl:-space-y-20 space-y-16">
                <SectionImage src="/img/factory1.jpg" />
                <SectionImage src="/img/factory1.jpg" />
              </div>
              <div className="w-full flex justify-between items-center mt-16">
                <div className="flex flex-col items-start text-base text-gray-600">
                  <p>We've Completed More Then</p>
                  <span className="font-bold text-5xl text-black mt-4 mb-4">
                    530
                  </span>
                  <p>Projects for Our Amazing Clients</p>
                </div>
                <GreenButton to="/" text="View More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPortfolio;
