import React,{Component} from 'react'
import './LeftMenuComponent.scss'
class LeftMenuComponent extends Component{
    render(){
        const menus=[
            {id:1,icon:'fa fa-sm fa-envelope-o'},
            {id:2,icon:'fa fa-sm fa-clock-o'},
            {id:3,icon:'fa fa-sm fa-calendar-o'}
        ]
        return (
            <div className='menu'>
                <ul>
                    <li><i class='fa fa-lg fa-heart' aria-hidden="true"></i></li>
                </ul>
                <ul>
                    <li>Home</li>
                    {menus.map(item=>(<li key={item.id}><i className={item.icon} aria-hidden="true"></i></li>))}
                </ul>
                <ul className='last-child'>
                    <li><i class="fa fa-sm fa-sign-out" aria-hidden="true"></i></li>
                </ul>
            </div>
        )
    }
}
export default LeftMenuComponent;