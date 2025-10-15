import './HeroSection.css';

const HeroSection = () => {
  return (
   <div className="hero-container">
    <div className="hero-img roboto-bold-italic">
        A place of faith, Hope, and Love
    </div>
    <div className="welcome-container">
        <h2 className="welcome-title roboto-bold">Welcome to Othandweni Ethiopian Christian Church</h2>
        <p className="welcome-message roboto-medium">We're so glad you're here! Whether you're new or visiting online, you're always welcome.Our mission is to share Christ's love, build community, and empower you to live out your faith. Join us as we grow together in faith and service.</p>
        <button className="hero-cta roboto-bold">Join Us</button>
    </div>
        <div className="hero-image"></div>
   </div>
  )
}

export default HeroSection