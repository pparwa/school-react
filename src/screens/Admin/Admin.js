import React, { useContext } from 'react';
import NavbarAdmin from '../../component/AdminNavbar'
import { usercontext } from '../../App';
import Chart from '../../component/Chart';
function Admin() {
  let {state} = useContext(usercontext)
  return state.login &&  (
    <>
    <NavbarAdmin />
    <div className='d-flex justify-content-center align-items-center mt-5' style={{height:'80vh'}}>
    <Chart />
    </div>
    </>
  )
}

export default Admin