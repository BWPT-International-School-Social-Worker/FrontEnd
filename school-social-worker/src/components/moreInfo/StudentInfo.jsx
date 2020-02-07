import React,{useContext} from 'react'
import {studentContext} from "../../contexts/studentContext"

 function StudentInfo(props) {
    const {students}=useContext(studentContext);
    console.log(students);
const student = students && students.find(kid =>{
   return `${kid.id}` === props.match.params.id
});

console.log(student);

    return (
        <div>
            <h1>{student && student.id}</h1>
        </div>
    )
}

export default StudentInfo;
