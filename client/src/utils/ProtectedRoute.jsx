import {Navigate} from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function ProtectedRoute({children}) {
    console.log("protected")
    const {user} = useAuth()

 if(!user.token) {
    return <Navigate to='/auth' replace />
 }

 return children
}