import React from "react"

export default function Info() {
    return (
        <div className="info--div">
            <div className="info">   
                <img src="../oatmealRobeSelfie.png" className="pic"/> 
                <h1 className="name">Gabe Miller</h1>
                <h3 className="role">Software Engineer</h3>
                <a href="www.gabemiller.net">
                    <h5 className="website">gabemiller.net</h5>
                </a>
                <div className="buttons">
                    <a href="mailto:gabe@gabemiller.net">  
                        <div className="email--button">
                            <img src="../Mail.png" /> 
                            <label className="email--label">Email</label>
                        </div>
                    </a>
                    <a href="">
                        <div className="linkedin--button">
                            <img src="../linkedin.png" />
                            <label className="linkedin--label">LinkedIn</label>
                        </div>
                    </a>
                </div>
            </div>  
        </div>
    )
}