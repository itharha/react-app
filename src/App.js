import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import { UserProvider } from './UserContext';

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router}>
        <div className="App">
          {}
        </div>
      </RouterProvider>
    </UserProvider>
  );
};

export default App;




