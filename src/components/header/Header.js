import {Component} from 'react';
import './Header.css';
import Nav from './Nav';

class Header extends Component {
    render(){
    return (
        <div className="box">
            <div className="container flex">
                <img className="logo" src="assets/logo.png" alt="Orange" />
                <Nav />
            </div>
        </div>
    );}
}

export default Header;

