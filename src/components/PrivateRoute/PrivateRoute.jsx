import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({
    redirectPath = '/',
    children,
  }) => {
    
    
    if (!localStorage.getItem('session')) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  export default PrivateRoute