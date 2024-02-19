import { Navigate } from 'react-router-dom'
import Layout from '../pages/Layout.jsx'

const PublicRoutes = () => {
    let auth = {'token':true}
    return(
        auth.token ?  <Navigate to="/"/>:<Layout/>
    )
}

export default PublicRoutes