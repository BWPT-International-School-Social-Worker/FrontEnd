import React from "react";
import { useForm } from "react-hook-form";
import { HeadDiv, StylBtn } from "../Styles/styles";

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    
    <HeadDiv className="form-container">
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, max: 15, min: 8, maxLength: 0})} />
      <input type="text" placeholder="Password" name="Password" ref={register({max: 20, min: 9})} />
      <StylBtn type="submit">Sign in</StylBtn>
    </form>
    </HeadDiv>
  );
}
