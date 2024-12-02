import React from 'react'
import imageone from "../Assets/avataaars.svg";
import Titles from './Titles';
import { IoStarHalfSharp } from "react-icons/io5";
import Mainlayout from './Layout/Mainlayout';


function Home() {
  return (
    <Mainlayout>
      <div className='bgcolor p-5'>
        <div className='d-flex justify-content-center'>
          <img
            className='image '
            src={imageone}
            alt='image'
          />
        </div>
        <Titles text=" REACT-START BOOTSTRAP" className="text-center fs-1 fw-bolder text-white my-3" />
        <div className='d-flex justify-content-center'>
          <div className='underline'></div><span><IoStarHalfSharp className='fs-3 text-white rotate' /></span> <div className='underline'></div>
        </div>
        <Titles text="Graphic Artist - Web Designer - Illustrator" className="text-center fs-3 fw-bolder text-white my-3" />
      </div>
    </Mainlayout>
  )
}

export default Home;
