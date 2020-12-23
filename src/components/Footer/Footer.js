const Footer = () => {
  return (
    <>
      <div className="container mx-auto lg:px-20 px-4 py-8 mt-32 text-black">
        <div className="flex sm:flex-row flex-col justify-between items-center space-y-4">
          <div className="flex space-x-8 text-2xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <p className="text-black font-light text-base">
            © 2020 Aooareles Village Limited. All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
