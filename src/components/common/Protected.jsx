import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const {isSignedIn } = useUser();
    
    if(!isSignedIn){
        return <Navigate to='/' />
    }

  return <Outlet/>;
}

export default Protected