const STYLES = {
  backgroundColor: 'rgba(64, 68, 201)',
  padding: '10px 18px',
  borderRadius: '18px',
  color: '#fff',
  fontSize: '22px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  position: 'fixed',
  bottom: '20px',
  right: '20px',
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