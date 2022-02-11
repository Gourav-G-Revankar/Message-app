import React from 'react';
import logo from '../images/chat.png';
import { Link } from "react-router-dom";
import '../App.css';


const Home = () => {
  return (
    <div className='container'>
        <div className='mobile--container'>
          <Link to="/frontpage">
            <img className='mobile--homeicon' src={logo} alt="Logo" />;
          </Link>
        </div>
      </div>
  )
}

export default Home