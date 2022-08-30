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
import Dashboard from './Pages/Inventory/Dashboard/Dashboard';
import AddProducts from './Pages/Inventory/AddProducts/AddProducts';
import EditProducts from './Pages/Inventory/EditProduct/EditProducts';
import ManageProducts from './Pages/Inventory/ManageProducts/ManageProducts';
import LiveChat from './Pages/Message/LiveChat';
import TaskEdit from './Pages/Projects/TaskEdit';
import ManagePurchase from './Pages/Inventory/Purchase/ManagePurchase';
import Purchase from './Pages/Inventory/Purchase/Purchase';
import OverView from './Pages/Inventory/OverView';
import SalesOrder from './Pages/Inventory/Sales/SalesOrder';
import Spreadsheets from './Pages/Spreadsheets/Spreadsheets';
// import Finance from './Pages/Projects/Finance';
import Invoice from './Pages/Inventory/Invoice/Invoice';
import AllBlog from './Pages/Blog/AllBlog';
import AdminBoard from './Pages/AdminBoard/AdminBoard';
import MakeAdmin from './Pages/AdminBoard/Admin/MakeAdmin';
import AdminProfile from './Pages/AdminBoard/Admin/AdminProfile';
import UserManage from './Pages/AdminBoard/Admin/UserManage';
import Schedulers from './Pages/Scheduler/Schedulers';
import SchedulerLanding from './Pages/Scheduler/SchedulerLanding';
import TextEditor from './Pages/TextEditor/TextEditor';
import TextEditorLanding from './Pages/TextEditor/TextEditorLanding';
import WorkFlow from './Pages/WorkFlow/WorkFLow';
import WorkFlowLand from './Pages/WorkFlow/WorkFlowLand';
import DragAndDrop from './Pages/Projects/DragAndDrop/DragAndDrop';
import Docs from './Pages/Docs/Docs';
import DocLanding from './Pages/Docs/DocLanding';
import Testing from './Pages/AdminBoard/Admin/Testing';
import Contact from './Pages/Contact/Contact';
import NoteHome from './Pages/Projects/Notes/NoteHome';
import QRCodeGenerate from './Pages/QRCode/QRCodeGenerate';
import About from './Pages/About/About';
import ProtectedPath from './Pages/UserAccess/ProtectedPath';
import UserBoard from './Pages/UserBoard/UserBoard';
import MyProfile from './Pages/UserBoard/MyProfile';
import AddReview from './Pages/UserBoard/AddReview';
import UpdateProfile from './Pages/UserBoard/UpdateProfile';
import SurveyQuizLanding from './Pages/Survey/SurveyQuizLanding';
import SurveyTypeOne from './Pages/Survey/SurveyTypes/SurveyTypeOne';
import QuizTypesOne from './Pages/Survey/SurveyTypes/QuizTypesOne';
import i18n from './i18n'
import CurrencyChange from './Pages/CurrencyChange/CurrencyChange';
import RealtimeMessage from './Pages/RealtimeMessage/RealtimeMessage';
import Messenger from './Pages/Message/Messenger';

// import Paint from './Pages/Paint/Paint';
// import ProtectedPath from './Pages/UserAccess/ProtectedPath';
// import AdminPath from './Pages/UserAccess/AdminPath';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlog />} />
        <Route path="/currencyChange" element={<CurrencyChange />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/RealtimeMessage" element={<RealtimeMessage />}></Route>
        <Route path="/messenger" element={<Messenger />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/testing" element={<Testing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        
{/* surveyQuizLanding */}
<Route path="/surveyQuizLanding" element={<SurveyQuizLanding />} />
        <Route path="/survey" element={<SurveyTypeOne />} />
        <Route path="/quiz" element={<QuizTypesOne />} />
        <Route path="/Scheduler-entry" element={<SchedulerLanding />} />
        <Route path="/Scheduler" element={<ProtectedPath><Schedulers /></ProtectedPath>} />
        <Route path="/textEditor-entry" element={<TextEditorLanding />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/workflow" element={<WorkFlow />} />
        <Route path="/Worklow-entry" element={<WorkFlowLand />} />
        <Route path="/docs" element={<ProtectedPath><Docs /></ProtectedPath>} />
        <Route path="/docs-entry" element={<DocLanding />} />
        <Route path="/qr-code" element={<QRCodeGenerate />} />
        {/* <Route path="/paint" element={<Paint/>} /> */}

        <Route path="admin" element={<AdminBoard />}>
          <Route index element={<MakeAdmin />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="users" element={<UserManage />} />
        </Route>

        <Route path="user" element={<UserBoard />}>
          <Route index element={<MyProfile/>} />
          <Route path="setting" element={<UpdateProfile />} />
          <Route path="add-review" element={<AddReview />} />
        </Route>

        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/inventory" element={<Inventtory />} />
        <Route path="/project" element={<ProjectLanding />} />
        <Route path="/Spread-sheet" element={<Spreadsheets />} />

        <Route path="dashboard" element={<Dashboard />}>
          {/* Overview Section will be added */}
          <Route index element={<OverView />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="manage-purchase" element={<ManagePurchase />} />
          <Route path="add-Inventory" element={<AddProducts />} />
          <Route path="manage-Inventory" element={<ManageProducts />} />
          <Route path="sales-order" element={<SalesOrder />} />
          <Route path="invoice" element={<Invoice />} />
        </Route>
        <Route path="editProducts/:id" element={<EditProducts />} />
        <Route path="task" element={<TaskBoard />}>
          <Route index element={<TaskShow />} />
          <Route path="taskAdd" element={<TaskAdd />} />
          <Route path="notes" element={<NoteHome />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          {/* <Route path="finance" element={<Finance />} /> */}
          <Route path="time-line" element={<DragAndDrop />} />

        </Route>
        <Route path="editTask/:id" element={<TaskEdit />} />
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
