import React from 'react'
import CustomCursor from "./components/CustomCursor";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Admin/Dashboard.jsx';
import Login from './pages/Auth/Login.jsx';
import SignUp from './pages/Auth/SignUp.jsx';
import ManageTasks from './pages/Admin/ManageTasks.jsx';
import Createtask from './pages/Admin/Createtask.jsx';
import ManageUser from './pages/Admin/ManageUser.jsx';

import UserDashboard from './pages/User/UserDashboard.jsx';
import MyTasks from './pages/User/MyTasks.jsx';
import ViewTaskDetails from './pages/User/ViewTaskDetails.jsx';

import PrivateRoute from './routes/PrivateRoute.jsx';

const App = () => {
  return (

    <div>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={< SignUp />} />

          {/* Admin Route */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/tasks' element={<ManageTasks />} />
            <Route path='/admin/create-tasks' element={<Createtask />} />
            <Route path='/admin/user' element={<ManageUser />} />
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/user/tasks' element={<MyTasks />} />
            <Route path='/user/task-details/:id' element={<ViewTaskDetails />} />
          </Route>

        </Routes>
      </Router>
    </div>

  )
}

export default App;
