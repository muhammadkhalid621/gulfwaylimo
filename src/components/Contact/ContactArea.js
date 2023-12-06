import React from 'react';

const ContactArea = () => {
   return (
      <>
      <section className="contact__area pt-105 pb-145">
            {/* <div className="contact__shape">
               <img className="man-1" src="assets/img/icon/sign/man-1.png" alt=""/>
               <img className="circle" src="assets/img/icon/sign/circle.png" alt=""/>
               <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt=""/>
               <img className="dot" src="assets/img/icon/sign/dot.png" alt=""/>
               <img className="bg" src="assets/img/icon/sign/sign-up.png" alt=""/>
            </div> */}
            <div className="container">
               <div className='row'>
                  <div className='col-xxl-7'>
                     <img src="assets/img/about/one.png"/>
                  </div>
                  <div className='col-xxl-5 p-0'>
                     <h2 className='page__title-2 mb-2'>
                     Gulf Way Limousine
                     </h2>
                     <p className='content-description my-4 text-left'>At Gulf Way Luxury Transport Services, we are committed to redefining your travel experience through unparalleled chauffeur services.
                         With a focus on luxury, comfort, and professionalism, we bring a touch of sophistication to every journey, ensuring that you arrive at your destination not just on time, but in style.</p>

                        <button type='button' className='m-btn m-btn-border-2 w-40p '>Join Us</button>
                        <hr/>
                        <p className='font-weight-500 content-description '>
                        Have any questions?<br/>
                        Contact us!
                        </p>
                        <span className='content-description'>+971 (58) 1234888</span><br/>
                        <span className='content-description'><a href="mailto://booking@gulf-way.com">booking@gulf-way.com</a></span>

                  </div>
               </div>
               <div className="row d-none">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mb-55">
                        <h2 className="page__title-2">Leave Us a Message.</h2>
                        <p>Jolly good bevvy butty its all gone to pot that quaint so I said cheers.</p>
                     </div>
                  </div>
               </div>
             
               <div className=" row">
                  <div className="col-xxl-7 col-xl-7 d-none">
                     <div className="contact__wrapper  white-bg">
                        <div className="contact__form">
                           <form >
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Full Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Full name" name="name"/>
                                          <i className="fal fa-user"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Work email</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="e-mail address" name="email"/>
                                          <i className="fal fa-envelope"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Company Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Company Name" name="subject"/>
                                          <i className="fal fa-smile"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Website</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Website" name="website"/>
                                          <i className="fal fa-globe"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Message</h5>
                                       <div className="contact__input textarea">
                                          <textarea required placeholder="Tell us a bil about your project" name="message"></textarea>
                                          <i className="fal fa-comment"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-12 col-xl-12">
                     <div className="contact__map">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d903.0010489899132!2d55.221657275907404!3d25.135548995023953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA4JzA4LjAiTiA1NcKwMTMnMjIuNCJF!5e0!3m2!1sen!2sae!4v1700115881002!5m2!1sen!2sae"></iframe>
                         
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;