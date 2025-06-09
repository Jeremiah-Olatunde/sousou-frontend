import { FAQs } from "./faqs";
import { FeatureOverview } from "./feature-overview";
import { Footer } from "./footer";
import { FromOurBlog } from "./from-our-blog";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Nav } from "./nav";
import { Testimonials } from "./testimonials";

export function Landing() {
  return (
    <>
      <Nav />
      <div className="h-24" />
      <Hero />
      <div className="h-56" />
      <HowItWorks />
      <div className="h-56" />
      <FeatureOverview />
      <div className="h-56" />
      <Testimonials />
      <div className="h-56" />
      <FAQs />
      <div className="h-56" />
      <FromOurBlog />
      <div className="h-56" />
      <Footer />
    </>
  );
}
