import { BastionFooter } from './bastion-items'
import { AppWrap, MotionWrap } from "../../wrapper"
import './styles.scss'

function Bastion () {
  return (
    <section id='bastion'>
      <div className='app__text-bastion'>
        <span className='text-bastion'></span>
        <h4 className='instruction-mint'>
          IN ORDER TO BUY NFT'S YOU WILL NEED TO APPROVE THE REQUESTED AMOUNT OF USDT IN YOUR WALLET
        </h4>
    </div>
      <BastionFooter />
    </section>
  )
}

export default AppWrap( 
  MotionWrap(Bastion, "app__about"),
  "bastion"
)