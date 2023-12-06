import Slider from "react-slick";

const OurFleet = () => {
	const fleetData = [
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
	]
	// slick setting
	const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
           breakpoint: 991,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           }
         },
         {
           breakpoint: 767,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             initialSlide: 2
           }
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    };
	return (
		<>
			<div className="testimonial__area pt-50 pb-115 fix">
				<div className="container">
                    <h2 className="text-center mb-80 mt-4">Our Fleet</h2>
					<div className="testimonial__inner p-relative pb-110">
						{/* <div className="testimonial__bg p-absolute">
							<img src="assets/img/bg/testimonial-bg.png" alt="" />
						</div> */}
						<div className="row">
                            
							<div className="col-xxl-12">
								<Slider {...settings} className="testimonial__slider wow fadeInUp" data-wow-delay=".5s">
									{
										fleetData.map((fleet,index) => {
											return <div key={index} className="testimonial__item white-bg">
										 <div key={fleet.id} className="car-card">
                     <div className="car-detail">
                     <div className="car-name">{fleet.name}<br/><p className='car-type mb-2'>{fleet.type}</p></div>
            
                     <button className="favorite-button">❤</button>
                     </div>
                     <img src={fleet.image} alt={fleet.name} />
                     <div className="passenger-capacity">
                        Passengers: {fleet.passengerCapacity} people
                     </div>
                     <div className="car-details">
                     
                     
                     <div className="price">{fleet.pricePerDay} AED/day</div>
                     <button className="book-now">Book Now</button>
                     </div>
                  </div>
										</div>
										})
									}
								</Slider>
						
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurFleet;