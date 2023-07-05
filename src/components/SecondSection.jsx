import React from 'react'
import CustomWeb from '../assets/custom-web.png'
import Responsive from '../assets/responsive.png'
import Ecommerce from '../assets/ecommerce.png'
import UxUi from '../assets/ux-ui.png'
import CMS from '../assets/cms.png'
import Maintain from '../assets/maintananence.png'

export default function SecondSection() {
  return (
    <>
        <section id='services' className=" h-full  bg-bg-2 flex items-center py-12">
            <div className='container  mx-auto flex flex-col  gap-6 md:py-0 py-6'>
                <div className='flex md:flex-row flex-col gap-6 justify-between mx-auto '>
                    <div className='px-6 lg:px-0 self-center '>
                        <h1 className='lg:text-5xl md:text-5xl text-4xl font-font1 text-white hover:text-pink'>WE SHAPE THE PERFECT <br /> SOLUTIONS.</h1>
                        <p className='lg:text-xl text- opacity-50 font-font1  pt-4 pb-4 md:pb-0 text-white '>We are committed to providing our customers with exceptional service <br />
                        while offering our employees the best training.</p>
                    </div>
                    <div className='flex md:flex-row flex-col gap-4 mx-auto md:mx-0'>
                        <div className='bg-bg-3 py-6 px-6 2xl:w-[18rem] md:w-[14rem] w-[22rem] lg:w-[14rem] hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl'>
                            <div className='flex justify-between py-4'>
                                <h1 className='text-7xl text-white hover:opacity-100 font-font2 opacity-25'>01</h1>
                                <img src={CustomWeb} alt="custome-web" srcset="" />
                            </div>
                            <h1 className='text-5xl text-white hover:text-pink hover:ease-out duration-1000 font-font2'>Custom <br /> Web <br /> Development</h1>
                        </div>
                        <div className='bg-bg-3 py-4 px-6 2xl:w-[18rem] md:w-[14rem] w-[22rem] lg:w-[14rem] hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl'>
                            <div className='flex justify-between py-4'>
                                <h1 className='text-7xl text-white hover:opacity-100 font-font2 opacity-25'>02</h1>
                                <img src={Responsive} alt="custome-web" srcset="" />
                            </div>
                            <h1 className='text-5xl text-white hover:text-pink hover:ease-out duration-1000 font-font2'>Responsive <br /> Design</h1>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mx-auto'>
                    
                        <div className='bg-bg-3 py-6 px-6 2xl:w-[18rem] md:w-[14rem] w-[22rem] lg:w-[14rem] hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl'>
                            <div className='flex justify-between py-4'>
                                <h1 className='text-7xl text-white opacity-25 hover:opacity-100 font-font2'>03</h1>
                                <img src={Ecommerce} alt="custome-web" srcset="" />
                            </div>
                            <h1 className='text-5xl text-white hover:text-pink hover:ease-out duration-1000 font-font2'>E-commerce <br />
                            Solutions</h1>
                        </div>
                        <div className='bg-bg-3 py-4 px-6 2xl:w-[18rem] md:w-[14rem] w-[22rem] lg:w-[14rem] hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl'>
                            <div className='flex justify-between py-4'>
                                <h1 className='text-7xl text-white opacity-25 hover:opacity-100 font-font2'>04</h1>
                                <img src={UxUi} alt="custome-web" srcset="" />
                            </div>
                            <h1 className='text-5xl text-white hover:text-pink hover:ease-out duration-1000 font-font2'>UI/UX <br />
                            Design <br />
                            Solutions</h1>
                        </div>
                        <div className='bg-bg-3 py-4 px-6 2xl:w-[18rem] md:w-[14rem] w-[22rem] lg:w-[14rem] hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl'>
                            <div className='flex justify-between py-4'>
                                <h1 className='text-7xl text-white opacity-25 hover:opacity-100 font-font2'>05</h1>
                                <img src={CMS} alt="custome-web" srcset="" />
                            </div>
                            <h1 className='text-5xl text-white hover:text-pink hover:ease-out duration-1000 font-font2'>Content <br />
                            Management <br />
                            Systems</h1>
                        </div>
                        <div className='bg-bg-3 py-4 px-6 2xl:w-[18rem] md:w-[14rem] w-[22rem] lg:w-[14rem] hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl'>
                            <div className='flex justify-between py-4'>
                                <h1 className='text-7xl text-white opacity-25 hover:opacity-100 font-font2'>06</h1>
                                <img src={Maintain} alt="custome-web" srcset="" />
                            </div>
                            <h1 className='text-4xl text-white hover:text-pink hover:ease-out duration-1000 font-font2'>Website <br />
                            Maintenance and <br />
                        Support</h1>
                        </div>
                </div>
            </div>
            
        </section>
    </>
  )
}
