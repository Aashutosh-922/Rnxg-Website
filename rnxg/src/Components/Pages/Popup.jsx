import React from 'react'
import './popup.css'
import { Link } from 'react-router-dom';

export default function Popup() {
    const Popup=()=>{
        document.getElementById('pop').style.right="20px";

    }
    const myTimeout = setTimeout(Popup, 2500);
    window.addEventListener('DOMContentLoaded', (event) => {
        myTimeout()
    });
    const Cancel =()=>{
document.getElementById('pop').style.display="none";
    }
  return (
    <>
    <div className="popup" id='pop'>
       <div className="popup-img">
                  <img rel="preload" src="https://ik.imagekit.io/wqweoudym/Poster_v5_bCRHRCo-l.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668784248411" alt="" />
          {/* <div className="popup-head">
              <h3>Rmageddon <span>2022</span> </h3>
              <p>Rmageddon is a intra college robotics event organised by Rnxg. Here we organise workshops and conduct various compititions.</p>
              <p>Event is postponed till further orders</p>
          </div> */}
          {/* <div className="buttons-pop">
          <Link
    activeClass="active"
    to={{pathname:"/registations"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>       <button>
    Register
</button>   </Link>
          <button onClick={Cancel}>Cancel</button></div> */}
       </div>
    </div>
    
    
    
    
    </>
  )
}
