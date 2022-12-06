import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <>
                <div>
                    
                    <br />
                    <br />
                        <div class="container">
                            <h1 class="display-4">About US!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h5>Watch <span className="span">TV</span></h5>
                                    <p>Movies move us like nothing else can, whether they're scary, funny, dramatic, 
                                    <br />
                                    <br />
                                    romantic or anywhere in-between. So many titles, so much to experience.</p>
                                </div>
                                <div className="col-md-4">
                                    <ul className="table_Links">
                                    <h6>INFORMATION</h6>
                                        <li><NavLink className="ancor-footer" to="/">About Us</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Privacy Policy</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Terms  Conditions</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Contact Us</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Site Map</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="table_Links">
                                    <h6>CONTACT US</h6>
                                        <li><NavLink className="ancor-footer" to="/">company@gmail.com</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">617-280-2973</NavLink></li>
                                        <br />
                                        <br />
                                        <li><NavLink className="ancor-footer" to="/">SitegyTech | Mostafa Osama</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    </div>

            </>
        )
    }
}