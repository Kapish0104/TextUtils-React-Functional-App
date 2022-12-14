import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                    
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        {/* <input onClick = {props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}

                        
                        <label style={{fontSize:'1.2em', fontWeight:'bold'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Website's Color</label>

                        <button onClick={() => props.changeColor('red')} style = {{backgroundColor:'red',padding:'1em',marginLeft:'1em',marginRight:'1em',borderRadius:'100%'}}></button>
                        
                        <button onClick={() => props.changeColor('green')} style = {{backgroundColor:'green',padding:'1em',marginLeft:'1em',marginRight:'1em',borderRadius:'100%'}}></button>
                        
                        <button onClick={() => props.changeColor('blue')} style = {{backgroundColor:'blue',padding:'1em',marginLeft:'1em',marginRight:'1em',borderRadius:'100%'}}></button>

                        <button onClick={() => props.changeColor('orange')} style = {{backgroundColor:'Orange',padding:'1em',marginLeft:'1em',marginRight:'1em',borderRadius:'100%'}}></button>

                        
                        <button onClick={() => props.changeColor('white')} style = {{backgroundColor:'white',padding:'1em',marginLeft:'1em',marginRight:'1em',borderRadius:'100%'}}></button>

                        <button onClick={() => props.changeColor('black')} style = {{backgroundColor:'black',padding:'1em',marginLeft:'1em',marginRight:'1em',borderRadius:'100%'}}></button>

                    </div>

                </div>
                </div>
            </nav>
        )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string
};

Navbar.defaultProps ={
    title:"Hello",
    aboutText:"hi"
};