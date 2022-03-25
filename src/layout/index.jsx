import BaseLayout from './BaseLayout'
import { Navbar, Main, Bastion, Dungeon, Store, Checking } from '../components'
export default function MainLayout() {
  return (
    <div className='app'>
    <Navbar />
    <BaseLayout>
      <Main />
      <Bastion />
      <Dungeon />
      <Store />
      <Checking />
    </BaseLayout>
    </div>
  )
}
