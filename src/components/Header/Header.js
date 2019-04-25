import React from "react";
import Sidebar from "react-sidebar";
import SideBar from "./SideBar";

const mql = window.matchMedia(`(min-width: 800px)`);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        return (
            <Sidebar
                sidebar={<div><SideBar/></div>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <div className="header">
                    
               
                    <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark  fixed-top scrolling-navbar">
                        <a onClick={() => this.onSetSidebarOpen(true)} ><i className="fas fa-bars text-white fa-2x" /></a>
                        <a className="button text-white ml-2 line-height-center ">
                            <h3 className="mt-2">WELLCOME</h3>
                        </a>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item ">
                                {this.props.children}
                            </li>

                            <li className="nav-item avatar dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="https://avatars2.githubusercontent.com/u/47818986?s=460&v=4" className="rounded-circle z-depth-0" alt="avatar image" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-55">
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

             
            </Sidebar>
        );
    }
}

export default Header;