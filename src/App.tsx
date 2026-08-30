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
        <div className="hero-content">
          <p className="hero-eyebrow">SOFTWARE DEVELOPER</p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">I BUILD</span>
            <span className="hero-line hero-line-2">SOFTWARE</span>
            <span className="hero-line hero-line-3">THAT SHIPS.</span>
          </h1>
        </div>
      </section>

      <section className="next-section">
        <p>THE WAY I BUILD</p>
        <h2>IDEA → CODE → PRODUCT</h2>
      </section>
    </main>
  )
}

export default App