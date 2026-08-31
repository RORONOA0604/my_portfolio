import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initProcessAnimation() {
  const section = document.querySelector<HTMLElement>(".process-section")
  const progress = document.querySelector<HTMLElement>(
    ".process-line-progress",
  )
  const progressText = document.querySelector<HTMLElement>(
    ".process-progress",
  )

  const steps = gsap.utils.toArray<HTMLElement>(
    "[data-process-step]",
  )

  const dots = gsap.utils.toArray<HTMLElement>(
    "[data-process-dot]",
  )

  if (
    !section ||
    !progress ||
    !progressText ||
    steps.length === 0 ||
    dots.length === 0
  ) {
    return () => {}
  }

  const context = gsap.context(() => {
    const totalSteps = steps.length
    const stepDuration = 1

    // ---------------------------------------------
    // Initial state
    // ---------------------------------------------

    gsap.set(steps, {
      autoAlpha: 0,
      y: 50,
    })

    gsap.set(steps[0], {
      autoAlpha: 1,
      y: 0,
    })

    gsap.set(progress, {
      height: "0%",
    })

    // ---------------------------------------------
    // Helper for dot state
    // ---------------------------------------------

    const updateDots = (activeIndex: number) => {
      dots.forEach((dot, dotIndex) => {
        const circle =
          dot.querySelector<HTMLElement>("span")

        if (!circle) return

        if (dotIndex < activeIndex) {
          gsap.to(circle, {
            scale: 1.15,
            backgroundColor: "#f4f4f4",
            borderColor: "#f4f4f4",
            duration: 0.2,
            overwrite: true,
          })
        } else if (dotIndex === activeIndex) {
          gsap.to(circle, {
            scale: 1.7,
            backgroundColor: "#f4f4f4",
            borderColor: "#f4f4f4",
            duration: 0.25,
            overwrite: true,
          })
        } else {
          gsap.to(circle, {
            scale: 1,
            backgroundColor: "#080808",
            borderColor: "rgba(244,244,244,0.35)",
            duration: 0.2,
            overwrite: true,
          })
        }
      })

      progressText.textContent =
        `${String(activeIndex + 1).padStart(2, "0")} / ${String(totalSteps).padStart(2, "0")}`
    }

    updateDots(0)

    let activeIndex = 0

    // ---------------------------------------------
    // Scroll timeline
    // ---------------------------------------------

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=4200",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const index = Math.min(
            totalSteps - 1,
            Math.floor(self.progress * totalSteps),
          )

          if (index !== activeIndex) {
            activeIndex = index
            updateDots(activeIndex)
          }
        },
      },
    })

    // ---------------------------------------------
    // Step 1
    // ---------------------------------------------

    timeline.to(progress, {
      height: `${(1 / totalSteps) * 100}%`,
      duration: stepDuration,
      ease: "none",
    })

    // ---------------------------------------------
    // Remaining steps
    // ---------------------------------------------

    for (let index = 1; index < totalSteps; index++) {
      const previousStep = steps[index - 1]
      const currentStep = steps[index]

      const startTime = index * stepDuration

      // Previous step leaves
      timeline.to(
        previousStep,
        {
          autoAlpha: 0,
          y: -50,
          duration: 0.3,
          ease: "none",
        },
        startTime,
      )

      // Current step enters
      timeline.fromTo(
        currentStep,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: "none",
        },
        startTime + 0.25,
      )

      // Progress line
      timeline.to(
        progress,
        {
          height: `${((index + 1) / totalSteps) * 100}%`,
          duration: stepDuration,
          ease: "none",
        },
        startTime,
      )
    }
  }, section)

  return () => {
    context.revert()
  }
}