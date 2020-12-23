import React from "react";
import AboutUs from "../components/Landing page/AboutUs/AboutUs";
import Blogs from "../components/Landing page/Blogs/Blogs";
import Certifications from "../components/Landing page/Certifications/Certifications";
import Companies from "../components/Landing page/Companies/Companies";
import ContactForm from "../components/Landing page/ContactForm/ContactForm";
import FactoryDetails from "../components/Landing page/FactoryDetails/FactoryDetails";
import Header from "../components/Landing page/HeaderSection/Header";
import HrCrs from "../components/Landing page/HrCrs/HrCrs";
import ProductPortfolio from "../components/Landing page/ProductPortfolio/ProductPortfolio";
import Review from "../components/Landing page/Review/Review";
import TeamMember from "../components/Landing page/TeamMember/TeamMember";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <FactoryDetails />
      <TeamMember />
      <HrCrs />
      <Certifications />
      <ProductPortfolio />
      <Review />
      <Companies />
      <Blogs />
      <ContactForm />
    </>
  );
};

export default Home;
