import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHref, useNavigate } from 'react-router-dom';
import Mypic2 from "../Images/Mypic2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'




export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const history = useNavigate();

    const onsubmit = () => {
        history("/home")

    }

    return (
        <>
            <div style={{ size: "5px", top: "10px", left: "300px", position: "fixed", }}>

                <img src={Mypic2} alt="jpg" />
            </div>
            <div className="login-wrapper">
            <div className="App">
      
    </div>


                <form style={{ size: "5px", top: "300px", left: "300px", position: "fixed", }} onSubmit={onsubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" required pattern='admin' onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" required pattern="Admin@123.com" onChange={e => setPassword(e.target.value)} />
                    </label>

                    <div>


                        <button type="submit">Login</button>
                        <button type="button"
                            onClick={() => history("/registration")}
                        > register</button>
                                                <button type="button"
                            onClick={() => history("/login")}
                        > cancel</button>
                        <button type='button' onClick={() => history("/forgot")}>Change pass</button>

                    </div>
                </form>
            </div>
        </>

    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};