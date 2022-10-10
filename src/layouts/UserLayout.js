import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const UserLayout = () => {
  // get state.auth.user.role == 'user'
  const userExists = useSelector((state) => (state.auth?.user?.role === 'user') ? true : false)

  const location = useLocation();

  return (
    // <>
    //   {console.log("userExists? : ", userExists, ", location: ", location)}
    //   {userExists ? <Outlet />
    //     : <Navigate to="/user/login" replace state={{ from: location }} /> }
    // </>
    <>
      {userExists ? <Outlet />
        : <Navigate to="/user/login" replace state={{ from: location }} /> }
    </>
  )
}

export default UserLayout
