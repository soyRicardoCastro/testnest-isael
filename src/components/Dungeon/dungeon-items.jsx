import { GiBroadsword } from 'react-icons/gi'
import { MdHealthAndSafety } from 'react-icons/md'
import { AiFillFire } from 'react-icons/ai'

export const zone = [
  {
    num: 1,
    label: 'Zone A'
  },
  {
    num: 2,
    label: 'Zone B'
  },
  {
    num: 3,
    label: 'Zone C'
  },
]

export const mob = [
  {
    num: 1,
    label: 'Mob Nmr. 1'
  },
  {
    num: 2,
    label: 'Mob Nmr. 2'
  },
  {
    num: 3,
    label: 'Mob Nmr. 3'
  },
  {
    num: 4,
    label: 'Mob Nmr. 4'
  },
  {
    num: 5,
    label: 'Mob Nmr. 5'
  },
]

export const DungeonBastion = [
  {
    label: 'Attack Zone',
    icon: <GiBroadsword color='rgb(225 15 15)' size={24} />,
    color: 'rgb(225 15 15)',
    idInput: 'bastionId',
    idButton: 'attackZone'
  },
  {
    label: 'Heal Bastion',
    icon: <MdHealthAndSafety color='#1dcc1b' size={24} />,
    color: '#1dcc1b',
    idInput: 'healBastionId',
    idButton: 'healBastion'
  },
  {
    label: 'Burn Bastion',
    icon: <AiFillFire color='#f04005' size={24} />,
    color: '#f04005',
    idInput: 'tokenIdofBastionToBurn',
    idButton: 'burnBastion'
  },
]
