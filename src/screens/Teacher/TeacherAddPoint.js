import React, { useState } from 'react'
import AddPointsChoice from '../../component/AddPointsChoice'
import TeacherList from '../../component/TeacherList';
import { useParams } from 'react-router-dom'
import axios from 'axios';
 function TeacherAddPoint() {
    const {id} = useParams()
    const [lesson , setlesson] = useState({name:'' , grade:null})
    const [Students , SetStudents] = useState([])
   async function GetStudents(event){
      setlesson({name:event.target.name , grade: id})
      axios.get(` http://localhost:5000/students?grade=${lesson.grade}`)
      .then(response =>SetStudents(response.data))
    }
  return (
    <>
    <AddPointsChoice grade={id} students = {GetStudents}/>
    <TeacherList students = {Students}  lesson = {lesson.name}/>
   
    </>
  )
}

export default TeacherAddPoint