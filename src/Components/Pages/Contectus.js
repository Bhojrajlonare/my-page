import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import './Register.css'

const Contectus = () => {
  const [inputData, setInputData] = useState({
     email: "", address: "", mob: ""
  });



  const navigate = useNavigate();
  const location = useLocation();
  const onsubmit = () => {
    navigate("/information", { state: inputData })
    
    
  }

  console.log(inputData);
  return (
    <div >
       
       <div style={{left:"80px",top:"200px",position:"fixed"}}>{ location.state.city}</div>
      <div  style={{left:"80px",top:"250px",position:"fixed"}}>{location.state.country}</div>
      
      <div style={{ width: "200px", top:"100px", left: "500px", fontSize: "20px", position: "fixed" }}>
        
        <form className='container' onSubmit={onsubmit}>
         
          <div>
            <label style={{ color: "green" }}>Address</label>
            <input type="text" name='address' id='address' required
              onChange={(e) => inputData.address = e.target.value} />
          </div>
          <div>
            <label style={{ color: "yellow" }}>Email</label>
            <input type="text" id='email' name='email' required pattern='(a-z )(0-9) (@,.)' onChange={(e) => inputData.email = e.target.value} />
          </div>
         

          <div>
            <label style={{ color: "blue" }} >Mob</label>
            <input type="number" id='number'
              onChange={(e) => inputData.mob = e.target.value} />
          </div>



          <div>

            <button type="button"
              onClick={() => onsubmit()} style={{ backgroundColor: "lightgreen", margin: "15%" }}>Submit</button>
            <button style={{ backgroundColor: "red",left:"650px",position:"fixed",top:"350px" }}>Cancel</button>
          </div>



        </form>

      </div>
    </div>

  )
}

export default Contectus;
