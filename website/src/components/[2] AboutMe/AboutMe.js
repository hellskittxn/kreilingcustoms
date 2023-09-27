import './AboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="aboutme-info">
        <h1>About Us</h1><br/>
        <i>Founded by Devin Kreiling, a seasoned boat enthusiast with 5+ years of experience in the maritime industry, Kreiling Customs was born out of a deep love for the water and a commitment to excellence. We understand that your boat is not just a possession; it's an investment, a source of adventure, and a symbol of your passion for the sea.</i>
      </div>
      <br/>
      <div className="why-us">
        <h1>Why Choose Us</h1><br/>
        <i>At Kreiling Customs, we set ourselves apart through:</i>
        <ul>
            <li><h2>1. Expertise: </h2> <i>Our team comprises skilled professionals who know boats inside and out. We have the knowledge and experience to handle every aspect of boat detailing and maintenance.</i></li>
            <li><h2>2. Custom Solutions:</h2> <i>We understand that every boat is unique. That's why we offer tailored services to meet your specific needs, ensuring your boat receives the care it deserves.</i></li>
            <li><h2>3. Quality Products:</h2> <i>We use only the highest-quality products and tools, ensuring long-lasting results that protect and enhance the beauty of your boat.</i></li>
            <li><h2>4. Customer Satisfaction:</h2> <i>Your satisfaction is our top priority. We go above and beyond to exceed your expectations and leave your boat looking immaculate.</i></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
