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

import ServiceArea from '../../components/Services/Services';

const Service = () => {
   return (
      <>
         <SEO pageTitle={'Service'} />
         <Header />
         <BgShape />
         <ServiceArea />
         {/* <BrandArea spacing="pb-65 pt-80" /> */}
         {/* <Testimonial /> */}
         {/* <CarList /> */}
         {/* <OurFleet /> */}
         <Footer />
      </>
   );
};

export default Service;