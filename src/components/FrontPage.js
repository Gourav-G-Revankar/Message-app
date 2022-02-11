import React from 'react'
import '../App.css';
import { FiUsers } from "react-icons/fi";
import { BiWindows } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoIosNavigate } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <div className='container'>
        <div className='front--container'>
          <div className='front--container__heading'>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div>
                <h4>Message</h4>
                <p>2 Friends. 5 Unred message</p>
              </div>
            </Link>
            <div>
              <FiUsers className='front--container__headingicon' />
            </div>
          </div>

          <div className='front--container__newuser'>
            <div className='front--adduser'>
              <BiWindows className='front--addicon1' />
            </div>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <div>
                <FaUserCircle className='front--addicon2' />
                <p>User</p>
              </div>
            </Link>
          </div>

          <div className='front--msgblock'>
            <div className='front--msg__content'>
              <div>
                <h3>Today</h3>
              </div>
              <div>
                <BiDotsVertical className='front--msg__contenticon' />
              </div>
            </div>

            <div className='front--msg__userinfo'>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div className='msg--userinfo'>
                  <div>
                    <FaUserCircle className='msg--userinfo__icon' />
                  </div>
                  <div>
                    <h4>User</h4>
                    <p>hey bro.. What's up??</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className='front--msg__navigate'>
              <div>
                <BiMessageDetail className='msg--navigateicon1' />
              </div>
              <div>
                <IoMdCall className='msg--navigateicon2' />
              </div>
              <div>
                <IoIosNavigate className='msg--navigateicon3' />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default FrontPage