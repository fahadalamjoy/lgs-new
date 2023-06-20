import React from 'react'
import reat from '../assets/technologies/react.png'
import angular from '../assets/technologies/angular.png'
import next from '../assets/technologies/next.png'
import tailwind from '../assets/technologies/tailwind.png'
import typescript from '../assets/technologies/typescript.png'
import jquery from '../assets/technologies/jquery.png'
import node from '../assets/technologies/node.png'
import nest from '../assets/technologies/nest.png'
import php from '../assets/technologies/php.png'
import laravel from '../assets/technologies/laravel.png'
import express from '../assets/technologies/express.png'
import mongodb from '../assets/technologies/mongodb.png'
import postgress from '../assets/technologies/postgress.png'
import sql from '../assets/technologies/sql.png'
import mysql from '../assets/technologies/mysql.png'
import aws from '../assets/technologies/aws.png'
import digi from '../assets/technologies/digi-ocean.png'

export default function Expertise() {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <section className="bg-bg-2 md:h-[50vh] h-full flex flex-col  items-center lg:pt-20 pt-6">
        <div className="container mx-auto lg:p-0 p-4">
          <h1 className="lg:text-7xl text-3xl text-left text-white font-font2 ">
            Technologies We <span className="text-pink"> Expertise.</span>
          </h1>
        
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap gap-3 pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "bg-pink text-white "
                      : "bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Frontend
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                        ? "bg-pink text-white "
                        : "bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Backend
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                        ? "bg-pink text-white "
                        : "bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Database & Cloud
                </a>
              </li>
              {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                        ? "bg-pink text-white "
                        : "bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Mobility
                </a>
              </li> */}
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-6 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className='flex flex-wrap lg:justify-start justify-center gap-12 pl-6'>
                      <div className='drop-shadow-2xl'>
                        <img src={reat} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={angular} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={next} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={tailwind} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={typescript} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={jquery} alt="react" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                  <div className='flex flex-wrap lg:justify-start justify-center gap-12 pl-6'>
                      <div className='drop-shadow-2xl'>
                        <img src={node} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={nest} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={php} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={laravel} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={express} alt="react" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className='flex flex-wrap lg:justify-start justify-center gap-12 pl-6'>
                      <div className='drop-shadow-2xl'>
                        <img src={mongodb} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={postgress} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={sql} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={mysql} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={aws} alt="react" />
                      </div>
                      <div className='drop-shadow-2xl'>
                        <img src={digi} alt="react" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
