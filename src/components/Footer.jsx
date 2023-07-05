import React from 'react'
import Logo from '../assets/logo.png'
import Adress from '../assets/Address.png'
import Contact from '../assets/Contact.png'
import Mailbox from '../assets/Mailbox.png'
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/Insta.png'
import YouTube from '../assets/Youtube-icon.png'
import FooterBg from '../assets/footer-background.jpg'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <>
        <section className=" h-full  bg-bg-2 flex items-center py-12 text-white font-font2" style={{ backgroundImage: `url(${FooterBg})` }}>
            <div className='container  mx-auto flex flex-col md:flex-row justify-between px-12 py-12'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className=''>
                        <p className='text-2xl opacity-70'>We're a dedicated and experienced <br /> team of designers, developers, <br /> strategists and everything in between!</p>
                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <div>
                        <div>
                            <h1 className='text-3xl'>EXPLORE</h1>
                        </div>
                    </div>
                    <div className='text-xl opacity-70 mt-6'>
                    <Link  to="home" spy={true} smooth={true}>
                        <h1 className='cursor-pointer hover:text-pink'>Home</h1>

                    </Link>
                       <Link  to="about" spy={true} smooth={true}>
                       <h1 className='cursor-pointer hover:text-pink'>About Us</h1>
                        </Link> 
                        <Link  to="services" spy={true} smooth={true}>
                        <h1 className='cursor-pointer hover:text-pink'>Service</h1>

                        </Link>
                        <Link  to="contact" spy={true} smooth={true}>

                        <h1 className='cursor-pointer hover:text-pink'>Contact Us</h1>
                        </Link>

                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <div>
                        <div>
                            <h1 className='text-3xl'>CONTACT</h1>
                        </div>
                    </div>
                    <div className='mt-6 text-xl opacity-70 flex flex-col gap-4'>
                        <div  className='flex gap-4'>
                            <div>
                                <img src={Adress} alt="" />
                            </div>
                            <div>
                                <h1 className='hover:text-pink'>29 Balmoral Road Birmingham B23 6NY</h1>
                            </div>
                        </div>
                        <div  className='flex gap-4'>
                            <div>
                                <img src={Contact} alt="" />
                            </div>
                            <div>
                                <h1 className='hover:text-pink'>+44 7879 740842</h1>
                            </div>
                        </div>
                        <div  className='flex gap-4'>
                            <div>
                                <img src={Mailbox} alt="" />
                            </div>
                            <div>
                                <h1 className='hover:text-pink'>info@lightsglobalservices.com</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <div className='text-3xl'>
                        FIND US ON
                    </div>
                    <div className='flex gap-4 mt-6'>
                        <div className='hover:animate-bounce'>
                            <img src={Facebook} alt="" />
                        </div>
                        <div className='hover:animate-bounce'>
                            <img src={YouTube} alt="" />
                        </div>
                        <div className='hover:animate-bounce'>
                            <img src={Insta} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
