import { useState } from 'react'
import styled from 'styled-components'
import { AppWrap, MotionWrap } from "../../wrapper"
import { box, avatar } from './main-items'
import MainButton from '../Buttons/MainButton.jsx'
import Select from '../../container/Select'
import Metamask from '../../assets/icons/Metamask.jsx'
import Theter from '../../assets/icons/Theter.jsx'
import BannerMint from '../../assets/banner/icon_banner.png'
import { BsBoxSeam } from 'react-icons/bs'
import './styles.scss'
import Modal from '../../container/Modal/Modal'
import Loader from '../../container/Loader'

function Main () {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  return (
    <>
    <section id='mint'>
      <div className='app__text'>
        <span className='image-text'></span>
        <h4 className='instruction-mint'>
          IN ORDER TO BUY NFT'S YOU WILL NEED TO APPROVE THE REQUESTED AMOUNT OF USDT IN YOUR WALLET
        </h4>
      </div>

      <div className='app__mint'>
        <div className="app__cta">
        <div className='selects'>
          <Select>
          {avatar.map((item, i) => (
            <option value={item.num} key={i}>
              {item.label}
            </option>
          ))}
          </Select>

          <Select>
            {box.map((item, i) => (
              <option value={item.num} key={i}>
                {item.num} Box
              </option>
            ))}
          </Select>
        </div>
        <div className="group__buttons">
          <MainButton 
            text='Mint'
            icon={<BsBoxSeam size={24} color='rgb(225 15 15)' />}
            color='rgb(225 15 15)'
            onClick={toggle}
          />
          <MainButton 
            text='Approve USDT'
            icon={<Theter/>}
            color='rgb(83 174 148)'
          />
          <MainButton
            text='Aprove NFTs'
            icon={<Metamask/>}
          />
        </div>

        <Modal
          estado={modal}
          cambiarEstado={setModal}
          titulo='Mint'
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
        >
          <Contenido>
            <h1 className='head-text'>Inquisitor / Banner</h1>
            <p className='bold-text'>IN ORDER TO BUY NFT'S YOU WILL NEED TO APPROVE THE REQUESTED AMOUNT OF USDT IN YOUR WALLET</p>
            <Loader />
          </Contenido>
        </Modal>

      </div>
      <img src={BannerMint} alt='Banner Mint Nfts' className='app__image' />
      </div>
      
    </section>
    </>
  )
}

export default AppWrap(
  MotionWrap(Main, 'app__about'),
  "mint",
) 

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

  h1, p {
    margin-bottom: 50px;
  }
`