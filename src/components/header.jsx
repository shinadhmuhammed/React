const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLjgVaCznCZ5woAIfS1DmTYiOqcTQNQM58ghZlgGUvcnQnZDnL-mKzwxsQ3ZJSgQ9_3M&usqp=CAU"
          ></img>
        </div>
        <div className="navbar">
          <ul>
            <li>Home </li>
            <li>About us </li>
            <li>Contact </li>
            <li>Cart </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header