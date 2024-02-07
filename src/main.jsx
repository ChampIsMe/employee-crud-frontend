import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from './ReduxImpl/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import EmployeeList from './components/Employees/EmployeeList.jsx';
import EmployeeDetails from './components/Employees/EmployeeDetails.jsx';
import EmptyEmployeeList from './components/Employees/EmptyEmployeeList.jsx';
import ErrorPage from './components/common/ErrorPage.jsx';
import {PersistGate} from 'redux-persist/integration/react';
import EmployeeHome from './components/Employees/EmployeeHome.jsx';

let persistor = persistStore(store)
const router = createBrowserRouter([
  {
    path: '/app',
    element: <EmployeeHome/>,
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
  //todo: Uncomment strict mode. It's currently causing components to render twice
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
