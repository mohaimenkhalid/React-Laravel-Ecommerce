import React from 'react';
import {Redirect, Route} from "react-router";

const ProtectedRoute = ({component: Component, isAuth, ...rest}) => {
    return (
        <Route {...rest} render={ (props) => {
                    if(isAuth === true && props.location.pathname === ('/login' || '/register')) {
                        return <Redirect to='/' />
                    } else if(isAuth === false && props.location.pathname === ('/login' || '/register')) {
                        return <Component {...props} />
                    }
                    else if(isAuth === true) {
                        return <Component {...props} />
                    }
                    else {
                        return <Redirect to='/' />
                    }
                }
            }
        />
    );
};

export default ProtectedRoute;

