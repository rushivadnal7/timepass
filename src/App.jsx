import { useState } from 'react'
import './App.css'

import sorry_image from './assets/Gladly Groveling - Sorry Card (Free) _ Greetings Island_page-0001.jpg'
import sejalLayout from './assets/sejalImageLayout.jpg'
import hearts from './assets/heart_png.png'
import gold from './assets/gold_png.png'
import self from './assets/self.jpg'
import left_ribbon from './assets/left_ribbon.png'
import right_ribbon from './assets/right_ribbon.png'

function App() {

  return (
    <>
      <section className='page-1 w-screen h-screen flex  justify-center items-center'>
        <div className='center-heart w-24 h-24 absolute'>

          <img src={hearts} alt="" />
        </div>

        <div className='left-hearts  absolute h-full'>
          <div className='bounceGrp1 w-24 h-24 absolute left-0  top-10 '>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp2 w-24 h-24 absolute left-10  top-1/4'>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp1 w-24 h-24 absolute top-1/3  '>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp2 w-24 h-24 absolute left-10 top-2/4'>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp1 w-24 h-24 absolute top-2/3   '>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp2 w-24 h-24 absolute left-10 top-3/4  '>
            <img src={hearts} alt="" />
          </div>
        </div>
        <div className='right-hearts   absolute h-full'>
          <div className='bounceGrp2 w-24 h-24 absolute right-10 top-10 '>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp1 w-24 h-24 absolute  top-1/4'>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp2 w-24 h-24 absolute right-10 top-1/3  '>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp1 w-24 h-24 absolute top-2/4'>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp2 w-24 h-24 absolute right-10 top-2/3  '>
            <img src={hearts} alt="" />
          </div>
          <div className='bounceGrp1 w-24 h-24 absolute top-3/4  '>
            <img src={hearts} alt="" />
          </div>
        </div>

        <div className='w-72 h-96'>
          <img className='w-full h-full rounded-md' src={sejalLayout} alt="" />
        </div>
      </section>
      <section className='page-2 w-screen h-screen flex flex-col justify-evenly items-center text-gray-700 poppins  '>
        <div className='heading flex justify-center items-center '>
          <img className='w-28 h-28   rounded-full ' src={self} alt="" />
          <h1 className='poppins-extrabold text-2xl'>SORRY!!! Naa</h1>
          <img className='w-20 h-20 ' src={gold} alt="" />
        </div>

        <div className='w-full flex justify-center'>
          <div className='wrapper w-1/2 flex justify-center relative'>
            <p className='w-full rounded-md   p-4 '>To my Love sejal samal , sorry whole heartedly . ikla majak mali cheyanu promise. <br /> Love you the most nenu ante gura na mansulo emundadi aviani . Only you own my heart my body brain and ofc my stress-space .<br /> reserved for you.  Enta picchi picchi prema undi nitoni . my most special person naa bangarm . <br /> nitoni undi mana relationship toni inka naa gurunchi artam cheskunta. <br /> and ivianitla aa feeling epudu sejal ante enta entaaaa prema enta ishtamo adi telskunappudu abba just feels like heaven peace real lovee. <br /> I just Love you bangaram💗</p>
            <div className='left-cover cover w-1/2 flex justify-end  absolute h-full py-4 left-0 top-0 '>
              <img className='w-10 h-14 ' src={left_ribbon} alt="" />
            </div>
            <div className='right-cover cover w-1/2 flex justify-start  absolute h-full py-4 right-0 top-0 '>
              <img className='w-10 h-14' src={right_ribbon} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='page-3 w-screen h-screen flex  justify-center items-center'>
        <div className='w-58 h-96'>
          <img className='w-full h-full' src={sorry_image} alt="" />
        </div>
      </section>

    </>
  )
}

export default App
