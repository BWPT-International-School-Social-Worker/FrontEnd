import React, { useState, useEffect, useContext} from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./EditForm.scss";
import { studentContext } from "../contexts/studentContext";

const EditStudentForm = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [student, setStudent] = useState();
  const {getStudents}=useContext(studentContext)
  const toggle = () => setPopoverOpen(!popoverOpen);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);

  const getStudent = () => {
    axiosWithAuth()
      .get(`/students/${props.id}`)
      .then(response => {
        console.log("student", response.data);
        setStudent(response.data);
      });
  };
  

  const editFunc = (value) => {
    axiosWithAuth()
      .put(`/students/${props.id}`,value)
      .then(response => {
        getStudents()
        .catch(error => console.log(error.response));
      });
    
  };

  useEffect(() => {
    localStorage.getItem("token") && getStudent();
  }, []);

  return (
    <div>
      <Button id="Popover1" type="button">
        Edit Student Info
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>Edit</PopoverHeader>
        <PopoverBody className="edit-container">
          <form className="edit-form" onSubmit={handleSubmit(editFunc)}>
            <input
              type="text"
              placeholder={`${props.student.first_name}`}
              name="first_name"
              ref={register}
            />
            <input
              type="text"
              placeholder={`${props.student.last_name}`}
              name="last_name"
              ref={register}
            />
            <input
              type="number"
              placeholder={`${props.student.grade_id}`}
              name="grade_id"
              ref={register}
            />
            <input
              type="text"
              placeholder={`${props.student.background_story}`}
              name="background_story"
              ref={register}
            />
            <input
              type="text"
              placeholder={`${props.student.status}`}
              name="status"
              ref={register}
            />
            <input
              type="number"
              placeholder={`${props.student.age}`}
              name="age"
              ref={register}
            />
            <label htmlFor="insurance_card">Has Insurance Card?</label>
            <input
              type="checkbox"
              name="insurance_card"
              ref={register}
            />
            <input
              type="datetime"
              placeholder={`${props.student.insurance_expiration_date}`}
              name="insurance_expiration_date"
              ref={register}
            />
            <label htmlFor="birth_certificate">Has birth certificate?</label>
            <input
              type="checkbox"
              name="birth_certificate"
              ref={register}
            />
            <input
              type="text"
              placeholder={`${props.student.special_needs}`}
              name="special_needs"
              ref={register}
            />
            <input
              type="text"
              placeholder={`${props.student.representative}`}
              name="representative"
              ref={register}
            />
            <input
              type="text"
              placeholder={`${props.student.contact_info}`}
              name="contact_info"
              ref={register}
            />
            <input
              type="number"
              placeholder={`${props.student.visit_id}`}
              name="visit_id"
              ref={register}
            />

            <input type="submit" />
          </form>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default EditStudentForm;
