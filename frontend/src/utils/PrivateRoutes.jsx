import { Outlet, Navigate } from 'react-router-dom'
import Layout from '../pages/Layout.jsx'
import { LoginContext } from '../context/Context.jsx';
import { useContext } from 'react';

const PrivateRoutes = () => {
    const { logged, setLogged } = useContext(LoginContext);



    let auth = {'token':logged}
    return(
        auth.token ?  <Layout/>: <Navigate to="/login"/>
    )
}

export default PrivateRoutes