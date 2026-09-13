import { useEffect } from 'react'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollShowcase from './components/ScrollShowcase'
import Skills from './components/Skills'

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    revealItems.forEach((item) => observer.observe(item))

    const cursor = document.querySelector('.cursor-dot')
    const setCursorPosition = (event) => {
      if (!cursor) return
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }

    document.addEventListener('pointermove', setCursorPosition)

    return () => {
      revealItems.forEach((item) => observer.unobserve(item))
      document.removeEventListener('pointermove', setCursorPosition)
    }
  }, [])

  return (
    <div className="app-shell">
      <div className="cursor-dot" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />
      <div className="background-glow glow-1" aria-hidden="true" />
      <div className="background-glow glow-2" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ScrollShowcase />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
