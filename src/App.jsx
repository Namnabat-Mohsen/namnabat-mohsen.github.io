import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Software from './components/Software'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Thesis from './components/Thesis'
import Simulations from './components/Simulations'
import Honors from './components/Honors'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Thesis />
        <Skills />
        <Software />
        <Publications />
        <Projects />
        <Simulations />
        <Honors />
        <Contact />
      </main>
    </>
  )
}
