export type ProcessStep = {
  number: string
  title: string
  description: string
  side: "left" | "right"
  tags: string[]
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand the problem before writing the solution. Define the users, requirements, constraints, and the outcome worth building.",
    side: "left",
    tags: ["Problem", "Requirements", "Goals"],
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "Turn the problem into an experience that is clear, useful, and intuitive before implementation begins.",
    side: "right",
    tags: ["UX", "UI", "Interaction"],
  },
  {
    number: "03",
    title: "ARCHITECT",
    description:
      "Design the systems behind the product — application structure, APIs, data flow, databases, and infrastructure.",
    side: "left",
    tags: ["Systems", "APIs", "Data"],
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Turn the architecture into working software with clean code, reusable components, reliable APIs, and maintainable foundations.",
    side: "right",
    tags: ["Frontend", "Backend", "Database"],
  },
  {
    number: "05",
    title: "TEST",
    description:
      "Validate the product, find weak points, fix edge cases, and make sure the system behaves reliably under real conditions.",
    side: "left",
    tags: ["Quality", "Debugging", "Performance"],
  },
  {
    number: "06",
    title: "DEPLOY",
    description:
      "Take the finished system from a development environment into production with a reliable and repeatable delivery process.",
    side: "right",
    tags: ["CI/CD", "Docker", "Cloud"],
  },
  {
    number: "07",
    title: "SCALE",
    description:
      "Keep improving the product as users, traffic, data, and requirements grow. Build for change, not just for launch.",
    side: "left",
    tags: ["Growth", "Optimization", "Evolution"],
  },
]