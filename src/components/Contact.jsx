import React from 'react'
import Con from '../assets/location.png'
import mail from '../assets/mail.png'
import call from '../assets/call.png'
import backgroundImage from '../assets/contact-bg.jpg';

export default function Contact() {
  return (
    <>
        <section className='h-full font-font2 py-12'>
            <h1 className='text-7xl text-center font-font2 '>Contact</h1>
            <div className='bg-pink w-16 h-2 rounded-lg mx-auto'></div>
            <p className='text-center text-3xl font-font2 pt-2'>We would love to hear from you. Reach out us.</p>
            <div className='container flex flex-wrap gap-4 justify-evenly mx-auto text-white py-4 mt-6'>
                <div className='bg-bg-2 flex flex-col gap-1 items-center py-6 px-12 rounded'>
                    <img src={Con} alt="contact-us" />
                    <h1>Our Address</h1>
                    <p>29 Balmoral Road Birmingham B23 6NY</p>
                </div>
                <div className='bg-bg-2 flex flex-col gap-3 items-center py-6 px-8 rounded'>
                    <img src={mail} alt="contact-us" />
                    <h1>Email Us</h1>
                    <p>info@lightsglobalservices.com</p>
                </div>
                <div className='bg-bg-2 flex flex-col gap-3 items-center py-6 px-8 rounded'>
                    <img src={call} alt="contact-us" />
                    <h1>Call Us</h1>
                    <p>+44 7879 740842</p>
                </div>
                
            </div>

        </section>
        <div className='2xl:h-[30vh] h-[20vh] lg:w-2/3 w-full mx-auto bg-cover bg-center font-font2 rounded-md drop-shadow-lg mb-[-36px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='flex  justify-between items-center px-12 pt-12'>
                <div>
                    <h1 className='text-left lg:text-5xl text-3xl '>LET'S GET YOUR PROJECT <br /> STARTED!</h1>
                </div>
                <div className='bg-bg-2 lg:p-3 p-2 rounded-md text-white'>
                    <h1 className='lg:text-2xl text-base'>CONTACT <span className='hidden lg:inline-block'> WITH US</span></h1>
                    
                </div>
            </div>
        </div>
    </>
  )
}
