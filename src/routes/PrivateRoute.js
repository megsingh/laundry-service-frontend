import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PrivateRoute({ children, isAuthenticated}) {
    return (
      <Route
        render={
          () => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                  to="/signin"
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;
  
  