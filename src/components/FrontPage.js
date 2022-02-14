import React from 'react'
import '../App.css';
import { FiUsers } from "react-icons/fi";
import { BiWindows } from "react-icons/bi";
import { BiDotsVertical } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoIosNavigate } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
//user icon
import User1 from "../images/user1.jpg"
import User2 from "../images/user2.jpg"
import User3 from "../images/user3.jpg"
import User4 from "../images/user4.jpg"
import User5 from "../images/user5.jpg"
import User6 from "../images/user6.jpg"
import User7 from "../images/user7.jpg"
import User8 from "../images/user8.jpg"

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
                <img className='front--addicon2' src={User1} alt="user-icon" />
                <p>Shrvim</p>
              </div>
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <div>
                <img className='front--addicon2' src={User2} alt="user-icon" />
                <p>Maria</p>
              </div>
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <div>
                <img className='front--addicon2' src={User3} alt="user-icon" />
                <p>Amir</p>
              </div>
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <div>
                <img className='front--addicon2' src={User4} alt="user-icon" />
                <p>Paris</p>
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
                  <div className='msg--userinfo__block'>
                    <img src={User5} alt="user-icon" className='msg--userinfo__icon' />
                    <div>
                      <h4>Media Soltani</h4>
                      <p className='msg--userinfo__recentmsg'>hey bro.. What's up??</p>
                    </div>
                  </div>
                  <div className='msg--userinfo__notification'>
                    <p>2M</p>
                    <p className='msg--userinfo__notificationcontent'>3</p>
                  </div>
                </div>
              </Link>

              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div className='msg--userinfo'>
                  <div className='msg--userinfo__block'>
                    <img src={User6} alt="user-icon" className='msg--userinfo__icon' />
                    <div>
                      <h4>Parinaz Gholami</h4>
                      <p className='msg--userinfo__recentmsg'>Send voice messages</p>
                    </div>
                  </div>
                  <div className='msg--userinfo__notification'>
                    <p>15M</p>
                    <p className='msg--userinfo__notificationcontent'>1</p>
                  </div>
                </div>
              </Link>

              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div className='msg--userinfo'>
                  <div className='msg--userinfo__block'>
                    <img src={User7} alt="user-icon" className='msg--userinfo__icon' />
                    <div>
                      <h4>Designers</h4>
                      <p className='msg--userinfo__recentmsg'>Yes, Sure</p>
                    </div>
                  </div>
                  <div className='msg--userinfo__notification'>
                    <p>2M</p>
                    <p className='msg--userinfo__notificationcontent'>3</p>
                  </div>
                </div>
              </Link>

              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div className='msg--userinfo'>
                  <div className='msg--userinfo__block'>
                    <img src={User8} alt="user-icon" className='msg--userinfo__icon' />
                    <div>
                      <h4>Sharzad Koohestani</h4>
                      <p className='msg--userinfo__recentmsg'>send an attachment</p>
                    </div>
                  </div>
                  <div className='msg--userinfo__notification'>
                    <p>Yesterday</p>
                    <p></p>
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