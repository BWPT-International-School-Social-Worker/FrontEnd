import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { useForm } from "react-hook-form";
import "./EditForm.scss";

const EditStudentForm = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

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
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody className = "edit-container">
          <form className = "edit-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First name"
              name="First name"
              ref={register({ required: true, maxLength: 80 })}
            />
            <input
              type="text"
              placeholder="Last name"
              name="Last name"
              ref={register({ required: true, maxLength: 100 })}
            />
            <input
              type="number"
              placeholder="grade_id"
              name="grade_id"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="background story"
              name="background story"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="status"
              name="status"
              ref={register({ required: true })}
            />
            <input
              type="number"
              placeholder="age"
              name="age"
              ref={register({ required: true })}
            />
            <label htmlFor = "insurance_card">Has Insurance Card?</label>
            <input
              type="checkbox"
              placeholder="insurance card"
              name="insurance_card"
              ref={register({ required: true })}
            />
            <input
              type="datetime"
              placeholder="insurance expiration date"
              name="insurance expiration date"
              ref={register({ required: true })}
            />
            <label htmlFor ="birth_certificate">Has birth certificate?</label>
            <input
              type="checkbox"
              placeholder="birth certificate"
              name="birth_certificate"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="special needs"
              name="special needs"
              ref={register}
            />
            <input
              type="text"
              placeholder="representative"
              name="representative"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="contact info"
              name="contact info"
              ref={register({ required: true })}
            />
            <input
              type="number"
              placeholder="visits"
              name="visits"
              ref={register({ required: true })}
            />

            <input type="submit" />
          </form>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default EditStudentForm;
