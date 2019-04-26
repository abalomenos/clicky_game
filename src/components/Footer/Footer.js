import React, { Component } from 'react';
import './Footer.css';


const img = './assets/images/reactlogo.svg';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='bottom'>
                    Powered By<img src={img} className='App-logo' alt='logo'/><a href='https://github.com/abalomenos' target='_blank' rel='noopener noreferrer'>Argiris Balomenos</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
