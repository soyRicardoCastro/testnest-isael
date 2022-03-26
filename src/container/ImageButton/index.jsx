import MainButton from '../../assets/buttons/ButtonOn.png'

export default function ImageButton({ text, link}) {
  return (
    <div className='article-card'>
      <img src={MainButton} style={{ width: '100%' }} alt='Button Background' />

      <div className='contentBx'>
        <div className='content'>
          <h3>
            <a href={link} rel='noreferrer'>{text}</a>
          </h3>
        </div>
      </div>

    </div>
  )
}