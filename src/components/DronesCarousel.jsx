import '../App.css'
import React from 'react'
import deltaQuad from '../assets/images/deltaquad-pro.jpeg'
import yellowScan from '../assets/images/evo-yellowscan-payload.jpeg'
import { NavLink } from 'react-router-dom'

function DronesCarousel() {
  const scrollRef = React.useRef(null)
  
  function slideToTheLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      })
    }
  }

  function slideToTheRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="w-full">
      <div className="lg:pl-16">
        
        <h3 className="ml-11 lg:pl-5 mt-8 mb-2 text-4xl sm:text-5xl uppercase font-medium tracking-widest">
          DRONES
        </h3>
        <div className="hidden md:pr-16">
            <div className="sm:w-full mb-auto text-right text-3xl sm:px-4 flex gap-4 justify-end mr-4 my-3 sm:m-0 sm:mx-1">
              <button
                className="border border-ft-dark-grey px-3"
                onClick={slideToTheLeft}
              >
                {' '}
                &lt;{' '}
              </button>
              <button
                className="border border-ft-dark-grey px-3"
                onClick={slideToTheRight}
              >
                {' '}
                &gt;{' '}
              </button>
            </div>
          </div>
        <ul
          className="media-scroller snaps-inline pl-12 md:auto-cols-[42%]"
          ref={scrollRef}          
        >
          <NavLink to="/drones/deltaquad-pro">
          <li className="media-element lg:px-6 lg:py-12">
            
            <img
              src={deltaQuad}
              alt="alt"
              className="border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">Deltaquad Pro</p>
            
          </li>
          </NavLink>
          <NavLink to="/drones/deltaquad-evo">
          <li className="media-element lg:px-6 lg:py-12">
          
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase leading-10 text-2xl sm:text-4xl font-medium">Deltaquad Evo</p>
          
          </li>
          </NavLink>
          {/*<li className="media-element lg:px-6 lg:py-12">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 3</p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 4</p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={deltaQuad}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 5</p>
          </li>
          <li className="media-element lg:px-6 lg:py-12">
            <img
              src={yellowScan}
              alt="alt"
              className="bg-ft-grey border border-ft-grey rounded min-h-[10rem] h-auto"
            />
            <p className="uppercase">Deltaquad Nolink 6</p>
          </li>
          */}
        </ul>
  </div>
      <div className="hidden md:pr-16 lg:mr-40">
        <div className="sm:w-full mb-auto text-right text-3xl sm:px-4 flex gap-4 justify-end mr-4 my-3 sm:m-0 sm:mx-1">
          <button
            className="border border-ft-dark-grey px-3"
            onClick={slideToTheLeft}
          >
            {' '}
            &lt;{' '}
          </button>
          <button
            className="border border-ft-dark-grey px-3"
            onClick={slideToTheRight}
          >
            {' '}
            &gt;{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DronesCarousel
