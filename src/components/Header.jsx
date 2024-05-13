import React from 'react';
import Header_image from '../assets/images/hero-img.png';

const Header = () => {
    return (
        <section className='hero_baground'>
            <div className='container max_width_1140'>
                <nav className='d-flex justify-content-end nav_padding'>
                    <div className='border-btn cp position-relative '>
                        <button className=' black text-nowrap  font_family_Eurostile_Extended fw-bold font_size_xsm line_height_xsm btn-get-in-touch'>GET IN TOUCH</button>
                        <div className="btn-line position-absolute ">
                        </div>
                    </div>
                </nav>
            </div>
            <div className=' container max_width_1140'>
                <div className='row  padding_top_110 pt-5 pt-lg-0 padding_bottom_96'>
                    <div className='col-12 col-lg-8 d-flex align-items-center  justify-content-center justify-content-lg-start'>
                        <h2
                            className='text-white m-0 fw-bold font_size_xxl font_family_Eurostile_Extended line_height_2xl max_width_666 pb-4 pb-lg-0'>
                            Get The eBook That Reveals The <span className='text_yellow font_size_2xl line_height_3xl'>7 Fitness Myths</span> That Are Holding
                            You Back From Experiencing
                            Top-Level Fitness</h2>
                    </div>
                    <div className='col-12 col-lg-4 d-flex  justify-content-center justify-content-lg-start'>
                        <img src={Header_image} alt='img1' className=' w-100 max_width_338'/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header