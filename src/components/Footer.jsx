import React from 'react'
import Logo from '../assets/logo.png'
import Adress from '../assets/Address.png'
import Contact from '../assets/Contact.png'
import Mailbox from '../assets/Mailbox.png'
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/Insta.png'
import YouTube from '../assets/Youtube-icon.png'
import FooterBg from '../assets/footer-background.jpg'

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
                        <h1>Home</h1>
                        <h1>About Us</h1>
                        <h1>Service</h1>
                        <h1>Contact Us</h1>

                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <div>
                        <div>
                            <h1 className='text-3xl'>CONTACT</h1>
                        </div>
                    </div>
                    <div className='mt-6 text-xl opacity-70 flex flex-col gap-4'>
                        <div  className='flex'>
                            <div>
                                <img src={Adress} alt="" />
                            </div>
                            <div>
                                <h1>29 Balmoral Road Birmingham B23 6NY</h1>
                            </div>
                        </div>
                        <div  className='flex'>
                            <div>
                                <img src={Contact} alt="" />
                            </div>
                            <div>
                                <h1>29 Balmoral Road Birmingham B23 6NY</h1>
                            </div>
                        </div>
                        <div  className='flex'>
                            <div>
                                <img src={Mailbox} alt="" />
                            </div>
                            <div>
                                <h1>29 Balmoral Road Birmingham B23 6NY</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <div className='text-3xl'>
                        FIND US ON
                    </div>
                    <div className='flex gap-4 mt-6'>
                        <div>
                            <img src={Facebook} alt="" />
                        </div>
                        <div>
                            <img src={YouTube} alt="" />
                        </div>
                        <div>
                            <img src={Insta} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
