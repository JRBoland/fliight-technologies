import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReCAPTCHA from 'react-google-recaptcha'
import React from 'react'

function ContactForm() {
  AOS.init()
  const recaptchaRef = React.useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    if (!recaptchaValue) {
      alert('Please verify you are not a robot.')
      return
    }

    emailjs
      .sendForm(
        'service_s5zd9yh',
        'template_vq0um9d',
        e.target,
        'L6wCoQNjMIaX3KMFK'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent successfully')
          form.reset()
          recaptchaRef.current.reset()
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send message. Please try again later.')
        }
      )
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
            type="number"
            name="phone"
            required
            pattern="^\+?\d{0,13}"
            title="A valid phone number is required"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your phone number?"
          />
        </label>
        <label className="flex flex-col">
          Reason for getting in touch
          <select
            type="text"
            name="why"
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="Select"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="general enquiry">General Enquiry</option>
            <option value="technical support">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="request a demo">Request a demo</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="flex flex-col">
          How can we help?*
          <textarea
            name="message"
            required
            className="bg-ft-dark-grey placeholder-ft-grey rounded h-40 p-2 my-2 placeholder-top"
            placeholder="Please describe your problem and where you see us fitting into your project?"
          ></textarea>
        </label>
        <div className="w-full flex justify-center items-center my-4 flex flex-col">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={() => {}}
            className="flex justify-center my-8"
          />
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

export default ContactForm
