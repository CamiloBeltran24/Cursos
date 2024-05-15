function TodoItem({ text, completed }) {
  return(
    <li>
      <span
        className={`Icon Icon-check ${ completed ? 'Icon-check--completed' : ''} `}
        onClick={}
      >V</span>
      <p>{ text }</p>
      <span className={`Icon Icon-delete`}>X</span>
    </li>
  );
}

export {
  TodoItem,
}