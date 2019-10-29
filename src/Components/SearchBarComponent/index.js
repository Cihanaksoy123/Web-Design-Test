import React,{Component} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './SearchBarComponent.scss'

class SearchBarComponent extends Component{
    render(){
        return(
            <Container className='searchbar'>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type='text' placeholder='Search'/>
            </Container>
            // <div className='search-bar'>
                
                
            // </div>
        )
    }
}
export default SearchBarComponent;