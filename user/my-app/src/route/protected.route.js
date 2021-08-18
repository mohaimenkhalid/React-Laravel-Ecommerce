import React from 'react';
import {Redirect, Route} from "react-router";
import {toast} from "react-toastify";

const ProtectedRoute = ({component: Component, isAuth, ...rest}) => {
    return (
        <Route {...rest} render={ (props) => {
                    if(isAuth === true && (props.location.pathname === '/login' || props.location.pathname ==='/register')) {
                        return <Redirect to='/' />
                    } else if(isAuth === false && (props.location.pathname === '/login' || props.location.pathname ==='/register')) {
                        return <Component {...props} />
                    }
                    else if(isAuth === true) {
                        return <Component {...props} />
                    }
                    else {
                        toast.error('Login first')
                        return <Redirect to='/login' />
                    }
                }
            }
        />
    );
};

export default ProtectedRoute;

