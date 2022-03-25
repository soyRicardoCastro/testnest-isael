import { AppWrap, MotionWrap } from "../../wrapper"
import MainButton from '../Buttons/MainButton'
import Metamask from '../../assets/icons/Metamask'
import './styles.scss'

function Checking() {
  return (
    <section id='checking'>
      <div className="checking__text"><span className='checking-text'></span></div>
      <div className='checking'>
        <div className='checking__buttons'>
          <div>
            <MainButton text='Check my NFTs' icon={<Metamask />} />
          </div>
          <div>
            <MainButton text='Check my Bastion NFT' icon={<Metamask />} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Checking, "app__about"),
  "checking"
)