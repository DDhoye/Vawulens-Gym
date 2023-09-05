import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image}alt='value image'/>
                </div>
            </div>
            <div className="values__right">
                <SectionHead  icon={<GiCutDiamond/>} title='Values' />
                <p>At Vawulens Gym, our values are the foundation of 
                    everything we do. They shape our culture, guide 
                    our decisions, and inspire our actions every day.
                     Excellence is our compass, driving us to deliver 
                     the best fitness experience possible.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return (
                            <Card key={id} className="values__value">
                               <span>{icon}</span>
                               <h4>{title}</h4>
                               <small>{desc}</small>
                            </Card>
                         )
                        })
                    }
                </div>              
            </div>
        </div>
    </section>
  )
}

export default Values
