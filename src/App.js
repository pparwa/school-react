
import './App.css';
import { useContext,createContext, useReducer } from 'react';
import History from './screens/history';
import Home from './screens/Home';
import Login from './screens/Login';
import Admin from './screens/Admin/Admin';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { initialUseState,userReducer } from './Userreducer';
import AddPerson from './screens/Admin/AddPerson';
import AddInfo from './screens/Admin/AddInfo';
import AdminEdit from './screens/Admin/AdminEdit';
import Person from './component/Person';
import AddTable from './screens/Admin/AddTable';
import Teacher from './screens/Teacher/Teacher';
import TeacherAddPoint from './screens/Teacher/TeacherAddPoint';
import TeacherAttendence from './screens/Teacher/TeacherAttendence';
import Student from './screens/Students/Student';
import StudentProgram from './component/StudentProgram';
import  AuthGuard  from './component/Utils/AuthGuard';
import StudentPoints from './component/StudentPoints';
import Practice from './component/Practice';
import TeacherChat from './screens/Teacher/TeacherChat';
import Payment from './component/Payment';
import Check from './component/Check';
import  {ValueProvider}  from './REDUX/Feature/Value';
export const usercontext = createContext()
function App() {
  const [state, dispatch] = useReducer(userReducer,initialUseState)
 
  return (
    <div>
   <ValueProvider>
      <usercontext.Provider value={{state:state,dispatch:dispatch}}>
        <Router>
          <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/history' element={<History/>}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/payment' element={<Payment />}></Route>
        <Route exact path='/payment/check' element={<Check />}></Route>
        <Route element={<AuthGuard />} >
        <Route exact path='/login/admin'element={<Admin />}></Route>
        <Route exact path='/login/admin/addperson' element={<AddPerson />}></Route>
        <Route exact path='/login/admin/addinfo' element={<AddInfo />}></Route>
        <Route exact path='/login/admin/editperson' element={<AdminEdit />}></Route>
        <Route exact path='/login/admin/addtable' element={<AddTable />}></Route>
        <Route exact path='/login/admin/editperson/:id' element={<Person />}></Route>
        
        <Route exact path='/login/teacher' element={<Teacher />} ></Route>
        <Route exact path='/login/teacher/addpoint/:id' element={<TeacherAddPoint />} ></Route>
        <Route exact path='/login/teacher/presence/:id'  element={<TeacherAttendence />}></Route>
        <Route exact path='/login/teacher/practice/:id'  element={<Practice />}></Route>
         <Route exact path='/login/teacher/chat/:id/:grade'  element={<TeacherChat />}></Route>
         <Route exact path='/login/students' element={<Student />} ></Route>
    
         <Route exact path='/login/students/seeprogram/:grade' element={<StudentProgram />} ></Route>
         <Route exact path='/login/students/chat/:id/:grade'  element={<TeacherChat />}></Route>
         <Route exact path='/login/students/seepoints/:id'  element={<StudentPoints />}></Route>
          </Route>
            </Routes>
    
        </Router>
        </usercontext.Provider>
</ValueProvider>        
    </div>
  );
}

export default App;
