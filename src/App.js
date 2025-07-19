import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './customer/component/Routers/CustomerRouters.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserProfile } from './State/Auth/Action.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(fetchUserProfile(jwt));
    }
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
      </Routes>
    </div>
  );
}

export default App;
