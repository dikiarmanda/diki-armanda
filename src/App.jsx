import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Events from "./components/Events"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events compact={true} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
