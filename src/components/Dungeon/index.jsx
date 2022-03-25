import { zone, mob, DungeonBastion } from './dungeon-items'
import { AppWrap, MotionWrap } from '../../wrapper'
import { GiBroadsword } from 'react-icons/gi'
import Select from '../../container/Select'
import MainButton from '../Buttons/MainButton'
import Input from '../../container/Input'

function Dungeon() {
  return (
    <section id='dungeon'>
      <div>
        <figure>
          {/* Aqui va una imagen */}
        </figure>
      </div>
      <div>
        <h3 className='head-text'>Dungeon</h3>
      </div>
      <div>
        <h4>Attack Dungeon</h4>
        <div>
          <Select>
            {zone.map((items, i) => (
              <option key={i} value={items.num}>
                {items.label}
              </option>
            ))}
          </Select>
          <Select>
            {mob.map((items, i) => (
              <option value={items.num} key={i}>
                {items.label}
              </option>
            ))}
          </Select>
        </div>
        <div>
          {DungeonBastion.map((items, i) => (
            <div key={i}>
              <Input label='Token id of Bastion' />
              <MainButton icon={items.icon} color={items.color} text={items.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Dungeon, "app__about"),
  "dungeon"
)