import React ,{useState,useEffect} from 'react'
import AdminGroup from '../../component/AdminGroup'
import axios from 'axios'
import PersonsList from '../../component/PersonsList'
import { useDispatch, useSelector } from 'react-redux';
import { SetRole } from '../../REDUX/Feature/Students';
import AdminSearchBar from '../../component/AdminSearchBar';
function AdminEdit() {
  const [persons,setpersons] = useState([])
  const [SearchValue, setSearchValue] = useState()
  const data = useSelector((state)=>state.Persons)
  let newpersons = []
  const dispatch = useDispatch()
 
 const getName =async (event)=>{
  dispatch(SetRole(event.target.name))

    axios.get(`http://localhost:5000/${event.target.name}`).then(response=> (response.data)).then(data =>{
        setpersons(data)
    })
 }
  const Search = (event)=>{
  setSearchValue(event.target.value)
  if(persons.length > 0){
    newpersons = persons
  }
  const SearchPersons = newpersons.filter((person) => person.name.startsWith(SearchValue))
  console.log(SearchPersons.length)
    if(SearchPersons.length > 0)
    {
      setpersons(SearchPersons)
      newpersons = []
    }

  }
  return (
    <>
   
    <AdminGroup getName={getName}  />

  {data.role && <AdminSearchBar  Search={Search} value={SearchValue}/>}
  {persons && <PersonsList  list={persons} />}
    
    </>
  )
}

export default AdminEdit