import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initHeroAnimation() {
  const hero = document.querySelector(".hero")
  const line1 = document.querySelector(".hero-line-1")
  const line2 = document.querySelector(".hero-line-2")
  const line3 = document.querySelector(".hero-line-3")
  const eyebrow = document.querySelector(".hero-eyebrow")

  if (!hero || !line1 || !line2 || !line3 || !eyebrow) {
    return () => {}
  }

  const ctx = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    timeline
      .to(eyebrow, {
        y: -80,
        opacity: 0,
        duration: 0.3,
      })
      .to(
        line1,
        {
          x: -250,
          y: -100,
          opacity: 0.35,
          scale: 0.8,
          duration: 0.8,
        },
        "<"
      )
      .to(
        line3,
        {
          x: 250,
          y: 100,
          opacity: 0.35,
          scale: 0.8,
          duration: 0.8,
        },
        "<"
      )
      .to(line2, {
        scale: 1.8,
        duration: 1,
      })
      .to(line2, {
        scale: 4,
        opacity: 0,
        duration: 1,
      })
  })

  return () => {
    ctx.revert()
  }
}