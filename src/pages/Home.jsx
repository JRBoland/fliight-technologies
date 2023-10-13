import Header from "../components/Header"
import Footer from "../components/Footer";
import Landing from "../components/Landing";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 flex items-center justify-center">
      <Landing/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;