import React from 'react';
import './header.scss';
import logo from '../../assets/at.png';

export default class Header extends React.PureComponent{
    render(){
        return (
            <div className="toolbar">
                <img src={logo} alt="cover"></img>
                <p className="header">Anithings</p>
            </div>
        )
    }
}