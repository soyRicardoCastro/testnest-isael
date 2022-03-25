import { AppWrap, MotionWrap } from "../../wrapper"
import MainButton from '../Buttons/MainButton'
import Metamask from '../../assets/icons/Metamask'
function Checking() {
  return (
    <section id='checking'>
      <div>
        <h2 className='head-text'>Checking</h2>
        <div>
          <MainButton text='Check my NFTs' icon={<Metamask />} />
        </div>
        <div>
          <MainButton text='Check my Bastion NFT' icon={<Metamask />} />
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Checking, "app__about"),
  "checking"
)