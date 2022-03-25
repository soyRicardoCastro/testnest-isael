import { links } from '../../components/Navbar/nav-items.js'

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {links.map(
      (item, i) => (
        <a
          href={item.path}
          key={i}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#ff8e00" } : {}}
          aria-label="Navigation Dots"
        />
      )
    )}
  </div>
)

export default NavigationDots
