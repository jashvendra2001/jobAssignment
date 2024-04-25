import React, { useContext } from 'react';
import "./home.css"; // Make sure this path is correct
import img from "../img/dog12.png";
import DataContext from '../Datacontext';

const Home = () => {
  const receivedData = useContext(DataContext);
  console.log(receivedData)
  return (
    <div className={`parents container ${receivedData ? 'night-mode' : 'day-mode'}`} style={{ position: "relative", height: "100vh", width: "100%" }}>
      <div className="pera">
        <p className="p1">DOG</p>
        <p className="p2">DOG</p>
      </div>

      <div className="img">
        <img
          src={img}
          alt="img"
        />
      </div>
    </div>
  );
}

export default Home;
