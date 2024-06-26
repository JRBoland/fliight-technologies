import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'

function RequestDemoForm() {
  AOS.init()

  const recaptchaRef = useRef()
  const [isVerified, setIsVerified] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    if (!isVerified) {
      toast.error('Please verify that you are not a robot.')
      recaptchaRef.current.execute() // Trigger reCAPTCHA when verification is needed
    } else {
      emailjs
        .sendForm(
          'service_s5zd9yh',
          'template_brdrre2',
          e.target,
          'L6wCoQNjMIaX3KMFK'
        )
        .then(
          (result) => {
            console.log(result.text)
            toast.success('Message sent successfully')
            e.target.reset() // Reset form fields
            recaptchaRef.current.reset() // Reset the reCAPTCHA
            setIsVerified(false) // Reset verification state
          },
          (error) => {
            console.log(error.text)
            toast.error('Failed to send message. Please try again later.')
          }
        )
    }
  }

  const onReCAPTCHAChange = (captchaCode) => {
    if (captchaCode) {
      setIsVerified(true)
    } else {
      setIsVerified(false)
      toast.error('reCAPTCHA expired, please verify again.')
    }
  }

  return (
    <div className="my-12 font-['Inter'] font-light">
      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <label className="flex flex-col">
          Full Name*
          <input
            type="text"
            name="name"
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your full name?"
          />
        </label>
        <label className="flex flex-col">
          Email*
          <input
            type="text"
            name="email"
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your email address?"
          />
        </label>
        <label className="flex flex-col">
          Phone number*
          <input
            type="tel"
            name="phone"
            required
            pattern="^\+?\d{0,13}"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your phone number?"
          />
        </label>
        {/*<label className="flex flex-col">
          Date preference*
          <input
            type="date"
            name="date"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-black"
            placeholder="Select"
          >
          </input>
  </label>*/}
        <label className="flex flex-col">
          How can we help?*
          <textarea
            name="message"
            required
            className="bg-ft-dark-grey placeholder-ft-grey rounded h-40 p-2 my-2 placeholder-top"
            placeholder="Please describe your problem and where you see us fitting into your project?"
          ></textarea>
        </label>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
          className="w-full flex justify-center my-4"
        />
        <div className="w-full flex justify-center items-center my-4">
          <button
            className="cursor-pointer bg-ft-red  rounded-3xl w-72 h-8 sm:w-44 min-h-[2.75rem]  hover:opacity-90 hover:bg-[#5b172c] transition duration-300 active:bg-ft-dark-grey"
            data-aos="fade-down-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-duration="600"
          >
            <input
              type="submit"
              value="Send"
              className="uppercase text-base font-semibold leading-tight tracking-widest"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default RequestDemoForm
