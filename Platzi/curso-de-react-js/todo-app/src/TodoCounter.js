const estilos = {
  fontWeight: 500,
  fontSize: '24px',
  textAlign: 'center',
  color: 'red',
  padding: '48px',
}
function TodoCounter( { completed, total } ){
  return(
    <h1 style={estilos}>Has Completado { completed } de { total } TODOs</h1>
  );
}

export {
  TodoCounter
};