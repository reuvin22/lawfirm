import React from 'react'
import Firm from '../assets/firm.png'
import Atty from '../assets/atty.png'
function HomePage() {
  return (
    <>
        <section id='home' className='bg-law-firm bg-no-repeat bg-cover h-screen w-screen grayscale-5 relative'>
            <div className='w-full h-full bg-slate-900 opacity-75 absolute'></div>
            <div className='flex items-center h-full'>
                <div className='w-[50%] sm:ml-4 ml-48 h-[650px] absolute sm:mt-20 sm:w-[95%]'>
                    <div className='w-[200px]'>
                        <img src={Firm} alt="Reuvin Law Firm" className='sm:h-[56px] sm:w-[300px]'/>
                    </div>
                    <div className='w-[80%] h-96 mt-10'>
                        <span className='sm:text-[35px] text-[56px] font-serif text-[#CDAD7D] font-bold '>Top-notch legal services</span>
                        <p className='sm:text-justify sm:text-[24px] sm:mt-5 text-[24px] font-sans text-white'>We take pride in helping people from all walks of life achieve the justice and peace they deserve.</p>
                        <button className='bg-[#CDAD7D] sm:w-44 w-56 mt-10 sm:mt-7 sm:px-5 px-10 py-2 rounded-sm font-sans sm:text-[20px] text-[24px] hover:bg-[#f5f4f2] cursor-pointer delay-100 transition-all'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        <section id='about' className='mt-5 h-[80vh]'>
            <div className='w-full h-full'>
                <div className='sm:grid flex justify-center items-center h-full w-full sm:ml-3'>
                    <div className='w-[50%] h-full grid place-items-center'>
                        <div className='w-96 ml-2'>
                            <span className='font-sans text-[45px] sm:w-[90%] sm:font-bold'>How we deal with the law</span>
                            <p className='mt-5 text-xl sm:text-xl sm:w-[90%]'>Our clients' bottom line is our top priority. We are in constant communication with the people we serve and are committed to advancing the immediate needs and wants of our clients. Our team works around the clock to provide the necessary services and support that each client needs from us.</p>
                            <button className='bg-[#CDAD7D] sm:w-44 w-52 mt-5 sm:mt-7 sm:px-5 px-2 py-1 rounded-sm font-sans sm:text-[20px] text-[20px] hover:bg-[#b9af9b] cursor-pointer delay-100 transition-all'>Get in touch</button>
                        </div>
                    </div>
                    <div className='w-[50%] sm:w-[100%] h-full'>
                        <div className='flex items-center justify-center bg-blue-200 w-[80%] rounded-xl ml-10 sm:ml-5 border-2 mt-5 '>
                            <img src={Atty} alt="Attorney" className='w-96 sm:h-96'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage