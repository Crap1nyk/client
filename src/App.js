import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from './components/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Analytics from './pages/Dashboard/Analytics';
import Consumer from './pages/Dashboard/Consumer';
import Hospitals from './pages/Dashboard/Hospitals';
import OrganisationPage from './pages/Dashboard/OrganisationPage';
import Donation from './pages/Donation';
import AdminHome from './pages/admin/AdminHome';
import DonarList from './pages/admin/DonarList';
import HospitalList from './pages/admin/HospitalList';
import OrgList from './pages/admin/OrgList';



function App(){
return(
<>
<ToastContainer />
 <Routes>
   <Route
     path="/admin"
     element={
       <ProtectedRoute>
         <AdminHome />
       </ProtectedRoute>
     }
   />
   <Route
     path="/donar-list"
     element={
       <ProtectedRoute>
         <DonarList />
       </ProtectedRoute>
     }
   />
   <Route
     path="/hospital-list"
     element={
       <ProtectedRoute>
         <HospitalList />
       </ProtectedRoute>
     }
   />
   <Route
     path="/org-list"
     element={
       <ProtectedRoute>
         <OrgList />
       </ProtectedRoute>
     }
   />

   <Route
     path="/hospital"
     element={
       <ProtectedRoute>
         <Hospitals />
       </ProtectedRoute>
     }
   />
   <Route
     path="/analytics"
     element={
       <ProtectedRoute>
         <Analytics />
       </ProtectedRoute>
     }
   />
   <Route
     path="/consumer"
     element={
       <ProtectedRoute>
         <Consumer />
       </ProtectedRoute>
     }
   />
   <Route
     path="/donation"
     element={
       <ProtectedRoute>
         <Donation />
       </ProtectedRoute>
     }
   />
   <Route
     path="/orgnaisation"
     element={
       <ProtectedRoute>
         <OrganisationPage />
       </ProtectedRoute>
     }
   />
   <Route
     path="/donar"
     element={
       <ProtectedRoute>
         <Donar />
       </ProtectedRoute>
     }
   />
 <Route path='/' element={
    <ProtectedRoute><HomePage/></ProtectedRoute> } />
 <Route path='/login' element={<Login/>} />
 <Route path='/register' element={<Register/>} />
 <Route
 path="/login"
 element={
   <PublicRoute>
     <Login />
   </PublicRoute>
 }
/>
<Route
 path="/register"
 element={
   <PublicRoute>
     <Register />
   </PublicRoute>
 }
 />
 </Routes>
</>

)
}

export default App