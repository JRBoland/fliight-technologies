import Header from '../components/Header'
import Footer from '../components/Footer'

function Aerowhere() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 flex items-center justify-center">
      <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase h-20 my-40">Aerowhere</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Aerowhere