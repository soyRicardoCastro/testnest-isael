import { useState } from 'react'
import { tableItems, itemsCard } from './store-items'
import { AppWrap, MotionWrap }  from '../../wrapper'

function Store() {
  const [viewFoo, setViewFoo] = useState(false)
  return (
    <section id='store'>
      <div>
        <h4>Store</h4>
        <div>
          <table>
            <thead>
              <tr>
                {tableItems.map((items,i) => (
                  <th key={i} scope='col'>
                    {items.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {itemsCard.map((item, i) => (
                <div key={i}>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button>Buy</button>
                </div>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope='row'>
                  Empty - Start to buy!
                </th>
              </tr>
            </tfoot>
          </table>
          <button>Buy Items</button>
        </div>
        <div>Cards</div>
        <div>
          {/* Aca vam las cards */}
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Store, "app__about"),
  "store"
)


/*

<motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>

*/