import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './customer/component/Routers/CustomerRouters.js';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserProfile } from './State/Auth/Action.js';

function App() {
  const dispatch = useDispatch();
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    // Check user profile if jwt exists
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(fetchUserProfile(jwt));
    }

    // Screen size check
    const checkScreenSize = () => {
      if (window.innerWidth < 1080) {
        setIsAllowed(false);
      } else {
        setIsAllowed(true);
      }
    };

    // Run on load
    checkScreenSize();

    // Run when resizing
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [dispatch]);

  if (!isAllowed) {
    return (
      <div style={{ 
        textAlign: "center", 
        marginTop: "20%", 
        color: "red", 
        fontSize: "22px",
        fontWeight: "bold"
      }}>
        🚫 This website is not available on small screens.  
        <br /> Please use a device with at least 1080px width.
        <br /><br />
        🚧 We are working on making it available for mobile devices soon.
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
      </Routes>
    </div>
  );
}

export default App;
