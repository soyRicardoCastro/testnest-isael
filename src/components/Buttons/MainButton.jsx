import './styles.scss'
import { FaShoppingCart } from 'react-icons/fa'

export default function MainButton({ icon = <FaShoppingCart color='#ff8e00' />, text = 'Button', color = '#ff8e00', onClick, id }) {
	return (
		<button id={id} style={{background: color}} class="cssbuttons-io-button" onClick={onClick}> 
			{text}
		<div class="icon">
			{icon}
		</div>
		</button>
	)
}
