import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initProcessAnimation() {
  const section = document.querySelector<HTMLElement>(".process-section")
  const progress = document.querySelector<HTMLElement>(".process-line-progress")
  const progressText = document.querySelector<HTMLElement>(".process-progress")
  const steps = gsap.utils.toArray<HTMLElement>("[data-process-step]")
  const dots = gsap.utils.toArray<HTMLElement>("[data-process-dot]")

  if (!section || !progress || !progressText || !steps.length) {
    return () => {}
  }

  const context = gsap.context(() => {
    gsap.set(steps, {
      opacity: 0,
      y: 50,
    })

    gsap.set(steps[0], {
      opacity: 1,
      y: 0,
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=4200",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    const stepDuration = 1

    steps.forEach((step, index) => {
      const number = step.dataset.processStep ?? "01"
      
      timeline.to(
        progress,
        {
          height: `${((index + 1) / steps.length) * 100}%`,
          duration: stepDuration,
          ease: "none",
        },
        index * stepDuration
      )

      // FIX: Changed from `.to` (0.01 duration) to `.set` for instantaneous text replacement
      timeline.set(
        progressText,
        {
          textContent: `${number} / 07`,
        },
        index * stepDuration
      )

      if (index > 0) {
        timeline.to(
          steps[index - 1],
          {
            opacity: 0,
            y: -50,
            duration: 0.35,
            ease: "none",
          },
          index * stepDuration
        )

        timeline.to(
          steps[index],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "none",
          },
          index * stepDuration + 0.2
        )
      }

      dots.forEach((currentDot, dotIndex) => {
        const dotCircle = currentDot.querySelector<HTMLElement>("span")

        if (!dotCircle) return

        if (dotIndex <= index) {
          timeline.to(
            dotCircle,
            {
              scale: dotIndex === index ? 1.7 : 1.15,
              background: "#f4f4f4",
              borderColor: "#f4f4f4",
              duration: 0.25,
            },
            index * stepDuration
          )
        } else {
          timeline.to(
            dotCircle,
            {
              scale: 1,
              background: "#080808",
              borderColor: "rgba(244,244,244,0.35)",
              duration: 0.25,
            },
            index * stepDuration
          )
        }
      })
    }) // FIX: Added the missing closing parenthesis here `})`
  }, section)

  return () => {
    context.revert()
  }
}