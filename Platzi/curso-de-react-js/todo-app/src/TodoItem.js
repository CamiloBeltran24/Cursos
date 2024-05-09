function TodoItem({ text, completed }) {
  return(
    <li>
      <span className={`Icon Icon-check ${ completed ? 'Icon-check--completed' : ''} `}>V</span>
      <p>{ text }</p>
      <span>X</span>
    </li>
  );
}

export {
  TodoItem,
}