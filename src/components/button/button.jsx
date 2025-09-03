
import './button.css'

const AlertLabel = () => {
  alert('A label desse botão é Baixar CV');
}
function Button({ label = 'Baixar CV' }) {
  return <button className='btn' onClick={AlertLabel}>{label}</button>;
}


export default Button