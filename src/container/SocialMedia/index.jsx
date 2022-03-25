import { BsTwitter, BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          target='_blank'
          href='https://google.com'
          rel='noreferrer'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://google.com'
          rel='noreferrer'>
          <FaDiscord />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://google.com'
          rel='noreferrer'>
            <BsInstagram />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://google.com'
          rel='noreferrer'>
          <BsTelegram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia