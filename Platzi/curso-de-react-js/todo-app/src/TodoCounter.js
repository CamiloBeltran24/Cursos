const estilos = {
  fontWeight: 500,
  fontSize: '24px',
  textAlign: 'center',
  color: 'red',
  padding: '48px',
}
function TodoCounter( props ){
  return(
    <h1 style={estilos}>Has Completado { props.completed } de { props.total } TODOs</h1>
  );
}

export {
  TodoCounter
};