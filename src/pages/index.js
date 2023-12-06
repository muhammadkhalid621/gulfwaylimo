import Head from 'next/head';
import BannerArea from '../components/Home/BannerArea';
import BrandArea from '../components/Home/BrandArea';
import CategoryArea from '../components/Home/CategoryArea';
import Cta from '../components/Home/Cta';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroArea';
import Products from '../components/Home/Products';
import Subscribe from '../components/Home/Subscribe';
import Testimonial from '../components/Home/Testimonial';
import CarList from '../components/Home/CarList';
import SEO from '../components/seo';

export default function Home() {

  return (
    <>
      <SEO pageTitle={'Home'} />
      <Header />
      <HeroArea />
      <CategoryArea />
      <CarList />
      <Testimonial />
      <Cta />
      {/* <Subscribe />
      <Products />
      <Cta />
      <BrandArea />
   
      <BannerArea /> */}
      <Footer />
    </>
  )
}
