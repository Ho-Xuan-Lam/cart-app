import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Hearder extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler ml-auto mb-2 bg-light " type="button" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse show" id="myNavbar">
                <div className="container-fluid">
                    <div className="row">
                       
                        <div className="col-12 ml-auto bg-dark fixed-top py-2 top-navbar">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <Link to='/' >
                                        <h4 className="text-light text-uppercase mb-0">Phone_Store</h4>
                                    </Link>
                                    
                                </div>
                                <div className="col-md-5">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control search-input"
                                             placeholder="Search..." />
                                            <button type="button" className="btn btn-white search-button" >
                                                <i className="fas fa-search text-danger"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3">
                                    <ul className="navbar-nav">
                                        <li className="nav-item card-common">
                                            <Link to='/cart' className="nav-link text-white">
                                                <i className="fas fa-cart-plus text-white fa-lg"></i> Cart()
                                            </Link>
                                        </li>
                                          
                                        <li className="nav-item ml-md-auto">
                                            <a href="#" className="nav-link" data-toggle="modal" data-target="#sign-in">
                                                <i className="fas fa-user text-danger fa-lg"></i>
                                            </a> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </nav>
             
                <div className="modal fade" id="sign-in">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Log in</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control search-input" placeholder="User" />
                        <input type="text" className="form-control search-input" placeholder="Password" />                     
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Sing in</button>                   
                        
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Sign up</button>              
                    </div>
                </div>
            </div>
        </div>
    </header>  
     
             );
    }
}

export default Hearder;