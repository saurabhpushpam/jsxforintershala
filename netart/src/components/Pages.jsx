import React from 'react'
import './page.css'
import logo from './logo.png';
import trophy from './1.png'
import photo from './2.png'
import machinepic from './3.png'
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Pages = () => {
  return (
    <>
      <div className="top">
        <div className="head">
          {/* <img src="./logo.png" alt="logo" /> */}

          <img src={logo} alt="logo" />
        </div>

        <div className="first">
          <div className="trophy">
            <img src={trophy} alt="trophy" />
          </div>
          <div className="photo">
            <h6> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
            <ul className='ulist'>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img src={photo} alt="photo" />
            <p>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>


        <div className="para">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
          </p>
        </div>
        <div className="machine">
          <img src={machinepic} alt="trophy" />
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
          </p>
        </div>

        <div className="about">
          <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
          <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className="footer">
          <div className="item">
            <FaSquarePhone />
            <p>Toll free 1800 200 1234</p>
          </div>

          <div className="item">
            <FaFacebook />
            <p>www.facebook.com/cripumps</p>
          </div>

          <div className="item">
            <TbWorldWww />
            <p>www.crigroups.com</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Pages