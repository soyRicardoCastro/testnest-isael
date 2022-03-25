import { BastionHeader, BastionFooter } from './bastion-items'
import { AppWrap, MotionWrap } from "../../wrapper"
import './styles.scss'

function Bastion () {
  return (
    <section id='app__flex bastion'>
      <div className='bastion__text'>
        <span className='image-text'></span>
    </div>
      <BastionFooter />
    </section>
  )
}

export default AppWrap( 
  MotionWrap(Bastion, "app__about"),
  "bastion"
)