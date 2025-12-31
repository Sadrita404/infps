import { Link } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { FloatingConstellation } from "@/components/effects";
import {
  ParallaxLayer,
  TiltCard,
  MagneticButton,
  Icon,
  type IconName,
} from "@/components/ui";
import { services } from "@/data/data";

export const ServicesPage = () => {
  return (
    <>
      <FloatingConstellation name="bigDipper" />
      <PageLayout
        tag="Our Services"
        title="Engineering-Grade"
        titleAccent="Technology Solutions"
        description="Built for scale, security, and real-world performance. Our capabilities cover modern data center design, cloud engineering, enterprise automation, cybersecurity, advanced networking, smart city deployments, AI/ML systems, blockchain development, and full-stack digital product engineering."
      >
        <div className="section-container">
          <div className="page-section">
            <div className="services-grid-full">
              {services.map((service, i) => (
                <TiltCard className="service-card-full">
                  <Link
                    to={`/services/${service.slug}`}
                    className="service-card-link"
                  >
                    <div className="service-header">
                      <div className="service-icon-large">
                        <Icon name={service.icon as IconName} />
                      </div>
                      <h3 className="service-title-large">{service.title}</h3>
                    </div>
                    <p className="service-desc-full">{service.desc}</p>
                    <div className="service-features-section">
                      <h4 className="service-features-title">Key Features</h4>
                      <ul className="service-features-list">
                        {service.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>

          <div className="page-section page-cta-section">
            <ParallaxLayer speed={0.1}>
              <div className="page-cta-content">
                <h2 className="page-cta-title">Need a custom solution?</h2>
                <p className="page-cta-desc">
                  We can tailor our services to meet your specific requirements.
                </p>
                <MagneticButton href="/contact" className="btn-primary large">
                  Contact Us
                </MagneticButton>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
