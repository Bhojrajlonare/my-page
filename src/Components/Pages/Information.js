import React, { useState } from 'react'
import { useNavigate,useLocation } from "react-router-dom";

import { Button, Checkbox, Form } from 'semantic-ui-react'


const Information = () => { 
 const [data, setData] = useState({
  city: "", country: ""});

 

    const navigate=useNavigate();
    const location = useLocation();
    const onsubmit = () => {
      navigate("/contectus", { state: data })
      
      
    }
    console.log(data);
    
  return (
    <div>
      <div className='container'>
      <div style={{left:"80px",top:"200px",position:"fixed"}}>{location.state.address}</div>
      <div style={{left:"80px",top:"250px",position:"fixed"}}>{location.state.mob}</div>
      <div style={{left:"80px",top:"300px",position:"fixed"}}>{location.state.email}</div>
<form style={{top:"200px",left:"40%",position:"fixed",margin:"1%"}} onSubmit={onsubmit}>
      <Form.Field>
                    <label>City</label>
                    <select id="city" name="city" onChange={(e) => data.city = e.target.value}>
                    <option >select</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="hydrabaad">Hydrabaad</option>
                        <option value="bangluru"></option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <select id="country" name="country" onChange={(e) => data.country = e.target.value}>
                    <option value="select">select</option>
                        <option value="india">India</option>
                        <option value="america">America</option>
                        <option value="russia">Russia</option>
                        <option value="japan">Japan</option>
                    </select>
                </Form.Field>
                </form>

      

      <button style={{ backgroundColor:"lightseagreen",top:"46%",left:"50%",position:"fixed"}} onClick={()=>navigate("/contectus")}>Back</button>
    </div>
    <div>
    <button type="button"
              onClick={() => onsubmit()} style={{ backgroundColor: "lightgreen", top:'300px',left:"40%",position:"fixed" }}>Submit</button>
            

    </div>
    </div>
  )
}

export default Information
