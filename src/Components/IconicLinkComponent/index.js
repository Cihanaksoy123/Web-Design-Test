
import React, { Component } from "react";
import './IconicLinkComponent.scss'
class IconicLinkComponent extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.backgroundColor }} className='iconiclink'>
                <div className='iconiclink-content'>
                    <i className={'fa fa-lg' + ' ' + this.props.icon} aria-hidden="true"></i>
                </div>
                <div className='iconiclink-content'>
                    <b>{this.props.text}</b>
                </div>
            </div>
        )
    }
}

export default IconicLinkComponent