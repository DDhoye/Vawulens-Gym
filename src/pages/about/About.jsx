import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    At Vawulens, we are dedicated to helping you achieve the body of 
    your dreams. Our expert trainers and nutritionists will work with 
    you to create a personalized fitness and nutrition plan that helps
     you reach your specific goals.
    </Header>
     
     <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='About Story Image '/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>At Vawulens, our journey began with a simple yet powerful idea: 
            to create a fitness haven where individuals could transform not only their
             bodies but also their lives. Founded by a group of fitness enthusiasts who 
             shared a deep passion for health and wellness, Vawulens emerged as a beacon 
             of hope for those seeking a path to better physical and mental well-being.</p>
          
           <p>Our story is one of dedication, sweat, and unwavering commitment to helping
             people unlock their full potential.</p>  

        </div>
      </div>
     </section>



     <section className="about__vision">
      <div className="container about__vision-container"> 
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>At Vawulens, we envision a world where health and happiness go hand in hand.
             Our vision is to be a global leader in fitness, known for our innovation,
              exceptional service, and unwavering commitment to our clients' well-being.
               We aim to create a ripple effect of positive change in the lives of 
               individuals and communities, promoting a culture of fitness and 
               self-improvement.</p>
           <p>Together, we aspire to redefine the limits of what is possible, one 
            workout at a time, and inspire generations to come to embrace the journey 
            toward a healthier, more vibrant future.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt='Our Vision Image '/>
        </div>
      </div>
     </section>


     <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt='About Mission Image '/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Our mission at Vawulens is crystal clear—to inspire, empower, and transform
             lives through the power of fitness. We believe that a healthy body is the 
             foundation for a fulfilling life, and we are determined to make that 
             foundation accessible to everyone. We strive to provide a welcoming and 
             inclusive environment where individuals of all fitness levels can thrive, 
             setting and achieving their goals while fostering a sense of community. Our 
             mission is not just about building muscles; it's about building a better you.</p>
           
            
        </div>
      </div>
     </section>
    </>
  )
}

export default About
