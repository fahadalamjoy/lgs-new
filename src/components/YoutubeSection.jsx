import React, { useState } from 'react'
import Youtube from '../assets/youtube.png'

export default function YoutubeSection() {
    const [seeVideo, setSeeVideo] = useState(true)
  return (
    <>
    <section className="lg:h-[80vh] h-[50vh] items-center py-6 mx-auto relative">
      <h1 className='lg:text-7xl text-3xl text-center text-black font-font2 pt-6'>EXPERIENCE US <span className='text-pink'> LIVE.</span></h1>
      <div className="flex justify-center pt-12" onClick={() => setSeeVideo(false)}>
        <iframe
          title="LGS Video"
          className="lg:w-full  max-w-screen-lg max-h-screen-lg w-80 h-[14rem] lg:h-[32rem] rounded-md"
          width="560"
          height="500"
          src="https://www.youtube.com/embed/59gW2F9oDFg"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        
      
      </div>
      {seeVideo && (
            <div className='absolute top-[10rem] right-[20rem] 2xl:block hidden'>
            <img src={Youtube} alt="youtube" srcset="" />
          </div>
        )}
    </section>
    
    </>
  );
}
