import deltaQuad from '../assets/images/icons/deltaquad.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
    <footer className="border-ft-dark-grey">
      <div className="px-12 lg:px-24 py-8 mt-8 border-t">
        <div className="lg:flex lg:justify-between">
          <div className="md:pr-8 md:p-8">
            <h2 className="uppercase text-4xl sm:text-5xl tracking-wide sm:tracking-widest sm:max-w-4xl">
              READY FOR TAKEOFF?
            </h2>
            <p className="w-full text-left text-lg my-4 sm:max-w-2xl font-['Inter'] font-light">
              Our friendly Fliight Crew is here to discuss your needs, no
              strings attached. Let&apos;s navigate solving your problem together.
            </p>
            <div className="gap-3 py-2 justify-center items-center flex-col flex sm:items-start sm:flex-row sm:justify-start">
              <NavLink to="/contact">
                <button className="bg-ft-red uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
                  Contact us
                </button>
              </NavLink>
              <NavLink to="/request-demo">
                <button className="bg-ft-dark-grey uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest">
                  Book a demo
                </button>
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex my-4 w-full ">
              <div className="flex flex-col w-[50%] sm:w-40">
                <span className="uppercase mt-4 sm:my-4 text-sm leading-relaxed font-semibold text-ft-dark-grey md:text-lg">
                  Drones
                </span>
                <ul className="text-sm leading-loose tracking-wide md:text-lg font-['Inter'] font-light">
                  <NavLink to="/drones/deltaquad-pro">
                    <li className="my-4">DeltaQuad Pro</li>
                  </NavLink>
                  <NavLink to="/drones/deltaquad-evo">
                    <li className="my-4">DeltaQuad Evo</li>
                  </NavLink>
                </ul>
              </div>
              <div className="flex flex-col w-[50%] sm:w-40 ml-[4rem]  leading-loose tracking-wide">
                <span className="uppercase mt-4 sm:my-4 text-sm leading-relaxed font-semibold text-ft-dark-grey md:text-lg">
                  Software
                </span>
                <ul className="text-sm leading-loose tracking-wide md:text-lg font-['Inter'] font-light">
                  <NavLink to="/solutions/aerowhere">
                    <li className="my-4">AeroWhere</li>
                  </NavLink>
                  <NavLink to="/solutions/argus">
                    <li className="my-4">Argus</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:m-8 md:mr-auto">
          <img src={deltaQuad} alt="deltaQuad" className="w-60 mt-8 mb-1" />
          <span className="text-sm leading-relaxed tracking-wide text-ft-grey font-['Inter'] font-light">
            |&nbsp;&nbsp; Fliight Technologies is proud to be the official
            Australian DeltaQuad Distributor
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around md:px-30 lg:px-40 bg-ft-dark-grey w-screen mb-4 py-8 px-6 gap-3 font-['Inter'] font-light">
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faPhone} className="self-center w-12" />
          <span className="text-sm leading-loose tracking-widest">
            <a href="tel:+61429279876">+(61) 429 279 876</a>
          </span>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="self-center w-12" />
          <span className="text-sm leading-loose tracking-widest">
            Wollongong, Australia
          </span>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faEnvelope} className="self-center w-12" />
          <span className="text-sm leading-loose tracking-widest">
            <a href="mailto:info@fliight.com.au">info@fliight.com.au</a>
          </span>
        </div>
      </div>
      <div className="px-12 lg:px-32 mb-12 sm:mb-4 text-xs text-ft-grey leading-loose tracking-wide md:flex-row md:justify-between md:w-full font-['Inter'] font-light">
        <div className="md:inline-flex md:justify-between  md:w-full">
          <p className="">
            © Fliight Technologies Pty Ltd. All rights reserved.{' '}
          </p>
          <p className=""><a href="https://jbdev.io" target="_blank" rel="noreferrer noopener">Website by jbdev</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
