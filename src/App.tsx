import { useEffect } from "react"
import { initHeroAnimation } from "./animations/hero"
import Process from "./components/Process"
import { initProcessAnimation } from "./animations/process"
function App() {
  useEffect(() => {
  const cleanupHero = initHeroAnimation()
  const cleanupProcess = initProcessAnimation()

  return () => {
    cleanupHero()
    cleanupProcess()
  }
}, [])

  return (
    <main>
      <section className="hero">
        <div className="hero-background" />

        <div className="hero-content">
          <div className="hero-identity">
            <p className="hero-name">RAJATH K R</p>
            <p className="hero-role">SOFTWARE DEVELOPER</p>
          </div>

          <div className="hero-statement">
            <h1 className="hero-title">
              <span className="hero-line hero-line-1">I BUILD</span>
              <span className="hero-line hero-line-2">SOFTWARE</span>
              <span className="hero-line hero-line-3">THAT SHIPS.</span>
            </h1>
          </div>

          <div className="hero-description">
            <p>
              I build thoughtful software, from interfaces to intelligent
              systems
            </p>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-scroll-line" />
          </div>
        </div>
      </section>

      <Process />
    </main>
  )
}

export default App