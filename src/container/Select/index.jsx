import './styles.scss'

export default function Select({children, id}) {
	return (
		<div className='select'>
			<select id={id}>
				{children}
			</select>
		</div>
	)
}