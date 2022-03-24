import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PublicRoute({ children, isAuthenticated, ...rest }) {
    console.log("inside public route");
    console.log("is user Authenticated ",isAuthenticated);
    return (
      <Route
        {...rest}
        render={
          () => (
            !isAuthenticated ? (
              children
            ) : (
              <Redirect
                to="/orders"
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;