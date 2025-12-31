import { Link } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { FloatingConstellation } from "@/components/effects";
import { TiltCard, ParallaxLayer, MagneticButton } from "@/components/ui";
import { versions } from "@/data/data";

export const PreviousVersionsPage = () => {
  return (
    <>
      <FloatingConstellation name="orion" />
      <PageLayout
        tag="Version History"
        title="Previous"
        titleAccent="Versions"
        description="Track the evolution of our website through different versions and updates."
      >
        <div className="section-container">
          <div className="page-section m-0">
            <div className="versions-grid">
              {versions.map((version, i) => {
                const CardContent = (
                  <>
                    {version.isLatest && (
                      <span className="version-badge">Latest</span>
                    )}
                    <div className="version-header">
                      <span className="version-number">{version.version}</span>
                      <h3 className="version-title">{version.header}</h3>
                    </div>
                    <p className="version-description">{version.description}</p>
                  </>
                );

                return (
                  <TiltCard
                    key={i}
                    className={`version-card ${version.isLatest ? "latest-version" : ""}`}
                  >
                    {version.link ? (
                      version.link.startsWith("http") ? (
                        <a
                          href={version.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="version-card-link"
                        >
                          {CardContent}
                        </a>
                      ) : (
                        <Link to={version.link} className="version-card-link">
                          {CardContent}
                        </Link>
                      )
                    ) : (
                      <div className="version-card-content">{CardContent}</div>
                    )}
                  </TiltCard>
                );
              })}
            </div>
          </div>

          <div className="page-section page-cta-section">
            <ParallaxLayer speed={0.1}>
              <div className="page-cta-content">
                <h2 className="page-cta-title">
                  Ready to Build Something Great?
                </h2>
                <p className="page-cta-desc">
                  We continuously improve and evolve. Let's discuss your next
                  project.
                </p>
                <MagneticButton href="/contact" className="btn-primary large">
                  Get in Touch
                </MagneticButton>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
