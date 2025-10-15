import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="sermons-hero">
      <h2 className="hero-title roboto-bold">Sermons & Teachings</h2>
      <p className="hero-subheading roboto-regular">
        Explore the Word of God and grow in faith with our sermons and
        teachings.
      </p>
      <button className="sermons-cta roboto-medium">Watch latest sermon</button>
    </div>
  );
};

export default HeroSection;
