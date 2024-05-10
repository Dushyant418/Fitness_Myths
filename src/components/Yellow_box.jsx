import React from 'react'
import Leptop_2 from '../assets/images/leptop-2.png'

const Yellow_box = () => {
    return (
        <section className=' bg-black margin_top_1'>
            <div className='container max_width_1140'>
                <div className='footer_box position-relative'>
                    <div className='row'>
                        <div className='col-12 col-lg-7 d-flex justify-content-center justify-content-lg-start pb-4 pb-lg-0'>
                            <div className=' max_width_520'>
                                <h2 className=' font_family_Eurostile_Extended fw-bold font_size_xxl line_height_2xl text-black mb-0'>7 Fitness Myths to Avoid</h2>
                                <p className=' font_family_manrope mb-0 fw-normal font_size_md line_height_xlg text-black'>Grab your free copy now!</p>
                                <div className='border-btn2 cp position-relative  d-inline-block mt-4'>
                                    <button className=' black text-nowrap  font_family_Eurostile_Extended fw-bold font_size_xsm line_height_xsm btn-get-in-touch2'>Download For Free</button>
                                    <div className="btn-line2 position-absolute ">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end'>
                            <img className=' position-leptop leptop2_position w-100 max_width_498'  src={Leptop_2} alt="leptop" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Yellow_box