import React from 'react'
import Aboutus from '../assets/about-us.png'

export default function AboutUs() {
  return (
    <>
        <section id='about' className=' h-full flex items-center relative py-12'>
            <div className='container mx-auto grid lg:grid-cols-2 grid-cols-1'>
                <div className='flex justify-center xl:p-0 lg:p-6 p-4'>
                    <img src={Aboutus} alt="" />
                </div>
                <div className='flex flex-col gap-3 self-center xl:p-4 lg:p-6 p-4'>
                    <h1 className='lg:text-7xl text-5xl font-font2'>ABOUT US <span className='text-pink'> .</span></h1>
                    <p className='lg:text-xl text-base font-font2 opacity-80'>Welcome to LGS, your trusted partner for all your industry needs. With a commitment to excellence and a passion for innovation, we have been serving clients globally since year of establishment.</p>
                    <p className='lg:text-2xl text-xl font-font2'>At LGS, we believe that this sector is not just about providing products or services; it's about creating meaningful connections and delivering exceptional value to our clients. We are driven by a simple yet powerful philosophy: to empower businesses and individuals by leveraging the power of industry.Our team is comprised of highly skilled professionals who are experts in their respective fields. From talented web designers and developers to creative digital marketers and technical support specialists, we have assembled a team of dedicated individuals who are passionate about what they do. Together, we work collaboratively to bring your vision to life and exceed your expectations. We believe in fostering long-term partnerships with our clients, based on trust, transparency, and mutual success. We strive to be more than just a service provider; we want to be your strategic partner, supporting your growth and helping you achieve your business objectives. Your success is our success, and we are fully committed to your satisfaction.</p>
                </div>
            </div>
        </section>
    </>
  )
}
