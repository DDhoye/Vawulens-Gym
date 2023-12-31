import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Our team of experts will work with you to create a 
            customized plan that helps you achieve success one step 
            at a time.</p>
            <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>

        <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt=' Main Header img' />
            </div>

        </div>
      </div>
    </header>
  )
}

export default MainHeader
