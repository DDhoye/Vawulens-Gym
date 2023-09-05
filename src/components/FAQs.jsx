import SectionHead from "./SectionHead"
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import Naq from './Naq'



const FAQs = () => {
  return (
   <section className="faqs">
    <div className="container faqs__container">
        <SectionHead icon={<FaQuestion/>} title="FAQs"/>
        <div className="faqs__wrapper">
            {
               faqs.map(({id, question, answer}) =>{
                return <Naq key={id} question={question} answer={answer} />
               })
            }
        </div>

    </div>
   </section>
  )
}

export default FAQs
