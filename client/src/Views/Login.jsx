import React, { useState } from 'react';
import styles from '../Style/Login.module.css';
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import loginValidation from "../Validations/loginValidation"

const Login = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [form,setForm] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })

        setErrors(loginValidation({
            ...form,
            [event.target.name]:event.target.value
        }))
    }

    const dispatch = useDispatch()

    const handlerLogin = (event) =>{
        event.preventDefault()
        alert("Handler funcionando")
        /* dispatch(login(form)).then((response)=>{
            if(response.error){
                dispatch(setErrors({ type: "LOGIN", error: response.response.data }))
            }else{
                navigate("/")
                dispatch(clearErrors())
            }
        }) */
    }


  return (
    <div className={styles.registrationForm}>
        <form className={styles.form}>
            <div className={styles.formIcon}>
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className={styles.formGroup}>
                <input
                name="email"
                type="text"
                onChange={handleChange}
                className={`${styles.formControl} ${styles.item}`}
                placeholder="Email"
                />
            </div>
            <div className={styles.formGroup}>
                <input
                name="password"
                type="password"
                onChange={handleChange}
                className={`${styles.formControl} ${styles.item}`}
                placeholder="Password"
                />
            </div>
            <div className={styles.formGroup}>
                <button
                onClick={()=>handlerLogin()}
                type="button"
                className={`btn btn-block ${styles.createAccount}`}
                >
                Ingresar
            </button>
            </div>
        </form>
        {console.log("FORM:",form)}
        {console.log("ERRORS:",errors)}
{/*       <div className={styles.socialMedia}>
        <h5>Sign up with social media</h5>
        <div className={styles.socialIcons}>
          <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
          <a href="#"><i className="icon-social-google" title="Google"></i></a>
          <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
