import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/UserAccess/Login';
import Register from './Pages/UserAccess/Register';
import Inventtory from './Pages/Inventory/Inventtory';
import ProjectLanding from './Pages/ProjectLanding/ProjectLanding';
import TaskShow from './Pages/Projects/TaskShow';
import TaskAdd from './Pages/Projects/TaskAdd';
import TaskBoard from './Pages/Projects/TaskBoard';
import AddEmployee from './Pages/Projects/AddEmployee';
import EmployeeHome from './Pages/Projects/EmployeeHome';
import Dashboard from './Pages/Inventory/Dashboard/Dashboard';
import AddProducts from './Pages/Inventory/AddProducts/AddProducts';
import EditProducts from './Pages/Inventory/EditProduct/EditProducts';
import ManageProducts from './Pages/Inventory/ManageProducts/ManageProducts';
import Purchase from './Pages/Inventory/Purchase';
import LiveChat from './Pages/Message/LiveChat';
import User from './Pages/Projects/User';
// import ProtectedPath from './Pages/UserAccess/ProtectedPath';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/inventory" element={<Inventtory />} />
        <Route path="/project" element={<ProjectLanding />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<AddProducts />} />
          <Route path="manageInventory" element={<ManageProducts />} />
          <Route path="purchase" element={<Purchase />} />
        </Route>
        <Route path="editProducts/:id" element={<EditProducts />} />
        <Route path="task" element={<TaskBoard />}>
          <Route index element={<TaskShow />} />
          <Route path="taskAdd" element={<TaskAdd />} />
          <Route path="employee" element={<EmployeeHome />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path='user' element={<User />} />
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
      {/* Scroll to top */}
      <ScrollToTop smooth style={{ marginBottom: "7%" }} component={<p style={{ color: "#1B98F5", marginLeft: "6px" }}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
        </svg>
      </p>} />
      {/* Messanger Added */}

    </div>
  )
}

export default App;
