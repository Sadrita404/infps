import { ParallaxLayer, SplitText, TiltCard } from "@/components/ui";
import { processSteps } from "@/data/data";

export const ProcessSection = () => {
  return (
    <section id="process" className="process">
      <div className="section-container">
        <ParallaxLayer speed={-0.2}>
          <div className="section-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">
              <SplitText text="Our Proven" />
              <br />
              <SplitText text="Methodology" className="accent" />
            </h2>
          </div>
        </ParallaxLayer>

        <div className="process-horizontal">
          <div className="process-connector" />
          {processSteps.map((step, i) => (
            <div key={i} className="process-step-h">
              <div className="step-number-h">
                <span>{step.num}</span>
              </div>
              <TiltCard className="step-card-h">
                <h3 className="step-title-h">{step.title}</h3>
                <p className="step-desc-h">{step.desc}</p>
                <ul className="step-points-h">
                  {step.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
