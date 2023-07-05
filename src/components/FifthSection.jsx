import React from 'react'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'

export default function FifthSection() {
  return (
    <>
      <section className=" h-full   flex items-center py-12 lg:px-12 px-4">
        <div className="container mx-auto py-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="self-center lg:p-0 p-4">
              <h1 className="font-font1 lg:text-5xl text-3xl">
                To us, you’re more than just another client.
              </h1>
            </div>
            <div className="bg-white hover:bg-bg-3 hover:text-white drop-shadow-lg py-4 px-6 rounded-md flex flex-col gap-3 hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl">
              <div>
                <img src={c1} alt="c1" />
              </div>
              <h1 className="text-3xl font-font1">
                A Creative, Flexible Approach
              </h1>
              <p className="text-base font-font2 opacity-80">
                Your brand is the essence of your business. We offer branding
                and design services that help you stand out from the crowd. From
                logo design and brand identity development to graphic design and
                visual content creation, we'll ensure that your brand reflects
                your values, resonates with your audience, and leaves a lasting
                impression.
              </p>
            </div>
            <div className="bg-white hover:bg-bg-3 hover:text-white drop-shadow-lg py-4 px-6 rounded-md flex flex-col gap-3 hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl">
              <div>
                <img src={c2} alt="c1" />
              </div>
              <h1 className="text-3xl font-font1">
                Access to Knowledgeable Professionals
              </h1>
              <p className="text-base font-font2 opacity-80">
                We're committed to your long-term success. Our team provides
                continuous support and maintenance to ensure that your digital
                assets are always up to date, secure, and optimized. Whether
                it's regular updates, performance monitoring, or
                troubleshooting, we'll be there to keep your digital presence
                running smoothly.
              </p>
            </div>
            <div className="bg-white hover:bg-bg-3 hover:text-white drop-shadow-lg py-4 px-6 rounded-md flex flex-col gap-3 hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl">
              <div>
                <img src={c3} alt="c1" />
              </div>
              <h1 className="text-3xl font-font1">
                Innovative Methods for Solving Problems
              </h1>
              <p className="text-base font-font2 opacity-80">
                We believe in a tailored approach to your business. Our team of
                experts will work closely with you to understand your goals,
                target audience, and industry landscape. Whether you need to
                increase brand awareness, generate leads, or boost online sales,
                we have the expertise to deliver.
              </p>
            </div>
            <div className="bg-white hover:bg-bg-3 hover:text-white drop-shadow-lg py-4 px-6 rounded-md flex flex-col gap-3 hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl">
              <div>
                <img src={c4} alt="c1" />
              </div>
              <h1 className="text-3xl font-font1">
                A Commitment to Results and Security
              </h1>
              <p className="text-base font-font2 opacity-80">
              Our team of experts will conduct a comprehensive analysis of your business, examining its current state, identifying pain points, and pinpointing areas for improvement. By gaining a deep understanding of your challenges, we'll develop a customized strategy to address your specific needs.
              </p>
            </div>
            <div className="bg-white hover:bg-bg-3 hover:text-white drop-shadow-lg py-4 px-6 rounded-md flex flex-col gap-3 hover:-translate-y-2 hover:drop-shadow-2xl hover:rounded-xl">
              <div>
                <img src={c5} alt="c1" />
              </div>
              <h1 className="text-3xl font-font1">
              Ongoing Support 
and Guidance
              </h1>
              <p className="text-base font-font2 opacity-80">
              If your business is burdened with debt or struggling with cash flow issues, we'll develop a financial recovery plan tailored to your unique circumstances. Our financial experts will help you navigate debt restructuring, renegotiate contracts, and optimize your cash flow management. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
