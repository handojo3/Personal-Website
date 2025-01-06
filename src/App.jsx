import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"
const App = () => {
  return (
    <div className = "relative h-full overflow-y-auto antialiased">
      <div className = "fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className = "relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Skills />
        <WorkExperience/>
        <Education />
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

export default App