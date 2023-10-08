import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className='text-center'>
            <span className="loading loading-spinner mx-auto loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;