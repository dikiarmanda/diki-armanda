import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolios"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio compact={true} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
