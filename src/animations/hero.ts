import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initHeroAnimation() {
  const hero = document.querySelector<HTMLElement>(".hero")

  const identity =
    document.querySelector<HTMLElement>(".hero-identity")

  const description =
    document.querySelector<HTMLElement>(".hero-description")

  const scroll =
    document.querySelector<HTMLElement>(".hero-scroll")

  const scrollLine =
    document.querySelector<HTMLElement>(".hero-scroll-line")

  const line1 =
    document.querySelector<HTMLElement>(".hero-line-1")

  const line2 =
    document.querySelector<HTMLElement>(".hero-line-2")

  const line3 =
    document.querySelector<HTMLElement>(".hero-line-3")

  if (
    !hero ||
    !identity ||
    !description ||
    !scroll ||
    !scrollLine ||
    !line1 ||
    !line2 ||
    !line3
  ) {
    return () => {}
  }

  const context = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=2400",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    /*
     * PHASE 1
     *
     * Your identity begins in the center.
     * As the user scrolls, it moves toward
     * the upper-left and becomes smaller.
     */
gsap.set(identity, {
  xPercent: -50,
  yPercent: 0,
  scale: 1,
})
    timeline.to(
  identity,
  {
    top: "36px",
    left: "44px",
    xPercent: 0,
    yPercent: 0,
    scale: 0.58,
    textAlign: "left",
    duration: 0.7,
    ease: "power2.out",
  },
  0
)

    /*
     * The supporting description leaves
     * the hero once the identity becomes
     * part of the permanent interface.
     */

    timeline.to(
      description,
      {
        y: -80,
        opacity: 0,
        duration: 0.7,
        ease: "none",
      },
      0
    )

    /*
     * Scroll indicator disappears.
     */

    timeline.to(
      scroll,
      {
        opacity: 0,
        duration: 0.25,
        ease: "none",
      },
      0
    )

    timeline.to(
      scrollLine,
      {
        scaleY: 0,
        duration: 0.3,
        ease: "none",
      },
      0
    )

    /*
     * PHASE 2
     *
     * The three lines now separate.
     */

    timeline.to(
      line1,
      {
        x: "-16vw",
        y: "-8vh",
        scale: 0.8,
        opacity: 0.35,
        duration: 1,
        ease: "none",
      },
      0.8
    )

    timeline.to(
      line3,
      {
        x: "16vw",
        y: "8vh",
        scale: 0.8,
        opacity: 0.35,
        duration: 1,
        ease: "none",
      },
      0.8
    )

    /*
     * PHASE 3
     *
     * SOFTWARE becomes the dominant
     * visual element.
     */

    timeline.to(
      line2,
      {
        scale: 1.5,
        duration: 0.8,
        ease: "none",
      },
      1.15
    )

    /*
     * PHASE 4
     *
     * SOFTWARE expands beyond the viewport.
     */

    timeline.to(
      line2,
      {
        scale: 4.2,
        opacity: 0,
        duration: 1.2,
        ease: "none",
      },
      1.95
    )

    /*
     * The remaining two lines disappear
     * after SOFTWARE has taken over.
     */

    timeline.to(
      [line1, line3],
      {
        opacity: 0,
        duration: 0.6,
        ease: "none",
      },
      2.4
    )
  }, hero)

  return () => {
    context.revert()
  }
}