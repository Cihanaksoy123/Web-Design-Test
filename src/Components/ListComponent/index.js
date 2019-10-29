import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ListComponent.scss'
class ListComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {list} =this.props
        return (
            <div className="custom-list">
                <ul>
                    {list.map(item=>(<li><i class='fa fa-check' aria-hidden="true"></i> {item}</li>))}
                </ul>
            </div>
           
        )
    }
}
export default ListComponent;