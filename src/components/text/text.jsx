
function Text({texto = "Texto Padrão", color = "blue"}) {
  return (
      <h3 style={{color: color}}>{texto.toUpperCase()}</h3>
  )
}
export default Text