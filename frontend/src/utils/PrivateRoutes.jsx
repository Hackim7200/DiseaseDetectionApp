import { Outlet, Navigate } from 'react-router-dom'
import Layout from '../pages/Layout.jsx'

const PrivateRoutes = () => {
    let auth = {'token':true}
    return(
        auth.token ?  <Layout/>: <Navigate to="/login"/>
    )
}

export default PrivateRoutes