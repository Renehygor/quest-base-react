
import './button.css'

const AlertLabel = () => {
  alert('A label desse botão é Baixar CV');
}
function Button({ label = 'Clique aqui' }) {
  return <button className='btn' onClick={AlertLabel}>{label}</button>;
}


export default Button