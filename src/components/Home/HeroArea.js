import React, { useState } from 'react';

const HeroArea = () => {
   const [activeTab, setActiveTab] = useState('oneWay'); // To manage the active tab

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };
   const [selectedHour, setSelectedHour] = useState(1);
   const handleHourChange = (e) => {
      setSelectedHour(e.target.value);
   };
   return (
      <>
          <section className="hero__area hero__height grey-bg-3 d-flex align-items-center">
            <div className="hero__shape">
               <img className="circle" src="assets/img/icon/hero/hero-circle.png" alt="circle"/>
               <img className="circle-2" src="assets/img/icon/hero/hero-circle-2.png" alt="circle"/>
               <img className="square" src="assets/img/icon/hero/hero-square.png" alt="circle"/>
               <img className="square-2" src="assets/img/icon/hero/hero-square-2.png" alt="circle"/>
               <img className="dot" src="assets/img/icon/hero/hero-dot.png" alt="circle"/>
               <img className="triangle" src="assets/img/icon/hero/hero-triangle.png" alt="circle"/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8">
                     <div className="hero__content">
                        <h3 className="hero__title text-center">
                          Request a ride now
                         {/*    WordPress Themes Collection. */}
                        </h3>
                        {/* <p>{`The bee's knees pardon you plastered it's all gone to pot cheeky bugger wind up down.`}</p> */}
                        <div className="hero__search">
                       
                           <div className="card  br-20 ">
                              <div className='card-header  mb-0 pb-0 brh-20'>
                              <ul className="nav nav-tabs">
                                 <li className="nav-item">
                                    <a
                                       className={`nav-link ${activeTab === 'oneWay' ? 'active' : ''}`}
                                       onClick={() => handleTabChange('oneWay')}
                                    >
                                       One Way
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className={`nav-link ${activeTab === 'hourlyRate' ? 'active' : ''}`}
                                       onClick={() => handleTabChange('hourlyRate')}
                                    >
                                       Hourly Hire
                                    </a>
                                 </li>
                                 </ul>
                              </div>
                              <div className='card-body p-3'>
                            

                                 <div className="tab-content">
                                 <div
                                    className={`tab-pane ${activeTab === 'oneWay' ? 'active' : ''}`}
                                    id="oneWay"
                                 >
                                    <form>
                                       <div className="mb-3">
                                       <label htmlFor="pickupLocation">Pickup Location</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="pickupLocation"
                                          placeholder="Enter pickup location"
                                       />
                                       </div>
                                       <div className="mb-3">
                                       <label htmlFor="dropOffLocation">Drop-off Location</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="dropOffLocation"
                                          placeholder="Enter drop-off location"
                                       />
                                       </div>
                                       <div className="mb-3">
                                       <label htmlFor="pickupDate">Pickup Date</label>
                                       <input
                                          type="date"
                                          className="form-control"
                                          id="pickupDate"
                                       />
                                       </div>
                                       <div className="mb-3">
                                       <label htmlFor="dropOffDate">Drop-off Date</label>
                                       <input
                                          type="date"
                                          className="form-control"
                                          id="dropOffDate"
                                       />
                                       </div>
                                       <p className='text-center mb-3 w-100 p-0'>Chauffer will wait 15 minutes free of charge</p>
                                       <button type="submit" className="m-btn  btn-block"> <span></span> search</button>
                                    </form>
                                 </div>
                                 <div
                                    className={`tab-pane ${activeTab === 'hourlyRate' ? 'active' : ''}`}
                                    id="hourlyRate"
                                 >
                                    <form>
                                       <div className="mb-3">
                                       <label htmlFor="pickupLocation">Pickup Location</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="pickupLocation"
                                          placeholder="Enter pickup location"
                                       />
                                       </div>
                                       <div className="mb-3">
                                       <label htmlFor="hourlyHire">Hourly Hire</label>
                                          <select
                                          className="form-control"
                                          id="hourlyHire"
                                          value={selectedHour}
                                          onChange={handleHourChange}
                                          >
                                          {[...Array(24).keys()].map((hour) => (
                                             <option key={hour} value={hour + 1}>
                                                {`${hour + 1} ${hour === 0 ? 'hour' : 'hours'}`}
                                             </option>
                                          ))}
                                          </select>
                                       </div>
                                       <div className="mb-3">
                                       <label htmlFor="pickupDate">Pickup Date</label>
                                       <input
                                          type="date"
                                          className="form-control"
                                          id="pickupDate"
                                       />
                                       </div>
                                       <div className="mb-3">
                                       <label htmlFor="dropOffDate">Drop-off Date</label>
                                       <input
                                          type="date"
                                          className="form-control"
                                          id="dropOffDate"
                                       />
                                       </div>
                                       <p className='text-center mb-3 w-100 p-0'>Chauffer will wait 15 minutes free of charge</p>
                                       <button type="submit" className="m-btn  btn-block"> <span></span> search</button>
                                    </form>
                                 </div>
                                 </div>
                              </div>
                              </div>
                          
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="hero__thumb-wrapper scene ml-70 p-relative">
                        <div className="hero__thumb one d-none d-lg-block">
                           <img className="layer " data-depth="0.2" src="assets/img/hero/hero-1.png"  alt=""/>
                        </div>
                        {/* <div className="hero__thumb two d-none d-md-block">
                           <img className="layer" data-depth="0.3" src="assets/img/hero/hero-2.jpg" alt=""/>
                        </div>
                        <div className="hero__thumb three d-none d-md-block">
                           <img className="layer" data-depth="0.4" src="assets/img/hero/hero-3.jpg" alt=""/>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;