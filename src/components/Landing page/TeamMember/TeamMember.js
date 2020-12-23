import PrimaryHeader from "../../Typographys/Headers/PrimaryHeader";

const TeamMemberComponents = ({ text, src }) => (
  <div className="flex flex-col items-center">
    <img
      className="lg:w-48 w-40 lg:h-48 h-40 rounded-full bg-gray-200"
      src={src}
      alt="memberimage"
    />
    <h2 className="uppercase text-2xl tracking-tight mt-4">{text}</h2>
  </div>
);

const TeamMember = () => {
  return (
    <div className="bg-black font-roboto text-white skew mt-24">
      <div className="container mx-auto px-20 pt-6 pb-16 skewrev">
        <div className="flex flex-col justify-between items-center">
          <div className="w-full py-8 flex flex-col md:items-start items-center">
            <p className="text-white text-lg mb-14 mt-8 lg:w-4/5 w-full md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <PrimaryHeader text="OUR CREATIVE TEAM" />
          </div>
          <div className="lg:w-5/6 w-full flex md:flex-row flex-col justify-between items-center mt-10">
            <div className="lg:-mt-20 md:-mt-40 mt-0">
              <TeamMemberComponents
                text="Mark j Stevens"
                src="/img/factory1.jpg"
              />
            </div>
            <div className="mt-20">
              <TeamMemberComponents
                text="Richard Stevens"
                src="/img/factory1.jpg"
              />
            </div>
            <div className="lg:mt-60 md:mt-80 mt-20">
              <TeamMemberComponents
                text="Lisa Warrior"
                src="/img/factory1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
