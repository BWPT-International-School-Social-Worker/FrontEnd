import "./StudentList.scss";
import React, { useContext, useEffect, useState } from "react";
import { studentContext } from "../contexts/studentContext";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

function StudentList() {
  const { students } = useContext(studentContext);
  const [search, setSearched] = useState("");
  const [filtered, setFiltered] = useState([]);

  console.log(students);
  useEffect(() => {
    const filteredChars =
      students &&
      students.filter(kid => kid.grade_id.toString().includes(search));

    setFiltered(filteredChars);
  }, [search]);

  console.log(filtered);

  function handleChange(e) {
    e.preventDefault();
    setSearched(e.target.value);
  }
  if (filtered && filtered.length > 0) {
    return (
      <div>
        <h1 className="student-list-h1">Our Students</h1>
        <div className="filter">
          <label htmlFor = "number">Filter Students By Grade: </label>
          <input
            type="number"
            placeholder="filter by grade"
            onChange={handleChange}
            value={search}
          ></input>
          {/* <button type="submit">Clear</button> */}
        </div>

        <div className="student-container">
          {filtered &&
            filtered.map(student => {
              return <Link to={`/student/${student.id}`}><StudentCard key={student.id} student={student} /></Link>
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="student-list-h1">Our Students</h1>
        <div className="filter">
        <label htmlFor = "number">Filter Students By Grade: </label>
          <input
            type="number"
            placeholder="filter by grade"
            onChange={handleChange}
            value={search}
          ></input>
          {/* <button type="submit">Clear</button> */}
          
        </div>
        <div>
        <h1 className = "alert">No Students in this grade!!!</h1>
        </div>
      </div>
    );
  }
}

export default StudentList;
