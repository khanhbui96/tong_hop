import React from 'react';
import { Route, Link } from 'react-router-dom'
const HeaderLink = ({path, exact, label}) => {
    return <Route
        path={path}
        exact={exact}
        children={
            ({ match }) => {
                return <div>
                            <Link to={path} exact={exact} >
                                <i className="fas fa-list-ul mr-2 float-left" />
                                {label}
                            </Link>
                        </div>
            }
        }
    />
}


export default HeaderLink