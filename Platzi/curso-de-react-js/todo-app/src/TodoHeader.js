const CURRENT_DATE = new Date();

function TodoHeader(){
  return(
    <>
      <header className="header">
        <span className='header__menu-button'>menu</span>
        <span className="header__date">{CURRENT_DATE.toLocaleDateString()}</span>
        <span className="header__timer">clock</span>
      </header>
    </>
  );
}

export {
  TodoHeader
}