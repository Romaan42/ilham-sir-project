import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Course from './pages/Course.jsx'
import Students from './pages/Students.jsx'
import Contact from './pages/Contact.jsx'
import Admin from './admin/Admin.jsx'
import AddStudent from './admin/AddStudent.jsx'
import StudentPanel from './admin/StudentPanel.jsx'
import Dashboard from './admin/Dashboard.jsx'
import { Provider } from "react-redux"
import store from './store/index.js'


const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/course", element: <Course /> },
      { path: "/students", element: <Students /> },
      { path: "/contact", element: <Contact /> },
    ]
  },

  {
    path: "/admin", element: <Admin />, children: [
      { index: true, element: <Dashboard /> },
      { path: "add-student", element: <AddStudent /> },
      { path: "students", element: <StudentPanel /> }
    ]
  }


])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
