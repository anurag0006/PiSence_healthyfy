import './App.css'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/reusableComponent/Carousel'
import Services from './components/services/Services'
function App() {

  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Carousel />
    </>
  )
}

export default App
