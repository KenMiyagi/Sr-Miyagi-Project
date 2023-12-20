import React, { useState } from 'react';
import styles from '../Style/Login.module.css';
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import loginValidation from "../Validations/loginValidation"
import { login } from "../Redux/Actions/accountActions"
import { setNewErrors, clearErrors } from "../Redux/Actions/errorsActions"

const Login = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [form,setForm] = useState({
        meil:"",
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
        if(event) event.preventDefault()
        dispatch(login({...form,email:form.meil})).then((response)=>{
            console.log(response?.error);
            if(response.error){
                console.log(response?.error);
                dispatch(setNewErrors({ type: "LOGIN", error: response.response.data }))
            }else{
                navigate("/")
                dispatch(clearErrors())
            }
        })
    }

    const enterPressSubmit = (event) =>{
        if(event.key==="Enter"){
            handlerLogin()
          }
    }

  return (
    <div className={styles.registrationForm}>
        <form className={styles.form}>
            <div className={styles.formIcon}>
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className={styles.formGroup}>
                <input
                autoComplete="off"
                style={errors?.meil? {border: "2px solid red"} : {border: "2px solid green"}}
                /* onMouseLeave={()=>errors?.email ?setEmailStyles({border: "2px solid red"}): setEmailStyles(null)} */
               /* onMouseEnter={()=>console.log("ENTRAAAAAAAA")}
         onFocus={()=>console.log("HOVEEEER")}
        onBlur={()=>console.log("BLUUUUUR")} */
                name="meil"
                type="text"
                onChange={handleChange}
                className={`${styles.formControl} ${styles.item} ${styles.formInput}`}
                placeholder="Email"
                />
            </div>
            <p style={errors.meil?{visibility:"visible"}:{visibility:"hidden"}} className={styles.errorLabel}>{errors.meil}</p>
            <div className={styles.formGroup}>
                <input
                style={errors?.password? {border: "2px solid red"} : {border: "2px solid green"}}
                name="password"
                type="password"
                onChange={handleChange}
                className={`${styles.formControl} ${styles.item} ${styles.formInput}`}
                placeholder="Password"
                onKeyDown={(event)=>{enterPressSubmit(event)}}
                />
            </div>
                <p style={errors.password?{visibility:"visible"}:{visibility:"hidden"}} className={styles.errorLabel}>{errors.password}</p>
            <div className={styles.formGroup}>
            <p style={errors.password?{visibility:"visible"}:{visibility:"hidden"}} className={styles.errorLabel}>{errors.password}</p>
            {globalErrors?.LOGIN?.error ? (
              <text className="text-red-500">{globalErrors.LOGIN.error}</text>
            ) : null}
                <button
                onClick={(e)=>handlerLogin(e)}
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
