import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import "./Profile1.css"
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../GeneralScreens/Loader";
import { AuthContext } from '../../Context/AuthContext';
import EsheDev from './Eshe1.png'
import LadaliDev from './Ladali1.png'
import YashDev from './YASH1.png'
import NitinDev from './Nitin4.png'

export const Profile1 = () => {
    return (
      <div>
       
        <div className="Developer1">
          <img src={YashDev} className="YashDev"></img>
          <div className="card-body1">
            <h2 className="Dev1Title">Yash Tiwary</h2>
            <p>Studying at NIIT University under Data Science Specialisation.</p><br></br>
               <b>Email: Yash.tiwary20@st.niituniversity.in</b>
          </div>
        </div>
        <div className="Developer2">
          <img src= {LadaliDev} className="LadaliDev"></img>
          <div className="card-body2">
            <h2 className="Dev2Title">Ladali Jain</h2>
            <p>Studying at NIIT University under Artificial Intelligence Specialisation.</p><br></br>
               <b>Email: Ladali.jain20@st.niituniversity.in</b>
          </div>
        </div>
        <div className="Developer3">
          <img src={EsheDev} className="EsheDev"></img>
          <div className="card-body3">
            <h2 className="Dev3Title">Eshe Dogra</h2>
            <p>Studying at NIIT University under Data Science Specialisation.</p><br></br>
               <b>Email: Eshe.dogra20@st.niituniversity.in</b>
          </div>
        </div>
        <div className="Developer4">
          <img src={NitinDev} className="NitinDev"></img>
          <div className="card-body4">
            <h2 className="Dev4Title">Nitin Dhakad</h2>
            <p>Studying at NIIT University under Artificial Intelligence.</p><br></br>
               <b>Email: Nitin.dhakad20@st.niituniversity.in</b>
            
          </div>
          
          
        </div>
      </div>
      
    )
  }
  
  export default Profile1;
