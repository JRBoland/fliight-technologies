import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col max-w-full">
          <h1 className="text-7xl font-medium leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase h-20">
            LETS TALK
          </h1>
          <p className="my-8 md:max-w-[40rem] text-lg font-normal leading-loose tracking-wide text-center">
            Ready for takeoff? Our friendly Fliight Crew is here to discuss your
            needs, no strings attached. Let's navigate solving your problem
            together
          </p>
          <ContactForm/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
