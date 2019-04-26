import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul>
                    <li className='brand'>
                        <a href='/'>Clicky Game</a>
                    </li>
                    <li className={this.props.GameMessageClass}>{this.props.GameMessage}</li>
                    <li>Score: {this.props.GameScore} | Top Score: {this.props.GameTopScore}</li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
