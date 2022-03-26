import { BsTwitter, BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          target='_blank'
          href='https://twitter.com/projectISAEL'
          rel='noreferrer'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://discord.com/invite/4pXagsxbcb'
          rel='noreferrer'>
          <FaDiscord />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://www.instagram.com/projectisaelofficial/'
          rel='noreferrer'>
            <BsInstagram />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://t.me/+wF8jz10mWy4xNjIx'
          rel='noreferrer'>
          <BsTelegram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
