import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificItem } from '../../redux/features/productSlice';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const TrendingLandmark = () => {
   // const trendingItems = useSelector((state) => state.products.products);
   // const dispatch = useDispatch();
   // // handleDetailsProduct
   // const handleDetailsProduct = (id) => {
   //    dispatch(specificItem(id))
   // }
   
const cars = [
   {
     id: 1,
     name: 'Car Model 1',
     type: 'Sedan',
     passengerCapacity: 4,
     pricePerDay: 150,
     image: 'assets/img/trending/car-1.png',
   },
   {
     id: 2,
     name: 'Car Model 2',
     type: 'SUV',
     passengerCapacity: 5,
     pricePerDay: 200,
     image: 'assets/img/trending/car-1.png',
   },
   {
      id: 3,
      name: 'Car Model 2',
      type: 'SUV',
      passengerCapacity: 5,
      pricePerDay: 200,
      image: 'assets/img/trending/car-1.png',
    },
    {
      id: 4,
      name: 'Car Model 2',
      type: 'SUV',
      passengerCapacity: 5,
      pricePerDay: 200,
      image: 'assets/img/trending/car-1.png',
    },
    {
      id: 5,
      name: 'Car Model 2',
      type: 'SUV',
      passengerCapacity: 5,
      pricePerDay: 200,
      image: 'assets/img/trending/car-1.png',
    },
    {
      id: 6,
      name: 'Car Model 2',
      type: 'SUV',
      passengerCapacity: 5,
      pricePerDay: 200,
      image: 'assets/img/trending/car-1.png',
    },
   // Add more cars here
 ];
   return (
      <>
         <section className="trending__area pt-110 pb-110 ">
            <div className="container">
            <div className="car-carousel mb-3">
               <div className="fleet">
                  <span>Our Fleets</span>
                  <span>View all</span>
               </div>
               <Carousel showArrows={false} showStatus={false} showThumbs={false} 
               emulateTouch={true} 
               infiniteLoop={false} 
               dynamicHeight={false} 
               centerMode={true} centerSlidePercentage={30}>
               {cars.map((car) => (
                  <div key={car.id} className="car-card">
                     <div className="car-detail">
                     <div className="car-name">{car.name}<br/><p className='car-type mb-2'>{car.type}</p></div>
            
                     <button className="favorite-button">❤</button>
                     </div>
                     <img src={car.image} alt={car.name} />
                     <div className="passenger-capacity">
                        Passengers: {car.passengerCapacity} people
                     </div>
                     <div className="car-details">
                     
                     
                     <div className="price">{car.pricePerDay} AED/day</div>
                     <button className="book-now">Book Now</button>
                     </div>
                  </div>
               ))}
               </Carousel>
            </div>

               {/* <div className="row align-items-end d-none">
                  <div className="col-xxl-6 col-xl-6 col-lg col-md-8">
                     <div className="section__title-wrapper mb-50">
                        <h2 className="section__title">Trending <br /> Landmark Themes</h2>
                        <p>Jeffrey pardon me jolly good.</p>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg col-md-4">
                     <div className="trending__more d-flex justify-content-md-end  mb-50">
                        <Link href="/product"><a  className="m-btn m-btn-border"><span></span>Explore Cloneables</a></Link>
                     </div>
                  </div>
               </div>
               <div className="row d-none">

                  {
                     trendingItems.slice(0,9).map((trending, index) => {
                        return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                           <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                              <div className="trending__thumb mr-25">
                                 <div onClick={()=>handleDetailsProduct(trending.id)} className="trending__thumb-inner fix">
                                    <Link href='/product-details'>
                                       <a >
                                          <img src={trending.img} alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="trending__content">
                                 <h3 onClick={()=>handleDetailsProduct(trending.id)} className="trending__title">
                                    <Link href="/product-details"><a >{trending.title}</a></Link>
                                 </h3>
                                 <p>Knees up arse blimey say happy days.</p>
                                 <div className="trending__meta d-flex justify-content-between">
                                    <div className="trending__tag">
                                       <a href="#">{trending.category}</a>
                                    </div>
                                    <div className="trending__price">
                                       <span>{`$${trending.price}`}</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div> */}
            </div>
         </section>
      </>
   );
};

export default TrendingLandmark;