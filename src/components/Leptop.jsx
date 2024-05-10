import React from 'react'
import Section3_image from '../assets/images/leptop.png'
import Ellipse3 from '../assets/images/section3-ellipse.png'

const Leptop = () => {
  return (
      <section className='bg-black position-relative margin_top_1'>
          <img  className=' position-absolute ellipse3 d-none d-md-block' src={Ellipse3} alt="ellipse3" />
          <div className='container max_width_1140'>
              <div className='row box_padding_bottom'>
                  <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start pb-4 pb-lg-0'>
                      <img className=' max_width_530 w-100' src={Section3_image} alt="leptop" />
                  </div>
                  <div className='col-12 col-lg-6 d-flex justify-content-lg-end align-items-center justify-content-center'>
                      <div className='max_width_522'>
                          <h3 className='fw-bold font_size_xl line_height_xl text-white mb-0 padding_bottom_29 font_family_Eurostile_Extended'>Let Me Know Where <span className='text_yellow'>You Want Me To Send It</span></h3>
                          <input className='Name_input w-100 font_family_manrope fw-normal font_size_sm line_height_xmd text-white' type="text" placeholder='Name' />
                          <input className='Name_input w-100 font_family_manrope fw-normal font_size_sm line_height_xmd text-white margin_top_13' type="e-mail" placeholder='Email' />
                          <div className='padding_top_47 d-inline-block'>
                              <div className='border-btn cp position-relative '>
                                  <button className=' black text-nowrap  font_family_Eurostile_Extended fw-bold font_size_xsm line_height_xsm btn-get-in-touch'>Send It Here!</button>
                                  <div className="btn-line position-absolute ">

                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Leptop