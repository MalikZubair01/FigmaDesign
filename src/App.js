import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useNavigate, Links } from "react-router-dom";
import SideBar2 from './SideBar2';
import Suspenduser from './SuspenUser';
import Alluser from './Alluser';
import Create from './Create';
import Complains from './Complains';
import Invite from './Invite';
import Verification from './Verification';
import Group from './Group';
import Overview from './Overview';
import AddGroup from './AddGroup';
import Login from './Login';
import Groupname from './Groupname';
import GroupBlock from './GroupBlock';

export default function App() {
  
  return (

    <BrowserRouter >
      <div className='flex w-100'>
        <div>
          <SideBar2 />
        </div>

        <div className='w-full'>
          <Routes  >
            {/* <Route path="/" element={<SideBar2 />}/> */}
            <Route path="/" element={<Overview title={" Overview"} />} />
            <Route path="/Alluser" element={<Alluser title={"Alluser"} />} />
            <Route path="/Suspenduser" element={<Suspenduser title={"Suspenduser"}/>} />
            <Route path="/Create" element={<Create title={"Create Event "} />} />
            <Route path="/Complains" element={<Complains title={"Complains"} />} />
            <Route path="/Invite" element={<Invite title={"Invite"} />} />
            <Route path="/Verification" element={< Verification title={ "User Verification "} />} />
            <Route path="/Groups" element={<Group title={"Group"} />} />
            <Route path="/AddGroup" element={<AddGroup title={"Group"} />} />
            <Route path="/Groupname" element={<Groupname title={"Group"} />} />
            <Route path="/GroupBlock" element={<GroupBlock title={"Group"} />} />



            
              <Route path="/Login" element={<Login />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}




