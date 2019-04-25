import React, { Component } from 'react'
import HeaderLink from './HeaderLink'

const links = [
    
    {
        path: '/',
        exact: false,
        label: "Home"
    },
    {
        path: '/products-list-page',
        exact: false,
        label: "Products list"
    },
    {
        path: '/buy-page',
        exact: false,
        label: "Buy"
    },
    {
        path: '/task-manager-page',
        exact: false,
        label: "Task Manager"
    }
]

class SideBar extends Component {
    showLinks(links){
        return links.map((link, index)=>{
            return <HeaderLink path={link.path} exact  = {link.exact} label={link.label}/>
        })
    }
    render() {
        return (
            <div className="bg-dark text-white" style={{ height: '100vh' }}>
                <ul className="list-group bg-dark text-white">
                    <li className="list-group-item bg-dark border-info"><h1>Hi!</h1></li>
                    <li className="list-group-item bg-dark border-info ">
                        <ul className="social " style={{ listStyle: "none", }}>
                            <li className='float-left  '><a href="#" className="icons-sm fb-ic "><i className="fab fa-facebook-f"> </i></a></li>
                            <li className='float-left ml-5 border-light'><a href="#" className="icons-sm pin-ic"><i className="fab fa-pinterest"> </i></a></li>
                            <li className='float-left ml-5'><a href="#" className="icons-sm gplus-ic"><i className="fab fa-google-plus-g"> </i></a></li>
                            <li className='float-left ml-5'><a href="#" className="icons-sm tw-ic"><i className="fab fa-twitter"> </i></a></li>
                        </ul>

                    </li>
                    <li className="list-group-item bg-dark border-info">
                        <input type="text" className="form-control bg-dark text-white border-info" placeholder="Search" />

                    </li>
                    <li className="list-group-item bg-dark border-info">
                        {this.showLinks(links)}
                    </li>
                    <li className="list-group-item bg-dark border-info"><a><i class="fas fa-sign-in-alt"></i>     Login</a></li>
                </ul>
            </div>

        )
    }
};
export default SideBar;