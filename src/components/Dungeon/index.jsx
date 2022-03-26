import { zone, mob, DungeonBastion } from './dungeon-items'
import { AppWrap, MotionWrap } from '../../wrapper'
import Select from '../../container/Select'
import MainButton from '../Buttons/MainButton'
import Input from '../../container/Input'
import './styles.scss'
import ImageMap from '../../assets/banner/map.png'

function Dungeon() {
  return (
    <section id='dungeon'>
      <div className='app__text-dungeon'>
        <span className='image-text'></span>
        <h4 className='head-text'>Attack Dungeon</h4>
      </div>
      <div className='app__dungeon'>
      <div className='dungeon'>
        <div className='dungeon__select'>
          <Select id='Zone'>
            {zone.map((items, i) => (
              <option key={i} value={items.num}>
                {items.label}
              </option>
            ))}
          </Select>
          <Select id='mob'>
            {mob.map((items, i) => (
              <option value={items.num} key={i}>
                {items.label}
              </option>
            ))}
          </Select>
        </div>
        <div className='dungeon__input'>
          {DungeonBastion.map((items, i) => (
            <div key={i} className='dungeon__input-child'>
              <Input id={items.idInput} label='Token Bastion' />
              <MainButton id={items.idButton} icon={items.icon} color={items.color} text={items.label} />
            </div>
          ))}
        </div>
      </div>
      <figure>
        <img src={ImageMap} alt='Map of Isael World' />
      </figure>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Dungeon, "app__about"),
  "dungeon"
)