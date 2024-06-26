import iconDrone from '../../assets/images/icons/icon-drone.png'
import TemplatePayloadsCarousel from './TemplateProductPayloadsCarousel'
import deltaQuadCustomRender from '../../assets/images/dq-evo-custom-render.jpeg'
import { NavLink } from 'react-router-dom'

// THIS COMPONENT HOLDS TemplateProductPayloadsCarousel (see line 46)

function TemplateProductPayloads() {
  return (
    <div className="">
      <div className="p-12 md:p-20">
        <h3 className="uppercase text-5xl">Payloads heading 1</h3>
        <p className="leading-loose tracking-wide my-6 font-light font-['Inter']">
          Payloads content Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Atque nulla sint ea debitis ratione dolores.
        </p>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="bg-ft-dark-grey p-4 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded flex">
            <div className="min-w-[5rem] flex items-center max-sm:hidden m-2">
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-full h-auto min-h-[4rem] max-h-20 m-0"
              />
            </div>
            <div className="m-2 leading-loose tracking-wide font-light font-['Inter'] pl-1">
              <strong>Some bold text</strong> rest of text Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ducimus, et vitae ullam animi
              commodi deleniti.
            </div>
          </div>

          <div className="bg-ft-dark-grey p-4 my-2 mr-4 md:w-[44%] lg:w-[48%] rounded flex">
            <div className="min-w-[5rem] flex items-center max-sm:hidden m-2">
              <img
                src={iconDrone}
                alt="drone icon"
                className="w-full h-auto min-h-[4rem] max-h-20 m-0"
              />
            </div>
            <div className="m-2 leading-loose tracking-wide font-light font-['Inter']">
              <strong>Some bold text</strong> rest of text Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Maiores sit facilis aut.
            </div>
          </div>
        </div>
        <p className="my-6 leading-loose tracking-wide font-light font-['Inter']">
          Descriptive stuff maybe Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quaerat, nostrum quis! Non quidem tempora dolorum
          beatae enim eum fugiat magni in distinctio minima aut, ducimus sint
          magnam praesentium tenetur quibusdam vitae eos molestiae asperiores
          corrupti quos totam assumenda. Voluptates, distinctio!
        </p>
      </div>
      <TemplatePayloadsCarousel />
      <div className="flex flex-col sm:flex-row justify-center gap-20 my-40 p-12 md:p-20">
        <div className="image-container max-w-[384px] lg:max-w-[660px] max-h-[600px] z-50">
          <img
            src={deltaQuadCustomRender}
            alt="DeltaQuad Evo Propeller"
            className="w-96 lg:w-[540px] lg:max-w-[540px] object-fit sm:h-[600px] rounded"
          />
        </div>
        <div className="w-80 sm:w-[480px] items-center sm:items-start flex flex-col justify-center">
          <h3 className="text-5xl text-left uppercase w-auto my-8">
            Payloads heading line 56 or so
          </h3>
          <div className="text-lg leading-loose tracking-wide font-light font-['Inter']">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            placeat ducimus magnam recusandae, similique molestiae veniam
            molestias. Dicta illo, suscipit soluta nesciunt deserunt delectus
            aut explicabo corrupti voluptatem laudantium dolore qui harum sint.
            Aut, fuga!
          </div>
          <NavLink to="/contact">
            <button className="bg-ft-dark-grey uppercase rounded-3xl py-2 w-72 h-8 sm:w-36 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest my-12 hover:bg-black transition duration-300 focus:bg-ft-grey">
              Contact us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default TemplateProductPayloads
