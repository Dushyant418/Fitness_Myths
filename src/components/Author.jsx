import React from 'react'
import Profile from '../assets/images/profile.png'
import Insta from '../assets/images/svg/insta-icon.svg'
import Circle from '../assets/images/circle.png'
import Ellipse1 from '../assets/images/section5-ellipse1.png'
import Ellipse2 from '../assets/images/section5-ellipse2.png'

const Author = () => {
    return (
        <section className=' bg-black position-relative'>
            <img className='position-absolute section5_ellipse1 d-none d-lg-block' src={Ellipse1} alt="ellipse1" />
            <img className='position-absolute section5_ellipse2 d-none d-lg-block' src={Ellipse2} alt="ellipse2" />
            <div className='container max_width_1200 padding_bottom_201'>
                <div className='row padding_top_115 pt-5 pt-lg-0'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start pb-4 pb-lg-0'>
                        <div className='position-relative'>
                            <img className='max_width_539 ' src={Profile} alt="profile-card" />
                            <img className='position-absolute circle_position d-none d-lg-block' src={Circle} alt="circle-img" />
                        </div>

                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-end'>
                        <div className='max_width_504'>
                            <h2 className=' fw-bold font_size_xl line_height_xl text-white font_family_Eurostile_Extended text-capitalize mb-0'>About the <span className='text_yellow'>Author</span></h2>
                            <p className='font_family_manrope mb-0 fw-normal font_size_md line_height_xlg text_off_white pt-3'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</p>
                            <p className='font_family_manrope mb-0 fw-normal font_size_md line_height_xlg text_off_white pt-2'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</p>
                            <p className='font_family_manrope mb-0 fw-normal font_size_md line_height_xlg text_off_white pt-2 padding_bottom_29'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</p>
                            <div className=' d-flex align-items-center gap_17 pb-2'>
                                <img src={Insta} alt="insta-icon" />
                                <p className=' fw-bold font_size_lg line_height_lg mb-0 text-white font_family_Eurostile_Extended'>Hypervive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Author