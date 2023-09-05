import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    We're here to answer your questions and provide the support you
     need on your fitness journey. Feel free to reach out to us 
     through the following channels:
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@david.dhoye20101@gmail.com" target='_blank' rel="noreferrer noopener" ><MdEmail/></a>
          <a href="" target='_blank' rel="noreferrer noopener" ><BsMessenger/></a>
          <a href="https://wa.me/+254759297562" target='_blank' rel="noreferrer noopener" ><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
