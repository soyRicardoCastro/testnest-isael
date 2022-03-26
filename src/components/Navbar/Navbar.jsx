import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { links } from './nav-items'
import './styles.scss'

export default function Navbar () {  
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h3>
        <div />
          Project: Isael Testnet
        </h3>
      </div>
      <ul className='app__navbar-links'>
        {links.map((item, i) => (
          <li key={i} className='app__flex p-text'>
            <div />
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX
              onClick={() => setToggle(false)}
            />
            <ul className="app__navbar-link">
              {links.map(item => (
                <li key={item.name}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}