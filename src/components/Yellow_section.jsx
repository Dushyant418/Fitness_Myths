import React from 'react'
import Card_image from '../assets/images/section4-card.png'

const Yellow_section = () => {
    return (
        <section className='Yellow_section'>
            <div className='container max_width_1140'>
                <div className='row flex-column-reverse flex-lg-row pt-5 pb-5'>
                    <div className='col-12 col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start'>
                        <div className=' max_width_704'>
                            <h2 className='fw-bold font_size_xl line_height_xxl mb-0 font_family_Eurostile_Extended text-capitalize'>With the right knowledge maintaining and improving your fitness becomes effortless and enjoyable. Stop wasting time you don’t have!</h2>
                        </div>
                    </div>
                    <div className='col-12 col-lg-5 d-flex justify-content-center pb-4 pb-lg-0'>
                        <img className=' max_width_310 w-100' src={Card_image} alt="Card_image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Yellow_section