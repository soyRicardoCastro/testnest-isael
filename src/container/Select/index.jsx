import './styles.scss'

export default function Select({children}) {
	return (
		<div className='select'>
			<select>
				{children}
			</select>
		</div>
	)
}