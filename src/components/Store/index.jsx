import { tableItems, itemsCard } from './store-items'
import MainButton from '../Buttons/MainButton'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap }  from '../../wrapper'
import './styles.scss'

function Store() {
  return (
    <section id='store'>
      <div>
        <div className='app__text'>
          <span className='text-store'></span>
        </div>
        <div>
          <div className='app__items'>
            {itemsCard.map((item, i) => (
              <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__items-child'
            > 
              <h2 className='bold-text' style={{ marginTop: 20 }}>
                {item.name}
              </h2>
              <p className='p-text' style={{marginTop: 10}}>
                {item.price}
              </p>
              <MainButton text='Buy' />
            </motion.div>
            ))}
          </div>
          <div className='buy__button'>
            <MainButton text='Buy Items' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Store, "app__about"),
  "store"
)
