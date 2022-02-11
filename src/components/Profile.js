import React from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import ChatProvider from './ChatProvider'
import '../App.css';
import { BsImages } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import { IoIosContact } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { BiDotsVertical } from "react-icons/bi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className='container'>
        <div className='chat--container'>
          <div className='chat--container__info'>
            <div className='chat--userinfo__icon1'>
              <Link to="/frontpage">
                <IoIosArrowBack  className='chat--container__infoicon'/>
              </Link>
            </div>
            <div className='chat--userinfo'>
              <p>User</p>
              <p>Online</p>
            </div>
            <div className='chat--userinfo__icon2'>
              <IoMdCall className='chat--container__infoicon' />
              <BsCameraVideo className='chat--container__infoicon' />
              <BiDotsVertical className='chat--container__infoicon' />
            </div>
          </div>
          <div className='chat--container__area'>
            <ChatProvider>
              <ChatList />
              <ChatForm />
            </ChatProvider>
            <div className='chat--container__bottomarea'>
              <div>
                <div className='chat--icon icon1'>
                  <BsImages className='chat--container__icon' />
                </div>
                <p>Image</p>
              </div>
              <div>
                <div className='chat--icon icon2'>
                  <VscFiles className='chat--container__icon' />
                </div>
                <p>File</p>
              </div>
              <div>
                <div className='chat--icon icon3'>
                  <IoIosContact className='chat--container__icon' />
                </div>
                <p>Contact</p>
              </div>
              <div>
                <div className='chat--icon icon4'>
                  <GoLocation className='chat--container__icon' />
                </div>
                <p>Location</p>
              </div>
            </div>

          </div>
        </div >
      </div >
    </>
  )
}

export default Profile