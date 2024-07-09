import React from 'react'
import Firm from '../assets/firm.png'
function HomePage() {
  return (
    <>
        <section id='home' className='bg-law-firm bg-no-repeat bg-cover h-screen w-screen grayscale-5 relative'>
            <div className='w-full h-full bg-slate-900 opacity-75 absolute'></div>
            <div className='flex items-center h-full'>
                <div className='w-[50%] sm:ml-[10%] ml-48 h-[650px] absolute sm:grid sm:place-items-center'>
                    <div className='w-[300px]'>
                        <img src={Firm} alt="Reuvin Law Firm" className='sm:h-[56px] sm:w-[300px]'/>
                    </div>
                    <div className='w-[80%] h-96 grid mt-10'>
                        <span className='sm:text-center sm:text-[40px] text-[56px] font-serif text-[#CDAD7D] font-bold '>Top-notch legal services</span>
                        <p className='sm:text-center sm:mt-5 text-[24px] font-sans text-white'>We take pride in helping people from all walks of life achieve the justice and peace they deserve.</p>
                        <button className='bg-[#CDAD7D] w-56 mt-10 px-10 py-2 rounded-sm font-sans text-[24px] hover:bg-[#f5f4f2] cursor-pointer delay-100 transition-all'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage