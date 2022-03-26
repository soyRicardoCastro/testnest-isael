import BaseLayout from './BaseLayout'
import { Home, Navbar, Main, Bastion, Dungeon, Store, Checking } from '../components'
export default function MainLayout() {
  return (
    <div className='app'>
    <Navbar />
    <BaseLayout>
      <Home />
      <Main />
      <Bastion />
      <Dungeon />
      <Store />
      <Checking />
    </BaseLayout>
    </div>
  )
}
