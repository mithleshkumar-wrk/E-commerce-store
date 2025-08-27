import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const Protected = () => {
    const {isSignedIn } = useUser();
    
    if(!isSignedIn){
        toast.error("Login First")
        return <Navigate to='/' />
    }

  return <Outlet/>;
}

export default Protected