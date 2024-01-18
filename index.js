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
  const {resData}=props
  const {resName,cuisince,stars,minutes}=resData
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5okG0tz2dWr36k2p9gxbFmqoM4AeW1e3pPQ&usqp=CAU"
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisince}</h4>
      <h4>{stars}</h4>
      <h4>{minutes}</h4>
    </div>
  );
};


const resList = [
  {
    resName: 'meghanafoods',
    cuisine: 'Crispy and Frenchy Burger',
    stars: '4.4 stars',
    minutes:'40 minutes'
  },
  {
    resName: 'tastybites',
    cuisine: 'Spicy Mexican Delights',
    stars: '4.8 stars',
    minutes:'44 minutes'
  },
  {
    resName: 'asianflavors',
    cuisine: 'Sushi Extravaganza',
    stars: '4.6 stars',
    minutes:'30 minutes'
  },
  {
    resName: 'italianaroma',
    cuisine: 'Authentic Italian Pizzas',
    stars: '4.7 stars',
    minutes:'55 minutes'
  },
  {
    resName: 'dessertdreams',
    cuisine: 'Sweet Tooth Paradise',
    stars: '4.5 stars',
    minutes:'12 minutes'
  },
];



const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((rest)=>(
          <RestaurentCard resData={rest} key={rest.resName}/>
        ))}
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
