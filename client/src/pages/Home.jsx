import React from "react";
import background from '../components/facemaskcheck.jpg';
import { Link } from 'react-router-dom'


console.log(background);


function Home() {
    const hpbutton = {
        color: "white",
        backgroundColor: "#008080",
        padding: "10px 24px",
        fontFamily: "Arial",
        margin: "6px 4px",
        textAlign: "center",
        position: "absoluteright",

        fontSize: "20px",
        borderRadius: "10px",
        border: "none",
        display: "inline-block",
        minWidth: "140px",
        maxWidth: "140px"
    }
    return (
        <div className="home" >
            <div class="container" >
                <div class="piccontainer">
                    <div class="body">
                        <img className="hppic" src={background} width="100%" style={{opacity:'0.5'}} />
                            <div class="text-block">
                                <div className="box title-container">
                                    <h1 class="font-weight-light"></h1>
                                        <div className="fontgradon" style={{color:'#008080'}}>Software Studio 3B</div>
                                        <div className="fontauto"  style={{color:'#008080'}}>Face Mask Check Application</div>
                                </div>
                                            <div className="box button-container">
                                                <Link to="Signin">
                                                    <button type="button" style={hpbutton}>Sign in</button>
                                                </Link>
                                                <Link to="Signup">
                                                    <button type="button" style={hpbutton}>Sign up</button>
                                                </Link>
                                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home};
