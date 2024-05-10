import React from 'react'
import Ticktok from '../assets/images/svg/ticktok.svg'
import Insta2 from '../assets/images/svg/insta2.svg'
const Footer = () => {
    return (
        <section className='footer_baground margin_top_1'>
            <div className='container max_width_1140'>
                <div className=' d-flex flex-column justify-content-center align-items-center padding_top_150'>
                    <h2 className=' text-white font_family_Eurostile_Extended fw-bold font_size_lg line_height_lg mb-0'>Hypervive</h2>
                    <p className=' font_family_manrope mb-0 fw-normal font_size_xsm line_height_md text_gray pt-3 '>Connect with us on social media</p>
                    <div className=' d-flex gap-2 align-items-center pt-3 pb-4'>
                        <a href="https://open.spotify.com/" target='_blank'><img className='cursor_pointer footer_icon' src={Ticktok} alt="ticktok" /></a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'> <img className='cursor_pointer footer_icon' src={Insta2} alt="insta" /></a>
                    </div>
                </div>
            </div>
            <div className='footer_line'></div>
            <p className=' font_family_manrope mb-0 fw-normal font_size_xsm line_height_md text_gray text-center pt-2 pb-2'>Copyright © 2024 HyperVive | All Rights Reserved.</p>
        </section>
    )
}

export default Footer