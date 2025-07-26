import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AuthGuard = ({ children }) => {
 
    const { currentUser } = useSelector((state) => state.user || {});
    // const currentUser = true;

    return currentUser ? children : <Navigate to="/" replace />;
 
};

export default AuthGuard;
