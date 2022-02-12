import React from "react";
import { Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({ isAuthed, isLoading, ...props}) => {
    // if(isLoading == ""){
    //     return <div>Loading...</div>
    // }

    if(isAuthed == false || isAuthed == ""){
        return <Redirect to="/signup" />
    }

    return(
        <Route {...props} />
    )
}

export default ProtectedRoute;