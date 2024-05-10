import React from 'react'
import Ellipse from '../assets/images/box-ellipse.png'
import Ellipse2 from '../assets/images/section2-ellipse.png'

function Downlod() {
  return (
          <section className='bg-black position-relative margin_top_1'>
          <img className=' position-absolute ellipse2' src={Ellipse2} alt="ellipse2" />
          <div className=' container max_width_1140 padding_top_182 box_padding_bottom'>
              <div className='section2_box w-100 position-relative'>
                  <img src={Ellipse} alt="ellipse" className='position-absolute box_ellipse w-100 z-0' />
                  <div className='max_width_995'>
                      <p className='text_off_white font_family_manrope text-center fw-normal font_size_md line_height_xlg mb-0'>If
                              you’re reading this, most likely you’re in search of the keys that unlock world class
                              performance…..performance that
                              can get you to the next level of your playing career …. And let you create a lifestyle that
                              you’ve
                              always dreamed of…
                              right?</p>

                      <p className='text_off_white font_family_manrope text-center fw-normal font_size_md line_height_xlg mb-0 padding_top_15'>
                              Well
                              there’s a big obstacle in your way…… one that you most likely don’t even notice….. like a hacker
                              whose stolen your
                              starting spot…..and you have no control over it.</p>

                      <p className='text_off_white font_family_manrope text-center fw-normal font_size_md line_height_xlg mb-0 padding_top_15'>
                              That
                          annoying little hacker is simply a <span className='fw-bold'>lack of knowledge</span>. Sounds
                              ridiculous, right? Stick
                              with me
                              here…. If I knew back
                              then (in my playing days) what I know now, I would probably still be playing instead of writing
                              this
                              eBook.</p>

                      <p className='text_off_white font_family_manrope text-center fw-normal font_size_md line_height_xlg mb-0 padding_top_15'>
                              Early
                              on in my career I realized that in order to get to the next level I needed to get stronger,
                              pack on some lean
                              muscle, improve my endurance, increase my sprint speed & develop robust change of direction
                              qualities.</p>

                      <p className='text_off_white font_family_manrope text-center fw-normal font_size_md line_height_xlg mb-0 padding_top_15'>
                              Problem
                              was... I had no idea how to improve these qualities. I needed help. I spent majority of my
                              time researching on
                              social media platforms & doing workouts that got me minimal results.</p>

                      <p className='text_off_white font_family_manrope text-center fw-normal font_size_md line_height_xlg mb-0 padding_top_15'>
                              Once I
                              figured out the secret sauce to improving all the qualities mentioned above, getting fit
                              became effortless. No
                              more stress, disappointment, anger or frustration. I want you to feel that too. This short eBook
                              can
                              provide you with
                              the tools you need to start getting better results out of your current programs, while doing
                              less
                              not more.</p>
                      </div>
                  <div className='d-flex justify-content-center padding_top_32'>
                                          <div className='border-btn cp position-relative '>
                                                  <button className=' black text-nowrap  font_family_Eurostile_Extended fw-bold font_size_xsm line_height_xsm btn-get-in-touch'>Download Now</button>
                                                  <div className="btn-line position-absolute ">

                                                  </div>
                                          </div>
                      </div>
              </div>
          </div>
      </section>
      
  )
}

export default Downlod