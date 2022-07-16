import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            {/* <div style={{ backgroundColor: "white", top: "50px", textalign: "center" }}>
                <span style={{ margin: "20px" }}>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                </span>
                <span style={{ margin: "20px" }}>
                    <NavLink to='/about' activeStyle>
                        about
                    </NavLink>
                </span>
                <span style={{ margin: "20px" }}>
                    <NavLink to='/carrier' activeStyle>
                        Carrier
                    </NavLink>
                </span>



            </div> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className='container'>
             <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                       
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/home' activeStyle>
                        Home
                    </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/about' activeStyle>
                        About
                    </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/carrier' activeStyle>
                        Carrier
                    </NavLink>
                        </li>
                    </ul>
                </div>
             </div>
            </nav>
        </div>
    )
}
