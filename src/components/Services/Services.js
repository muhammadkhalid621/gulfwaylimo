// ServiceArea.js
import React, { useState, useEffect } from "react";
import ServiceCard from "../Services/ServiceCard";

const ServiceArea = () => {
  const services = [
    {
      title: "Airport Transfer",
      description:
        "There is no better treatment for your aches and pains after a long flight than a Gulf Way Luxury Transport Services airport shuttle that runs directly to your destination. For those who don’t relish interpreting foreign public transportation maps or arguing with local taxi services, Gulf Way Luxury Transport Services chauffeur offers a service that will drive you directly to your destination from the airport.",
      image: "../assets/img/service/one.png", // Replace with the actual image source
    },
    {
      title: "Intercity Rides",
      description:
        "Do you want to visit Dubai or other Emirates? Do you have some spare time between 2 flights? Ride in one of our luxurious limousines and discover why Dubai or other Emirates are continuously ranked as cities with the highest standards of living. Our chauffeurs know the areas they serve intimately and will happily show you the main attractions. The itinerary is individual and according to your personal desires and enjoy city sightseeing all over in dubai UAE. As with all our chauffeured services, you will only travel in your choice of the finest, latest-model luxury vehicles from the Gulf Way Limo",
      image: "../assets/img/service/two.png", // Replace with the actual image source
    },
    {
      title: "Corporate Chauffeur",
      description: "Securing corporate transportation in Dubai often comes with a hefty price tag. At Gulf Way Limo, we redefine luxury transportation services in Dubai, delivering unparalleled excellence. Our transport solutions are not only lavish but also cater to your budgetary considerations. Imagine arriving at your corporate meeting or event in the sophistication of a luxurious limousine—making a statement of style and professionalism. Gulf Way Limo understands the importance of maintaining a professional atmosphere during business meetings, and that's why we bring you a blend of regality and comfort at a price that won't break the bank. Whether it's an airport transfer or attendance at a meeting in Dubai, elevate your presence with our corporate transportation services, exuding style and elegance.",
      image: "../assets/img/service/three.png", // Replace with the actual image source
    },
    {
      title: "Event Chauffeur",
      description: "Planning transportation for events in Dubai can often be a challenging task. However, at Gulf Way Limo, we specialize in providing exceptional event chauffeur services in the city. Our commitment to delivering top-notch luxury transportation ensures that your events are not just occasions but unforgettable experiences. Offering budget-friendly transport solutions without compromising on opulence, Gulf Way Limo makes it effortless for you to add a touch of sophistication to your events. Imagine arriving at your special occasion in the elegance of a chauffeur-driven vehicle, setting the tone for a remarkable event. We understand the significance of seamless event logistics, and our Event Chauffeur service is tailored to bring you a perfect blend of style, comfort, and affordability. Whether it's a gala, wedding, or any other event in Dubai, let Gulf Way Limo elevate your experience with our event transportation services, ensuring you make a grand entrance with style and grace.",
      image: "../assets/img/service/four.png", // Replace with the actual image source
    },
    {
      title: "Dubai Tour",
      description: "Embarking on a Dubai tour is a captivating experience, but finding the right transportation can be a challenge. Look no further – at Gulf Way Limo, we offer unparalleled luxury transportation services tailored for your Dubai adventure. Our commitment to excellence extends to providing affordable transport options that align with your budget. Picture yourself exploring the wonders of Dubai in the comfort and opulence of a limousine. Gulf Way Limo recognizes that a tour of Dubai is not just a journey; it's an experience that should be marked with sophistication. That's why we bring you a perfect blend of regal service and affordability. Whether you're heading to iconic landmarks or immersing yourself in the vibrant culture of Dubai, our Dubai Tour transportation services ensure you travel in style and elegance. Elevate your Dubai tour experience with Gulf Way Limo, where every ride is a journey in luxury.",
      image: "../assets/img/service/five.png", // Replace with the actual image source
    },
    {
      title: "Wedding Chauffeur",
      description: "Embarking on the journey of a lifetime—your wedding day—is a momentous occasion, and Gulf Way Limo is here to make it truly unforgettable. While arranging wedding transportation in Dubai may seem like a costly endeavor, we, at Gulf Way Limo, present an exquisite offering of luxury wedding chauffeur services. Our commitment is to provide not only opulent transport but also affordable options that align with your wedding budget.\n\n Picture the ease of arriving at your wedding venue in a splendid chauffeur-driven vehicle, adding a touch of sophistication to your special day. Recognizing the significance of weddings, Gulf Way Limo ensures that your journey is marked by grace and comfort at an accessible cost.\n\n Whether you need transportation to the wedding venue, a photoshoot location, or even to the airport for your honeymoon getaway, Gulf Way Limo is dedicated to bringing you a blend of elegance and affordability. Make a grand entrance on your wedding day with our wedding chauffeur services, creating memories filled with style and glamour.",
      image: "../assets/img/service/six.png", // Replace with the actual image source
    },
  ];

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  useEffect(() => {
  
    setSelectedServiceIndex(0);
  }, []); 

  const handleServiceClick = (index) => {
    setSelectedServiceIndex(index);
  };

  return (
    <>
      <section className="about__area pt-100">
        <div className="container pb-4 about__cont">
          <div className="row bg-white about__cust">
            <div className="grid-container">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid-items text-center ${
                    selectedServiceIndex === index ? "active-card" : "non-selected"
                  }`}
                  onClick={() => handleServiceClick(index)}
                >
                  <ServiceCard title={service.title} image={service.image} />
                </div>
              ))}
            </div>
            {selectedServiceIndex !== null && (
              <div className="row mt-4 ">
                <div className="col-md-12 br-100 m-2 text-center">
                  <img
                    src={services[selectedServiceIndex].image}
                    alt={services[selectedServiceIndex].title}
                    className="selected-service-image"
                  />
                  <h4>{services[selectedServiceIndex].title}</h4>
                  <p className="description">
                    {services[selectedServiceIndex].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
