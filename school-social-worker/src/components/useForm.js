import {useState} from "react";


const useForm = (callback) =>{

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        grade_id: 0,
        background_story: "",
        status: "",
        age: 0,
        insurance_card: 1,
        insurance_expiration_date: "",
        birth_certificate: 1,
        special_needs: "",
        representative: "",
        contact_info: "",
        visit_id: 0
      });
    
      const handleChanges = e =>{
        const {name,value} = e.target;
          // console.log(e.target.name);
          // console.log(e.target.value);
          setValues({
              ...values,
              [name]: value
          })
      }
    
      const handleSubmit = e =>{
        e.preventDefault();
        callback();
    
      }

      return{
          handleChanges,
          handleSubmit,
          values
      };





}

export default useForm;
