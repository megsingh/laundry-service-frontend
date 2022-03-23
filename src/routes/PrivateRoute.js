import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PrivateRoute({ children, isAuthenticated,...rest}) {
    console.log("inside private route");
    
    return (
     
      <Route
      {...rest}
        render={
          () => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                  to="/"
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;
  
  