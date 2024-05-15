const CURRENT_DATE = new Date();
const CURRENT_DAY = CURRENT_DATE.getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CURRENT_MONTH = monthNames[ CURRENT_DATE.getMonth() ];

function TodoHeader(){
  return(
    <>
      <header className="header">
        <div className='header__menu-button'>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <span className="header__date">{`${CURRENT_DAY} ${CURRENT_MONTH}`}</span>
        <span className="header__timer">clock</span>
      </header>
    </>
  );
}

export {
  TodoHeader
}