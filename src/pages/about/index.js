import React from 'react';
import AboutArea from '../../components/About/AboutArea';
import BgShape from '../../components/common/BgShape';

// import BrandArea from '../../components/Home/BrandArea';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
// import Testimonial from '../../components/Home/Testimonial';
import CarList from '../../components/Home/CarList';
import SEO from '../../components/seo';
import OurFleet from '../../components/Home/OurFleet';

const About = () => {
   return (
      <>
         <SEO pageTitle={'About'} />
         <Header />
         <BgShape />
         <AboutArea />
         {/* <BrandArea spacing="pb-65 pt-80" /> */}
         {/* <Testimonial /> */}
         {/* <CarList /> */}
         <OurFleet />
         <Footer />
      </>
   );
};

export default About;