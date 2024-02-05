import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Navigate, redirect, RouterProvider} from 'react-router-dom';
import EmployeeList from './components/Employees/EmployeeList.jsx';
import EmployeeDetails from './components/Employees/EmployeeDetails.jsx';
import EmptyEmployeeList from './components/Employees/EmptyEmployeeList.jsx';
import ErrorPage from './components/common/ErrorPage.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/app/employees',
        element: <EmployeeList/>,
        errorElement: <ErrorPage/>
      },
      {
        path: '/app/employees/:employeeId',
        element: <EmployeeDetails/>,
        loader: ({ params: { employeeId } }) => {
          if (!employeeId) {
            return redirect('/app/employees');
          }
          return null;
        },
        errorElement: <ErrorPage/>
      },
      {
        path: '/app/employees/empty',
        element: <EmptyEmployeeList/>,
        errorElement: <ErrorPage/>
      },
      {
        path: '*',
        element: <Navigate to={'/app/employees'} replace/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/app/employees'} replace/>,
    errorElement: <ErrorPage/>
  }
], {
  basename: '/',
  future: { v7_normalizeFormMethod: true }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
