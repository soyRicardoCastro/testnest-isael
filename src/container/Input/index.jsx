import './styles.scss'

export default function Input({label, id}) {
  return (
    <div className='form'>
      <input type='text' id={id} className='form__input' autocomplete='off' placeholder=' ' />
      <label for={id} className='form__label'>{label}</label>
    </div>
  )
}