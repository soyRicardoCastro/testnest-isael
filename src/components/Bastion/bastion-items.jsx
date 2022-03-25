import Input from "../../container/Input"
import MainButton from '../Buttons/MainButton'
import ImageBastion from '../../assets/banner/icon_bastion.png'
import { MdHealthAndSafety } from 'react-icons/md'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'

const inputsBastion = [
  {
    id: 'tokenIdsOfBanner',
    label: 'Banner'
  },
  {
    id: 'tokenIdsOfInquisitors',
    label: 'inquisitors'
  }
]

const inputsInquisitors = [
  {
    id: 'addInquisitors',
    label: 'Add Inquisitor'
  },
  {
    id: 'tokenIdBastionINQ',
    label: 'Token id'
  },
]

export const BastionHeader = () => {
  return (
    <div className='app__text'>
      <span className='image-text'></span>
    </div>
  )
}

export const BastionFooter = () => {
  return (
    <div className='bastion__footer'>
      <div className='bastion__img'>
        <img src={ImageBastion} alt='Bastion Illustration' />
      </div>
      <div className='app__input'>
        <div className='input__bastion'>
          {inputsBastion.map((items,i) => (
            <Input id={items.id} label={items.label} key={i} />
          ))}
          <MainButton text='Mint Bastion' color='rgb(225 15 15)' icon={<BsBoxSeam color='rgb(225 15 15)' size={24} />} />
        </div>
        <div className='input__inquisitors'>
          {inputsInquisitors.map((items, i) => (
            <Input id={items.id} label={items.label} key={i} />
          ))}
          <MainButton text='Add Inquisitors' icon={<AiOutlineUserAdd color='#ff8e00' size={24} />} />
        </div>
        <div className='input__health'>
          <Input id='checkBastionHealthID' label='Token id of Bastion' />
          <MainButton color='#1dcc1b' text='Check Bastion Health' icon={<MdHealthAndSafety color='#1dcc1b' size={24} />} />
        </div>
      </div>
  </div>
  )
}
