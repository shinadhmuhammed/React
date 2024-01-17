import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurentCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5okG0tz2dWr36k2p9gxbFmqoM4AeW1e3pPQ&usqp=CAU"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisince}</h4>
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurentCard resName='meghanafoods' cuisince=' crispy and frency burger'/>
        <RestaurentCard resName='kannur food kitchen' cuisince=' chicken biriyani,hyderabadi'/>
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
