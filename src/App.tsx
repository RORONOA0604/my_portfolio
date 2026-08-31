import { useEffect } from "react"
import { initHeroAnimation } from "./animations/hero"

function App() {
  useEffect(() => {
    const cleanup = initHeroAnimation()

    return cleanup
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

      <section className="process-section">
        <div className="process-intro">
          <p className="section-label">THE WAY I BUILD</p>

          <h2>
            IDEA
            <span>→</span>
            CODE
            <span>→</span>
            PRODUCT
          </h2>
        </div>
      </section>
    </main>
  )
}

export default App