import { Route, Redirect } from "react-router-dom";
import { auth } from "./firebase";
const ProtectedRoute = ({ isAuthed, isLoading, ...props }) => {
  // if(isLoading == ""){
  //     return <div>Loading...</div>
  // }

  if (auth.currentUser == null) {
    return <Redirect to='/signup' />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
