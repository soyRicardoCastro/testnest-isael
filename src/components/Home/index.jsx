import { AppWrap, MotionWrap } from '../../wrapper'
import LogoHome from '../../assets/logo.png'
import './styles.scss'

function Home() {
  return (
    <section id='home'>
      <figure className='logo-home'>
        <img src={LogoHome} alt='Isael Project Logo' />
      </figure>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Home, 'app__about'),
  'home'
)
