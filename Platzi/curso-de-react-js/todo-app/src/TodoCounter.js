const estilos = {
  fontWeight: 500,
  fontSize: '22px',
  textAlign: 'center',
  color: '#fff',
  margin: '0',
  fontWeight: '400'
}
function TodoCounter( { completed, total } ){
  return(
    <div className="counter">
      <h1 style={estilos}>Has Completado { completed } de { total } TODOs</h1>
    </div>
  );
}

export {
  TodoCounter
};