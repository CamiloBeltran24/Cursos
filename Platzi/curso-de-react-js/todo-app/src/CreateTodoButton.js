const STYLES = {
  backgroundColor: 'red',
  padding: '10px 15px',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '22px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}


function CreateTodoButton(){
  return(
    <button 
    style={STYLES}
    onClick={
      (e) => {
        console.log('Click');
        console.log(e.target);
      }
    }>+</button>
  );
}

export {
  CreateTodoButton
}