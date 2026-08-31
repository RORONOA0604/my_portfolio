import { processSteps } from "../data/process"

function Process() {
  return (
    <section className="process-section">
      <div className="process-header">
        <p className="section-label">THE WAY I BUILD</p>
        <p className="process-progress">01 / 07</p>
      </div>

      <div className="process-stage">
        <div className="process-line">
          <div className="process-line-track" />
          <div className="process-line-progress" />

          <div className="process-dots">
            {processSteps.map((step) => (
              <div
                className="process-dot"
                data-process-dot={step.number}
                key={step.number}
              >
                <span />
              </div>
            ))}
          </div>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <article
              className={`process-step process-step-${step.side}`}
              data-process-step={step.number}
              key={step.number}
            >
              <p className="process-number">{step.number}</p>

              <h2>{step.title}</h2>

              <p className="process-description">
                {step.description}
              </p>

              <div className="process-tags">
                {step.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process