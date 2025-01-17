import { useState } from "react";
import GreenButton from "../../Typographys/Buttons/GreenButton";
import PrimaryHeader from "../../Typographys/Headers/PrimaryHeader";

const Image = ({ src }) => (
  <div className="2xl:w-100 xl:w-97 2xl:h-99 xl:h-96 mt-14">
    <img src={src} alt="factoryImage" />
  </div>
);

const FactoryDetails = () => {
  const [open, setOpen] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  const handleOpen = (index) => {
    setOpen({ ...open, activeObject: open.objects[index] });
  };

  const openStyles = (index) => {
    if (open.objects[index] === open.activeObject) {
      return "2xl:text-base text-xs font-medium cursor-pointer text-yellow";
    } else {
      return "2xl:text-base text-xs font-medium cursor-pointer text-black hover:text-yellow";
    }
  };

  return (
    <>
      <div className="text-black">
        <div className="container font-roboto mx-auto lg:px-20 px-4 mt-32">
          <div className="w-full flex lg:flex-row flex-col lg:justify-between items-center mt-4 lg:space-x-4 space-x-0">
            <div className="flex flex-col lg:items-around items-center">
              <div className="mb-2 lg:self-start self-center">
                <PrimaryHeader text="FACTORY DETAILS" />
              </div>
              <div className="flex justify-between w-full border-b-4 border-gray-500 py-4 mb-6">
                {open.objects.map((elements, index) => (
                  <div className="flex flex-wrap justify-between space-x-4">
                    <span
                      key={index}
                      onClick={() => {
                        handleOpen(index);
                      }}
                      className={openStyles(index)}
                    >
                      All
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col 2xl:-space-y-20 space-y-16">
                <Image src="/img/factory1.jpg" />
                <Image src="/img/factory1.jpg" />
              </div>
            </div>
            <div className="lg:-mt-60 mt-auto flex flex-col items-around">
              <div className="flex flex-col 2xl:-space-y-20 space-y-16">
                <Image src="/img/factory1.jpg" />
                <Image src="/img/factory1.jpg" />
                <div className="flex justify-between items-center mt-22">
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
      </div>
    </>
  );
};

export default FactoryDetails;
